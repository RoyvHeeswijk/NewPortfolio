import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/Layout';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false} disableTransitionOnChange>
      <main className={`${inter.className} min-h-screen`} style={{ backgroundColor: 'hsl(220, 20%, 4%)' }}>
        <div className="relative">
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Analytics />
          <SpeedInsights />
        </div>
      </main>
    </ThemeProvider>
  );
}
