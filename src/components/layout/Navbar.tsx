import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Over Mij', path: '/#about-me' },
    { name: 'Projecten', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <motion.div
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaCode className="text-teal-400 text-xl" />
                            <span className="text-2xl font-bold text-teal-400">
                                Roy v Heeswijk
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-colors hover:text-teal-400 ${(pathname === "/" && item.path.includes("#")) ||
                                    pathname === item.path ||
                                    (item.path !== "/" && pathname?.startsWith(item.path.split("#")[0]))
                                    ? "text-teal-400"
                                    : "text-gray-300"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="py-4 space-y-4 bg-gray-900/95 backdrop-blur-sm rounded-b-lg shadow-xl">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`block text-center py-2 text-sm font-medium transition-colors hover:text-teal-400 active:text-teal-500 ${(pathname === "/" && item.path.includes("#")) ||
                                    pathname === item.path ||
                                    (item.path !== "/" && pathname?.startsWith(item.path.split("#")[0]))
                                    ? "text-teal-400"
                                    : "text-gray-300"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    );
} 