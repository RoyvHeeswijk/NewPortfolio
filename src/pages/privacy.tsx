import Head from 'next/head';
import Link from 'next/link';
import SectionLabel from '../components/ui/SectionLabel';
import Reveal from '../components/ui/Reveal';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy | Roy van Heeswijk</title>
        <meta
          name="description"
          content="Privacyverklaring voor het portfolio van Roy van Heeswijk — hoe bezoekersstatistieken worden verwerkt."
        />
      </Head>

      <section className="py-24">
        <div className="max-w-[720px] mx-auto px-8">
          <SectionLabel number="—" label="Privacy" />

          <Reveal>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <h1 className="font-display text-3xl text-foreground mb-2">Privacyverklaring</h1>
              <p className="text-sm">Laatst bijgewerkt: maart 2026</p>

              <p>
                Deze website is het persoonlijke portfolio van Roy van Heeswijk. Ik respecteer je privacy
                en verwerk zo min mogelijk persoonsgegevens.
              </p>

              <h2 className="font-display text-xl text-foreground pt-4">Bezoekersstatistieken</h2>
              <p>
                Deze website gebruikt <strong className="text-foreground">Vercel Web Analytics</strong> om
                anonieme statistieken bij te houden, zoals:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Bezochte pagina&apos;s</li>
                <li>Land van herkomst (geen exacte adresgegevens)</li>
                <li>Browser, apparaattype en besturingssysteem</li>
                <li>Verwijzende website (referrer), indien beschikbaar</li>
              </ul>
              <p>
                Vercel Analytics gebruikt <strong className="text-foreground">geen cookies</strong> voor
                tracking en slaat geen individueel identificeerbare gegevens op. IP-adressen worden niet
                door mij opgeslagen.
              </p>

              <h2 className="font-display text-xl text-foreground pt-4">Doel en rechtsgrond</h2>
              <p>
                De statistieken helpen mij inzicht te krijgen in hoe mijn portfolio wordt gebruikt
                (bijvoorbeeld welke projecten bekeken worden). Rechtsgrond: gerechtvaardigd belang
                (Art. 6 lid 1 sub f AVG).
              </p>

              <h2 className="font-display text-xl text-foreground pt-4">Verwerker</h2>
              <p>
                Analytics worden verwerkt door Vercel Inc. als verwerker. Meer informatie:
                {' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary link-underline"
                >
                  Vercel Privacy Policy
                </a>
                .
              </p>

              <h2 className="font-display text-xl text-foreground pt-4">Eigenaar</h2>
              <p>
                Als eigenaar van deze website kan ik mijn eigen bezoeken uitsluiten via een lokale
                browserinstelling (localStorage). Dit heeft geen invloed op andere bezoekers.
              </p>

              <h2 className="font-display text-xl text-foreground pt-4">Contact</h2>
              <p>
                Vragen over privacy? Neem contact op via{' '}
                <a href="mailto:royvanheeswijk.r@gmail.com" className="text-primary link-underline">
                  royvanheeswijk.r@gmail.com
                </a>
                .
              </p>

              <p className="pt-4">
                <Link href="/" className="font-mono text-[11px] uppercase tracking-label text-primary link-underline">
                  ← Terug naar home
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
