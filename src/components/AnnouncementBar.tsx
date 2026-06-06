
import { SirenIcon } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBar() {

  const [scrolled, setScrolled] = useState<boolean>(false);

  const styleObject = {
    background: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
    boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.3)' : undefined,
    margin: scrolled ? '64px 0 0 0' : '64px 0 0 0'

  }
  const items = [
    "Keine Wartezeit",
    "Bequem bei Ihnen zu Hause",
    "Flexibel",
    " Text todo 1",
    " Text todo 2",
    "Mobiles Friseurteam",
    "Terminvereinbarung 24/7",
  ];

  const doubledItems = [...items, ...items];

  return (
    <div className="fixed left-0 right-0 z-50 transition-all duration-300 overflow-hidden bg-white shadow-lg bg-transparent" style={styleObject}>
      <div className="flex h-10 justify-center animate-[marquee_22s_linear_infinite]" style={{ width: 'max-content' }}>
        {doubledItems.map((text, i) => (
          <span key={i} className="flex items-center gap-3 px-8 text-lg font-medium text-red-600 whitespace-nowrap">
            <SirenIcon className="h-3.5 w-3.5 shrink-0 bg-(--color-main) text-yellow-300" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
