import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import HeroSignal from '@/components/home/HeroSignal';
import ProfileSignal from '@/components/home/ProfileSignal';
import ExpertiseSignal from '@/components/home/ExpertiseSignal';
import ContactSignal from '@/components/home/ContactSignal';
import WorkIndex from '@/components/home/WorkIndex';

export default function HomePage() {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname !== '/') return;
    const scrollToHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
      if (!hash) return;

      if (hash === 'contact') {
        window.scrollTo({
          top: document.documentElement.scrollHeight - window.innerHeight,
          behavior: 'smooth',
        });
        return;
      }

      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const timer = setTimeout(scrollToHash, 150);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Roy van Heeswijk - UX/UI Designer & Front-end Developer</title>
        <meta
          name="description"
          content="Portfolio van Roy van Heeswijk. UX/UI designer en front-end developer die interfaces ontwerpt en omzet naar werkende producten."
        />
      </Head>

      <HeroSignal />
      <ProfileSignal />
      <ExpertiseSignal />
      <WorkIndex />
      <ContactSignal />
    </>
  );
}
