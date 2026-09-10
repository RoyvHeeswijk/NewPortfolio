'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import SignalNavbar from './SignalNavbar';
import SignalFooter from './SignalFooter';

interface LayoutProps {
  children: ReactNode;
}

const SIGNAL_ROUTES = new Set([
  '/',
  '/Forge',
  '/UIFoundry',
  '/SalesFlow',
  '/GymTrack',
  '/Threejs',
  '/Upendo',
]);

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const useSignalShell = SIGNAL_ROUTES.has(router.pathname);

  if (useSignalShell) {
    return (
      <div className="signal-theme flex flex-col min-h-screen overflow-visible">
        <SignalNavbar />
        <div className="flex-grow overflow-visible">{children}</div>
        <SignalFooter />
      </div>
    );
  }

  return (
    <div className="signal-theme flex flex-col min-h-screen relative">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
