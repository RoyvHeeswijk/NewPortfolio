import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

const SESSION_COOKIE = 'portfolio-owner-auth';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSessionToken(secret: string): string {
  return crypto.createHmac('sha256', secret).update('portfolio-owner-session').digest('hex');
}

function timingSafeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

function parseCookies(cookieHeader?: string): Record<string, string> {
  if (!cookieHeader) return {};
  return Object.fromEntries(
    cookieHeader.split(';').map((part) => {
      const [key, ...rest] = part.trim().split('=');
      return [key, decodeURIComponent(rest.join('='))];
    }),
  );
}

function isAuthenticated(req: NextApiRequest, secret: string): boolean {
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies[SESSION_COOKIE];
  if (!token) return false;
  return timingSafeEqual(token, getSessionToken(secret));
}

type ResponseData =
  | { authenticated: boolean; authRequired: boolean }
  | { ok: boolean; error?: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const secret = process.env.ANALYTICS_OWNER_SECRET;

  if (!secret) {
    if (req.method === 'GET') {
      return res.status(200).json({ authenticated: true, authRequired: false });
    }
    return res.status(503).json({ ok: false, error: 'Pincode niet geconfigureerd' });
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      authenticated: isAuthenticated(req, secret),
      authRequired: true,
    });
  }

  if (req.method === 'POST') {
    const { pin, action } = req.body ?? {};

    if (action === 'logout') {
      res.setHeader(
        'Set-Cookie',
        `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
      );
      return res.status(200).json({ ok: true });
    }

    if (typeof pin !== 'string' || !timingSafeEqual(pin, secret)) {
      return res.status(401).json({ ok: false, error: 'Onjuiste pincode' });
    }

    const token = getSessionToken(secret);
    res.setHeader(
      'Set-Cookie',
      `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_MAX_AGE}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
    );
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'DELETE') {
    res.setHeader(
      'Set-Cookie',
      `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
    );
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  return res.status(405).json({ ok: false, error: 'Method not allowed' });
}
