import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const socialLinks = [
    { label: 'E-mail', href: 'mailto:royvanheeswijk.r@gmail.com', icon: FaEnvelope, external: false },
    { label: 'GitHub', href: 'https://github.com/RoyvHeeswijk', icon: FaGithub, external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roy-van-heeswijk-34919135b/', icon: FaLinkedin, external: true },
];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="mt-auto">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="hairline w-full" />

                <div className="py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <p className="font-mono text-[11px] uppercase tracking-label text-muted-foreground order-2 md:order-1">
                        @2026 Roy van Heeswijk
                    </p>

                    <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 order-1 md:order-2">
                        {socialLinks.map(({ label, href, icon: Icon, external }) => (
                            <a
                                key={label}
                                href={href}
                                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="font-mono text-[11px] uppercase tracking-label text-muted-foreground hover:text-primary transition-colors duration-200 link-underline inline-flex items-center gap-2"
                            >
                                <Icon size={12} />
                                {label}
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="font-mono text-[11px] uppercase tracking-label text-muted-foreground hover:text-primary transition-colors duration-200 link-underline inline-flex items-center gap-2 self-start md:self-auto order-3"
                    >
                        <FaArrowUp size={11} />
                        Naar boven
                    </button>
                </div>
            </div>
        </footer>
    );
}
