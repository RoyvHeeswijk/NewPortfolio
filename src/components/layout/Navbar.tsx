import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
    { name: 'Home', path: '/', hash: null },
    { name: 'Over Mij', path: '/#about-me', hash: 'about-me' },
    { name: 'Projecten', path: '/#projects', hash: 'projects' },
    { name: 'Contact', path: '/#contact', hash: 'contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentHash, setCurrentHash] = useState('');
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
        setCurrentHash(hash);
        const handleHashChange = () => setCurrentHash(window.location.hash.slice(1));
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [pathname]);

    useEffect(() => {
        if (pathname !== '/') return;
        const sections = ['about-me', 'projects', 'contact'];
        const handleScroll = () => {
            if (window.scrollY < 100 && !window.location.hash) {
                setCurrentHash('');
                return;
            }
            const scrollBottom = Math.ceil(window.innerHeight + window.scrollY);
            const atBottom = scrollBottom >= document.documentElement.scrollHeight - 100;
            if (atBottom) {
                setCurrentHash(sections[sections.length - 1]);
                return;
            }
            let activeSection = '';
            let maxTop = -Infinity;
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top <= 200 && top > maxTop) {
                        maxTop = top;
                        activeSection = id;
                    }
                }
            }
            if (activeSection) setCurrentHash(activeSection);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const isItemActive = (item: typeof navItems[0]) =>
        pathname === '/'
            ? (item.hash ? currentHash === item.hash : !currentHash)
            : item.path === '/';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
            <nav className="max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between">
                <Link href="/" className="font-display text-lg text-foreground hover:text-primary transition-colors notranslate" translate="no">
                    Roy <span className="text-primary">v</span> Heeswijk
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = isItemActive(item);
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`font-mono text-xs uppercase tracking-label link-underline transition-colors duration-200 inline-flex items-center gap-2 ${
                                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                {/* Always rendered so the label never shifts when the active item changes */}
                                <span
                                    aria-hidden="true"
                                    className={`w-1.5 h-1.5 rounded-full bg-primary shrink-0 transition-opacity duration-200 ${
                                        isActive ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <button
                    className="md:hidden text-muted-foreground hover:text-foreground p-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                </button>
            </nav>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        className="md:hidden overflow-hidden border-t border-border bg-background"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="px-8 py-4 space-y-1">
                            {navItems.map((item) => {
                                const isActive = isItemActive(item);
                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={`flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-label transition-colors ${
                                            isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`w-1.5 h-1.5 rounded-full bg-primary shrink-0 transition-opacity duration-200 ${
                                                isActive ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
