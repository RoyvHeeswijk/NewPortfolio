import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/icons/portfolio-logo.svg" />
        <link rel="alternate icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/icons/portfolio-logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0F172A" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
