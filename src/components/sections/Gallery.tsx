import ScrollReveal from "../shared/ScrollReveal";
import { useTilt } from "../../hooks/useTilt";

import imgTools from "../../assets/getag_gallerie_tools.png";
import imgBoyGrey from "../../assets/getag_gallerie_boy_grey.png";
import imgBoyRed from "../../assets/getag_gallerie_boy_red.png";
import imgBoyYellow from "../../assets/getag_gallerie_boy_yellow.png";

const cards = [
  {
    img: imgBoyRed,
    label: 'Schnitte',
    desc: 'Präzise Haarschnitte für Herren',
    span: 'md:col-span-4 md:row-span-2',
    accent: '#dc2626',
  },
  {
    img: imgBoyYellow,
    label: 'Schnitte',
    desc: 'Balayage, Highlights & mehr',
    span: 'md:col-span-2',
    accent: '#eab308',
  },
  {
    img: imgTools,
    label: 'Bartpflege',
    desc: 'Klassische Rasur & Bartstyling',
    span: 'md:col-span-2',
    accent: '#a855f7',
  },
  {
    img: imgBoyGrey,
    label: 'Jungsfrisuren',
    desc: 'Besondere Looks für besondere Tage',
    span: 'md:col-span-3 md:row-span-2',
    accent: '#f97316',
  },

];

function TiltCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useTilt();
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="galerie" className="relative z-[1]">
      <div className="mx-auto max-w-[1200px] px-[5%] pt-20 pb-12">
        <ScrollReveal className="reveal section-eyebrow">Unsere Arbeiten</ScrollReveal>
        <ScrollReveal className="reveal section-title">Galerie – <em>Haarkunst erleben.</em></ScrollReveal>
        <ScrollReveal className="reveal section-sub mb-10">
          Einblick in unsere Arbeit – von klassischen Schnitten bis zu avantgardistischen Styles.
        </ScrollReveal>
      </div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 px-[5%] pb-20 md:grid-cols-6">
        {cards.map((card, i) => (
          <ScrollReveal
            key={i}
            className={`${card.span}`}
          >
            {'img' in card ? (
              <TiltCard
                className="group relative cursor-pointer overflow-hidden rounded-[calc(var(--radius)+4px)] border border-transparent transition-all duration-500 hover:z-10"
                style={{
                  minHeight: '240px',
                  height: '100%',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
                  transition: 'box-shadow 0.4s ease',
                }}
              >
                <div
                  className="absolute inset-0 overflow-hidden rounded-[var(--radius)]"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget.parentElement;
                    if (el) {
                      el.style.boxShadow = `0 0 30px ${card.accent}44, 0 0 60px ${card.accent}22, 0 0 0 1px ${card.accent}66`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget.parentElement;
                    if (el) {
                      el.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.06)';
                    }
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.label}
                    className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_60px,rgba(255,255,255,0.02)_60px,rgba(255,255,255,0.02)_61px)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="mb-2 block text-3xl transition-transform duration-500 group-hover:scale-110">📸</span>
                    <h3 className="font-serif text-2xl font-normal text-white drop-shadow-lg">{card.label}</h3>
                    <p className="mt-1 max-w-xs text-[0.85rem] leading-relaxed text-white/60">
                      {card.desc}
                    </p>
                    <div className="mt-4 h-px w-0 bg-gradient-to-r from-red-600 to-transparent transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </TiltCard>
            ) : (
              <div
                className="group relative cursor-pointer overflow-hidden rounded-[var(--radius)] border border-glass-border bg-glass backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(0,0,0,0.3)]"
                style={{ minHeight: '240px', height: '100%' }}
              >
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
