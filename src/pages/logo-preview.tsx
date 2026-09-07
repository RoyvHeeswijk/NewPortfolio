// TEMPORARY preview page used to shape the favicon. Delete once chosen.

// Geometric R drawn as a path so it renders without web fonts (favicons
// cannot load Instrument Serif).
const R_PATH =
  'M10 7 H13.6 V25 H10 Z ' +
  'M13.6 7 H17 C20.6 7 22.8 8.9 22.8 11.3 C22.8 13.7 20.6 15.6 17 15.6 H13.6 Z ' +
  'M13.6 10.2 H17 C18.6 10.2 19.5 10.7 19.5 11.3 C19.5 11.9 18.6 12.4 17 12.4 H13.6 Z ' +
  'M15.6 15.6 H19.4 L23.2 25 H19.2 Z';

type IconProps = { size?: number };

function IconSolidRound({ size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#34D399" />
      <path d={R_PATH} fill="#0F1A16" fillRule="evenodd" />
    </svg>
  );
}

function IconSolidSquare({ size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" fill="#34D399" />
      <path d={R_PATH} fill="#0F1A16" fillRule="evenodd" />
    </svg>
  );
}

function IconDarkRound({ size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#111D1A" />
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="6.4" fill="none" stroke="#34D399" strokeWidth="1.5" />
      <path d={R_PATH} fill="#34D399" fillRule="evenodd" />
    </svg>
  );
}

function IconV({ size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#34D399" />
      <path d="M8.5 9 H12.6 L16 21.2 L19.4 9 H23.5 L18.2 25 H13.8 Z" fill="#0F1A16" />
    </svg>
  );
}

const icons = [
  { id: '1', name: 'Groen vlak, donkere R, ronde hoeken', Icon: IconSolidRound },
  { id: '2', name: 'Groen vlak, donkere R, scherpe hoeken', Icon: IconSolidSquare },
  { id: '3', name: 'Donker vlak, groene R met rand', Icon: IconDarkRound },
  { id: '4', name: 'Groen vlak, donkere v', Icon: IconV },
];

const strips = [
  { label: 'Donkere tabbalk', bg: '#2B2B2B' },
  { label: 'Lichte tabbalk', bg: '#DEE1E6' },
];

export default function LogoPreview() {
  return (
    <div className="max-w-[1000px] mx-auto px-8 py-16 space-y-14">
      <h1 className="font-display text-3xl text-foreground">Favicon-varianten</h1>

      {icons.map(({ id, name, Icon }) => (
        <section key={id} className="space-y-5">
          <div className="hairline" />
          <p className="font-mono text-xs uppercase tracking-label text-primary">
            {id} — {name}
          </p>

          <div className="flex items-center gap-12">
            {[96, 48, 32, 16].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <Icon size={s} />
                <span className="font-mono text-[10px] text-muted-foreground">{s}px</span>
              </div>
            ))}
          </div>

          <div className="flex gap-6 pt-2">
            {strips.map(({ label, bg }) => (
              <div key={label} className="flex flex-col gap-2">
                <div
                  className="flex items-center gap-2 rounded-t-md px-3 py-2"
                  style={{ background: bg, width: 190 }}
                >
                  <Icon size={16} />
                  <span
                    className="text-[11px] truncate"
                    style={{ color: bg === '#DEE1E6' ? '#1F1F1F' : '#E8EAED' }}
                  >
                    Roy van Heeswijk — Front…
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
