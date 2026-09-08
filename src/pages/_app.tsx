import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/Layout';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { analyticsBeforeSend } from '@/lib/analytics-opt-out';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false} disableTransitionOnChange>
      <main className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} min-h-screen bg-background`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics beforeSend={analyticsBeforeSend} />
        <SpeedInsights />
      </main>
    </ThemeProvider>
  );
}
