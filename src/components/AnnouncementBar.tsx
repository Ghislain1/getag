export function AnnouncementBar() {

  const styleObject = {
    background: 'var(--nav-bg)',
    borderBottom: '1px solid var(--glass-border)',
  }
  const items = [
    "Keine Wartezeit",
    "Bequem bei Ihnen zu Hause",
    "Flexibel",
    "20€: Erwachsene",
    "15€: Kinder",
    "Mobiles Friseurteam",
    "Terminvereinbarung 24/7",
  ];

  const doubledItems = [...items, ...items];

  return (
    <div className="fixed left-0 right-0 z-50 overflow-hidden" style={styleObject}>
      <div className="flex h-10 animate-[marquee_22s_linear_infinite] items-center" style={{ width: 'max-content' }}>
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
