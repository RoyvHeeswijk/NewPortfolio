import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="32x32" />
        <link rel="alternate icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/icons/portfolio-logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2B2B2B" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Roy van Heeswijk | UX/UI Designer & Front-end Developer" />
        <meta property="og:description" content="Portfolio van Roy van Heeswijk. UX/UI design en front-end development: interfaces ontwerpen en omzetten naar werkende producten." />
        <meta property="og:image" content="/icons/og-share.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Roy van Heeswijk | UX/UI Designer & Front-end Developer" />
        <meta name="twitter:description" content="Portfolio van Roy van Heeswijk. UX/UI design en front-end development: interfaces ontwerpen en omzetten naar werkende producten." />
        <meta name="twitter:image" content="/icons/og-share.svg" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
