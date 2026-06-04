import ScrollReveal from './ScrollReveal';

const images = [
  {
    label: 'Schnitte',
    desc: 'Präzise Haarschnitte für Damen & Herren',
    gradient: 'from-red-600 via-red-800 to-red-900',
    icon: '✂',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    label: 'Colorationen',
    desc: 'Balayage, Highlights & mehr',
    gradient: 'from-red-800 via-red-700 to-red-500',
    icon: '🌈',
    span: 'md:col-span-2',
  },
  {
    label: 'Bartpflege',
    desc: 'Klassische Rasur & Bartstyling',
    gradient: 'from-neutral-900 via-neutral-800 to-neutral-600',
    icon: '🪒',
    span: 'md:col-span-2',
  },
  {
    label: 'Salon Ambiente',
    desc: 'Unser Salon – modern & einladend',
    gradient: 'from-neutral-950 via-neutral-900 to-neutral-800',
    icon: '🏛',
    span: 'md:col-span-3',
  },
  {
    label: 'Hochzeitsfrisuren',
    desc: 'Besondere Looks für besondere Tage',
    gradient: 'from-red-200 via-red-600 to-red-800',
    icon: '💍',
    span: 'md:col-span-3',
  },
  {
    label: 'Before & After',
    desc: 'Verwandlungen, die überzeugen',
    gradient: 'from-[#0a0a0a] via-neutral-900 to-red-600',
    icon: '✨',
    span: 'md:col-span-4',
  },
];

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
        {images.map((img, i) => (
          <ScrollReveal
            key={i}
            className={`group relative cursor-pointer overflow-hidden rounded-[var(--radius)] border border-glass-border bg-glass backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(0,0,0,0.3)] ${img.span}`}
            style={{ minHeight: '200px' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent" />
            <div className="relative flex h-full min-h-[200px] flex-col items-center justify-center p-8 text-center">
              <span className="mb-4 text-5xl transition-transform duration-500 group-hover:scale-110">{img.icon}</span>
              <h3 className="font-serif text-2xl font-normal text-[#f0ece4] drop-shadow-lg">{img.label}</h3>
              <p className="mt-2 max-w-xs text-[0.85rem] leading-relaxed text-[rgba(240,236,228,0.7)] drop-shadow">
                {img.desc}
              </p>
              <div className="mt-6">
                <span className="inline-block rounded-full border border-[rgba(220,38,38,0.4)] px-4 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-red-600 opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ background: 'rgba(220,38,38,0.1)' }}>
                  Mehr ansehen →
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
