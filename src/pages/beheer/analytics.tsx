import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SectionLabel from '../../components/ui/SectionLabel';
import Reveal from '../../components/ui/Reveal';
import { isAnalyticsOptedOut, setAnalyticsOptOut } from '../../lib/analytics-opt-out';

const VERCEL_ANALYTICS_URL =
  process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_URL ?? 'https://vercel.com/dashboard';

export default function AnalyticsBeheerPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authRequired, setAuthRequired] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);
  const [pin, setPin] = useState('');
  const [authError, setAuthError] = useState('');
  const [optedOut, setOptedOut] = useState(false);

  const refreshOptOutStatus = useCallback(() => {
    setOptedOut(isAnalyticsOptedOut());
  }, []);

  const checkAuth = useCallback(async () => {
    setAuthLoading(true);
    try {
      const res = await fetch('/api/analytics-owner');
      const data = await res.json();
      setAuthenticated(data.authenticated);
      setAuthRequired(data.authRequired ?? true);
    } catch {
      setAuthenticated(false);
    } finally {
      setAuthLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
    refreshOptOutStatus();
  }, [checkAuth, refreshOptOutStatus]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/analytics-owner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin, action: 'login' }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAuthError(data.error ?? 'Inloggen mislukt');
        return;
      }
      setPin('');
      setAuthenticated(true);
    } catch {
      setAuthError('Inloggen mislukt');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/analytics-owner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout' }),
    });
    setAuthenticated(false);
  };

  const handleOptOut = () => {
    setAnalyticsOptOut(true);
    refreshOptOutStatus();
  };

  const handleOptIn = () => {
    setAnalyticsOptOut(false);
    refreshOptOutStatus();
  };

  return (
    <>
      <Head>
        <title>Analytics beheer | Roy van Heeswijk</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="py-24 min-h-[70vh]">
        <div className="max-w-[720px] mx-auto px-8">
          <SectionLabel number="—" label="Analytics beheer" />

          {authLoading ? (
            <p className="font-mono text-xs uppercase tracking-label text-muted-foreground">
              Laden…
            </p>
          ) : !authenticated && authRequired ? (
            <Reveal>
              <div className="border border-border p-8">
                <h1 className="font-display text-2xl text-foreground mb-2">Eigenaarstoegang</h1>
                <p className="text-muted-foreground text-sm mb-6">
                  Voer je pincode in om analytics-instellingen te beheren.
                </p>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <label className="font-mono text-[10px] uppercase tracking-label text-muted-foreground">
                    Pincode
                    <input
                      type="password"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      className="mt-2 block w-full bg-background border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary"
                      autoComplete="current-password"
                    />
                  </label>
                  {authError && (
                    <p className="font-mono text-xs text-red-400">{authError}</p>
                  )}
                  <button
                    type="submit"
                    className="font-mono text-[11px] uppercase tracking-label text-primary border border-primary px-6 py-3 hover:bg-primary/10 transition-colors w-fit"
                  >
                    Inloggen
                  </button>
                </form>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-8">
              <Reveal>
                <div className="border border-border p-8">
                  <h1 className="font-display text-2xl text-foreground mb-2">Tracking op dit apparaat</h1>
                  <p className="text-muted-foreground text-sm mb-6">
                    Sluit je eigen bezoeken uit zodat alleen echte bezoekers in Vercel Analytics verschijnen.
                    Dit geldt per browser — herhaal op telefoon en laptop indien nodig.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${optedOut ? 'bg-primary' : 'bg-muted-foreground'}`}
                      aria-hidden
                    />
                    <p className="font-mono text-xs uppercase tracking-label text-foreground">
                      {optedOut ? 'Jouw bezoeken worden niet getrackt' : 'Jouw bezoeken worden wel getrackt'}
                    </p>
                  </div>

                  {optedOut ? (
                    <button
                      type="button"
                      onClick={handleOptIn}
                      className="font-mono text-[11px] uppercase tracking-label text-muted-foreground border border-border px-6 py-3 hover:border-primary hover:text-primary transition-colors"
                    >
                      Tracking weer aanzetten
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleOptOut}
                      className="font-mono text-[11px] uppercase tracking-label text-primary border border-primary px-6 py-3 hover:bg-primary/10 transition-colors"
                    >
                      Mijn bezoeken uitsluiten
                    </button>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="border border-border p-8">
                  <h2 className="font-display text-xl text-foreground mb-2">Vercel Analytics dashboard</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    Bekijk bezoekersstatistieken in het Vercel-dashboard:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6 list-disc list-inside">
                    <li><strong className="text-foreground">Country</strong> — land van bezoekers</li>
                    <li><strong className="text-foreground">Pages</strong> — welke pagina&apos;s bekeken worden</li>
                    <li><strong className="text-foreground">Referrers</strong> — waar bezoekers vandaan komen (LinkedIn, Google, etc.)</li>
                    <li><strong className="text-foreground">Devices / Browsers / OS</strong> — apparaat en browser</li>
                  </ul>
                  <a
                    href={VERCEL_ANALYTICS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] uppercase tracking-label text-primary border border-primary px-6 py-3 hover:bg-primary/10 transition-colors inline-block"
                  >
                    Open Vercel Analytics →
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border border-border p-8">
                  <h2 className="font-display text-xl text-foreground mb-2">Setup (eenmalig)</h2>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Vercel Dashboard → Portfolio-project → <strong className="text-foreground">Analytics</strong> → Enable Web Analytics</li>
                    <li>Settings → Environment Variables → <code className="font-mono text-xs text-primary">ANALYTICS_OWNER_SECRET</code> instellen (Production)</li>
                    <li>Optioneel: <code className="font-mono text-xs text-primary">NEXT_PUBLIC_VERCEL_ANALYTICS_URL</code> naar je project-analytics URL</li>
                    <li>Bookmark deze pagina en klik &quot;Mijn bezoeken uitsluiten&quot;</li>
                  </ol>
                  <p className="text-xs text-muted-foreground mt-4">
                    Meer details: <Link href="/privacy" className="text-primary link-underline">Privacyverklaring</Link>
                  </p>
                </div>
              </Reveal>

              {authRequired && (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="font-mono text-[10px] uppercase tracking-label text-muted-foreground hover:text-primary transition-colors"
                >
                  Uitloggen
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
