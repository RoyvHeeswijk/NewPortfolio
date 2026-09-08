import type { BeforeSendEvent } from '@vercel/analytics/next';

export const ANALYTICS_OPT_OUT_KEY = 'portfolio-analytics-opt-out';

export function isAnalyticsOptedOut(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === '1';
}

export function setAnalyticsOptOut(optOut: boolean): void {
  if (typeof window === 'undefined') return;
  if (optOut) {
    localStorage.setItem(ANALYTICS_OPT_OUT_KEY, '1');
  } else {
    localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
  }
}

export function analyticsBeforeSend(event: BeforeSendEvent): BeforeSendEvent | null {
  if (process.env.NODE_ENV === 'development') return null;
  if (typeof window !== 'undefined' && localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === '1') {
    return null;
  }
  return event;
}
