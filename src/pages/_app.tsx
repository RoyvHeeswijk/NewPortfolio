import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

// The error "Cannot find module 'next/app' or its corresponding type declarations"
// indicates that TypeScript cannot find the type definitions for next/app.
// This usually happens when:
// 1. next.js is not properly installed as a dependency
// 2. The TypeScript configuration is not properly set up
// 3. @types/next package is missing
//
// To fix this:
// 1. Make sure next is installed: npm install next
// 2. Install @types/next: npm install --save-dev @types/next
// 3. Verify tsconfig.json includes next in the types array
//
// The code itself is correct - this is a standard Next.js _app file that:
// - Imports global styles
// - Sets up the main App component that wraps all pages
// - Passes props through to each page component

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-900 to-black text-white`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeProvider>
  );
}
