import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function SignalFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="signal-label text-muted-foreground">
          @2026 Roy van Heeswijk
        </p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="mailto:royvanheeswijk.r@gmail.com" className="signal-link inline-flex items-center gap-2">
            <FaEnvelope size={11} aria-hidden /> E-mail
          </a>
          <a href="https://github.com/RoyvHeeswijk" target="_blank" rel="noopener noreferrer" className="signal-link inline-flex items-center gap-2">
            <FaGithub size={11} aria-hidden /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/roy-van-heeswijk-34919135b/" target="_blank" rel="noopener noreferrer" className="signal-link inline-flex items-center gap-2">
            <FaLinkedin size={11} aria-hidden /> LinkedIn
          </a>
          <a href="/privacy" className="signal-link">Privacy</a>
        </nav>
        <button type="button" onClick={scrollToTop} className="signal-link inline-flex items-center gap-2 self-start md:self-auto">
          <FaArrowUp size={11} aria-hidden /> Naar boven
        </button>
      </div>
    </footer>
  );
}
