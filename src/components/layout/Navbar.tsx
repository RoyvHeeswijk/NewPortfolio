import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
    { name: 'Home', path: '/', hash: null },
    { name: 'Over Mij', path: '/#about-me', hash: 'about-me' },
    { name: 'Projecten', path: '/#projects', hash: 'projects' },
    { name: 'Contact', path: '/#contact', hash: 'contact' },
];

const teal = 'hsl(172, 66%, 50%)';
const muted = 'hsl(215, 12%, 55%)';
const borderColor = 'hsl(220, 14%, 16%)';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [currentHash, setCurrentHash] = useState('');
    const pathname = usePathname();

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

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled ? 'backdrop-blur-xl py-3.5' : 'bg-transparent py-5'
            }`}
            style={scrolled ? { backgroundColor: 'hsl(220, 20%, 4%, 0.85)', borderBottom: `1px solid ${borderColor}` } : {}}
        >
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <motion.span
                            className="text-xl font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            Roy <span className="text-gradient">v Heeswijk</span>
                        </motion.span>
                    </Link>

                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item, index) => {
                            const isActive = pathname === '/'
                                ? (item.hash ? currentHash === item.hash : !currentHash)
                                : (item.path === '/');
                            const isHovered = hoveredIdx === index;
                            const showBar = isHovered || isActive;
                            return (
                                <Link key={item.path} href={item.path}>
                                    <motion.div
                                        className="relative text-sm font-medium py-2.5 px-1"
                                        style={{ color: isActive ? teal : muted }}
                                        onMouseEnter={() => setHoveredIdx(index)}
                                        onMouseLeave={() => setHoveredIdx(null)}
                                        animate={{ color: isHovered ? teal : isActive ? teal : muted }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.name}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 rounded-full"
                                            style={{ backgroundColor: teal }}
                                            initial={false}
                                            animate={{
                                                opacity: showBar ? (isHovered ? 1 : 0.85) : 0,
                                                height: isHovered ? 3 : 2,
                                                boxShadow: isHovered ? `0 0 10px 1px hsla(172, 66%, 50%, 0.5)` : '0 0 0 transparent',
                                            }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>

                    <motion.button
                        className="md:hidden"
                        style={{ color: muted }}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                        whileTap={{ scale: 0.9, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="pt-4 pb-3 mt-4 space-y-1 rounded-xl px-3 backdrop-blur-xl"
                                style={{ backgroundColor: 'hsl(220, 18%, 7%, 0.95)', border: `1px solid ${borderColor}` }}
                            >
                                {navItems.map((item, i) => {
                                    const isActive = pathname === '/'
                                        ? (item.hash ? currentHash === item.hash : !currentHash)
                                        : (item.path === '/');
                                    return (
                                        <motion.div
                                            key={item.path}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05, duration: 0.2 }}
                                        >
                                            <Link
                                                href={item.path}
                                                className="block py-3 px-3 text-sm font-medium rounded-lg transition-all duration-300"
                                                style={{
                                                    color: isActive ? teal : muted,
                                                    backgroundColor: isActive ? 'hsl(172, 66%, 50%, 0.08)' : 'transparent',
                                                }}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
