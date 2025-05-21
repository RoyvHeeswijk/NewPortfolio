import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Brand Section */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">
                            Roy v Heeswijk
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Creëert innovatieve weboplossingen met moderne technologieën.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 text-center">
                        <h4 className="text-lg font-semibold text-white">Snelle Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/projecten" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                                    Projecten
                                </Link>
                            </li>
                            <li>
                                <Link href="/over" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                                    Over Mij
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4 text-center md:text-right">
                        <h4 className="text-lg font-semibold text-white">Connect</h4>
                        <div className="flex space-x-4 justify-center md:justify-end">
                            <a
                                href="https://github.com/jouwgebruikersnaam"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profiel van Roy van Heeswijk"
                                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                            >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://linkedin.com/in/jouwgebruikersnaam"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profiel van Roy van Heeswijk"
                                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                            >
                                <FaLinkedin size={22} />
                            </a>
                            <a
                                href="mailto:jouw.email@voorbeeld.com"
                                aria-label="Stuur een email naar Roy van Heeswijk"
                                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                            >
                                <FaEnvelope size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Roy van Heeswijk. Alle rechten voorbehouden.
                    </p>
                </div>
            </div>
        </footer>
    );
} 