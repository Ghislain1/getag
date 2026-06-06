interface AnnouncementBarProps {
  items?: string[];
  speed?: string;
  position?: 'fixed' | 'static';
  className?: string;
}

export function AnnouncementBar({
  items = [
    "Keine Wartezeit",
    "Bequem bei Ihnen zu Hause",
    "Flexibel",
    "20€: Erwachsene",
    "15€: Kinder",
    "Mobiles Friseurteam",
    "Terminvereinbarung 24/7",
  ],
  speed = '22s',
  position = 'fixed',
  className = '',
}: AnnouncementBarProps) {

  const styleObject: Record<string, string> = {
    background: 'var(--nav-bg)',
    borderBottom: '1px solid var(--glass-border)',
  }

  const doubledItems = [...items, ...items];

  return (
    <div className={`${position === 'fixed' ? 'fixed left-0 right-0 z-50' : ''} overflow-hidden ${className}`} style={position === 'fixed' ? styleObject : undefined}>
      <div className="flex h-10 items-center" style={{ width: 'max-content', animation: `marquee ${speed} linear infinite` }}>
        {doubledItems.map((text, i) => (
          <span key={i} className="flex items-center gap-3 px-8 text-[0.8rem] font-medium uppercase tracking-[0.12em] whitespace-nowrap" style={{ color: 'var(--accent)' }}>
            <span className="inline-block h-[5px] w-[5px] rounded-full" style={{ background: 'var(--accent)' }} />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
