import ScrollReveal from '../shared/ScrollReveal';
import serviceBg from '../../assets/getag_service_bg.png';


const serviceItems = [
  { icon: '🕊️', title: 'Kein Stress', text: 'Ich komme zu Ihnen, wann es Ihnen passt.' },
  { icon: '✨', title: 'Keine Haare, kein Chaos', text: 'Ich hinterlasse Ihre Wohnung sauber.' },
  { icon: '💎', title: 'Kompetenz & Erfahrung', text: 'Fachgerechte Schnitte und Styles für Damen, Herren und Kinder.' },
  { icon: '⚡', title: 'Flexibel & schnell', text: 'In vielen Fällen bin ich innerhalb von 30 Minuten vor Ort.' },
];

export default function Services() {
  return (
    <section id="services" className="relative z-[1] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 select-none">
        <img src={serviceBg} alt="" aria-hidden className="h-full w-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(220,38,38,0.03)_80px,rgba(220,38,38,0.03)_81px)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_80px,rgba(220,38,38,0.03)_80px,rgba(220,38,38,0.03)_81px)]" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.4) 0%, transparent 70%)' }} />
      </div>
      <div className="mx-auto max-w-[1200px] px-[5%] pt-20 pb-12 relative z-[1]">
        <ScrollReveal className="reveal section-eyebrow !text-white/80 before:!bg-white/80">Unsere Leistungen</ScrollReveal>
        <ScrollReveal className="reveal section-title !text-white">Alles, was Ihre<br /><em className="!text-white">Haare brauchen.</em></ScrollReveal>
        <ScrollReveal className="reveal section-sub !text-white/60">Von der klassischen Pflege bis zur modernen Coloration – präzise, stilbewusst, persönlich.</ScrollReveal>
      </div>

      <div className="mx-auto mb-10 grid max-w-[1200px] grid-cols-1 gap-3 px-[5%] md:grid-cols-2 relative z-[2]">
        {serviceItems.map((item, i) => (
          <ScrollReveal key={i} className="reveal group flex items-start gap-4 rounded-[var(--radius)] border border-glass-border bg-glass p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(220,38,38,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(220,38,38,0.2)] text-xl transition-transform duration-300 group-hover:scale-110" style={{ background: 'var(--accent-glow)' }}>
              {item.icon}
            </div>
            <div>
              <h4 className="mb-1 font-serif text-xl font-normal text-ink">{item.title}</h4>
              <p className="text-[0.85rem] leading-[1.6] text-ink-2">{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
        <ScrollReveal className="reveal md:col-span-2">
          <div className="flex items-start gap-4 rounded-[var(--radius)] border border-dashed p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5" style={{ borderColor: 'rgba(220,38,38,0.25)', background: 'var(--accent-glow)' }}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl" style={{ background: 'var(--accent-glow)' }}>
              🔧
            </div>
            <div>
              <h4 className="mb-1 font-serif text-xl font-normal text-ink">Optional buchbar: Maschinenreinigung</h4>
              <p className="text-[0.85rem] leading-[1.6] text-ink-2">Wie neu – wir reinigen und schärfen Ihre Haarschneidemaschine, damit sie wieder präzise schneidet wie am ersten Tag.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>



    </section>
  );
}
