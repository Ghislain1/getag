import ScrollReveal from './ScrollReveal';

interface ServiceCard {
  id: number;
  colSpan: string;
  rowSpan?: string;
  badge: boolean;
  icon: string | null;
  title: string;
  desc: string;
  tags: string[] | null;
  price: string;
  priceNote: string | null;
  decor: string | null;
  bigTitle?: boolean;
}

const cards: ServiceCard[] = [
  {
    id: 1, colSpan: 'md:col-span-7', rowSpan: 'md:row-span-2', badge: true, icon: null,
    title: 'Waschen, Schneiden & Föhnen',
    desc: 'Das klassische Rundum-Paket – sorgfältig gewaschen, präzise geschnitten und professionell gestylt. Das Herzstück unseres Salons.',
    tags: ['Damen', 'Herren', 'Kinder', 'Alle Haartypen'],
    price: 'ab 45 €', priceNote: 'inkl. Beratung', decor: '✂', bigTitle: true,
  },
  {
    id: 2, colSpan: 'md:col-span-5', badge: false, icon: '💈',
    title: 'Herrenschnitt',
    desc: 'Klassisch oder modern – präzise Schnitte, die Ihren Stil unterstreichen.',
    tags: null, price: 'ab 25 €', priceNote: null, decor: null,
  },
  {
    id: 3, colSpan: 'md:col-span-5', badge: false, icon: '🌈',
    title: 'Balayage & Highlights',
    desc: 'Handgemalte Farbakzente für natürliche Tiefe und Dimension im Haar.',
    tags: null, price: 'ab 80 €', priceNote: null, decor: null,
  },
  {
    id: 4, colSpan: 'md:col-span-4', badge: false, icon: '🧴',
    title: 'Haarkur',
    desc: 'Intensive Pflege für gesundes Haar – ideal nach Colorationen.',
    tags: null, price: 'ab 15 €', priceNote: null, decor: null,
  },
  {
    id: 5, colSpan: 'md:col-span-4', badge: false, icon: '🪒',
    title: 'Bartpflege',
    desc: 'Präzise Bartformung und klassische Rasur – Pflege für den modernen Herrn.',
    tags: null, price: 'ab 20 €', priceNote: null, decor: null,
  },
  {
    id: 6, colSpan: 'md:col-span-4', badge: true, icon: null,
    title: 'Coloration',
    desc: 'Komplette Haarfarbe – frisch, leuchtend, langanhaltend.',
    tags: null, price: 'ab 65 €', priceNote: null, decor: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-[1]">
      <div className="mx-auto max-w-[1200px] px-[5%] pt-20 pb-12">
        <ScrollReveal className="reveal section-eyebrow">Unsere Leistungen</ScrollReveal>
        <ScrollReveal className="reveal section-title">Alles, was Ihre<br /><em>Haare brauchen.</em></ScrollReveal>
        <ScrollReveal className="reveal section-sub">Von der klassischen Pflege bis zur modernen Coloration – präzise, stilbewusst, persönlich.</ScrollReveal>
      </div>
      <div className="bento-grid mx-auto grid max-w-[1200px] grid-cols-1 gap-3 px-[5%] pb-20 md:grid-cols-12">
        {cards.map((c) => {
          const cls = `relative cursor-default overflow-hidden rounded-[var(--radius)] border border-glass-border p-8 transition-all duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-glass backdrop-blur-lg hover:-translate-y-1 hover:border-[rgba(220,38,38,0.3)] hover:bg-glass-hover hover:shadow-[0_24px_48px_rgba(0,0,0,0.2),0_0_0_1px_rgba(220,38,38,0.1)_inset] after:absolute after:left-0 after:right-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgba(220,38,38,0.4)] after:to-transparent after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 ${c.colSpan}${c.rowSpan ? ' ' + c.rowSpan : ''}`;
          return (
            <ScrollReveal key={c.id} className={`${cls} reveal`}>
              {c.badge && (
                <div className="mobile-badge"><span className="mobile-dot" /> Auch als Hausbesuch</div>
              )}
              {c.icon && <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(220,38,38,0.2)] text-xl" style={{ background: 'var(--accent-glow)' }}>{c.icon}</div>}
              <h3 className={`font-serif font-normal text-ink mb-2 ${c.bigTitle ? 'text-[2.2rem]' : 'text-2xl'}`}>{c.title}</h3>
              <p className="text-[0.85rem] leading-[1.65] text-ink-2">{c.desc}</p>
              {c.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t, i) => (
                    <span key={i} className="rounded border border-glass-border px-[0.6rem] py-[0.2rem] text-[0.7rem] uppercase tracking-[0.1em] text-ink-2">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-6 font-serif text-3xl font-light text-red-600">
                {c.price}
                {c.priceNote && <span className="font-sans text-[0.85rem] text-ink-3"> / {c.priceNote}</span>}
              </div>
              {c.decor && (
                <div className="pointer-events-none absolute bottom-[-20px] right-[-20px] select-none font-serif text-[11rem] font-semibold leading-none" style={{ color: 'rgba(220,38,38,0.05)' }}>
                  {c.decor}
                </div>
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
