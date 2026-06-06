import { useParallax } from '../hooks/useParallax';
import heroLeft from '../assets/getag_hero_left.png';
import heroRight from '../assets/getag_hero_right.png';
import hero1 from '../assets/getag_hero_1.png';

export default function Hero() {
  const { setFloatRef } = useParallax();

  return (
    <section id="hero" className="relative z-[1] flex min-h-screen items-center overflow-hidden px-[5%] pt-[calc(var(--nav-h)+4rem)] pb-20">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr,1.2fr]">
        <div className="relative z-[2]">
          <div className="hero-eyebrow mb-6">Getag Friseursalon</div>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-ink mb-6">
            Ihr mobiler Afro-Friseur<br /><em className="not-italic text-red-600">in Mainz und Umgebung.</em>
          </h1>
          <p className="mb-10 max-w-[420px] text-base leading-[1.7]" style={{ color: 'var(--text2)' }}>
            Präzision trifft Stil. Bei GeTag erleben Sie hochwertige Friseurkunst.<br />
            Bequem bei Ihnen zu Hause – ohne Anfahrt, ohne Wartezeit. <br />
            Schnell verfügbar, flexibel und zu einem fairen Preis.
          </p>
          <div className="hero-cta flex flex-wrap gap-4">
            <a href="#booking" className="btn-primary text-white">Termin vereinbaren</a>
            <a href="#services" className="btn-ghost">Leistungen</a>
          </div>
        </div>

        <div className="relative z-[1] flex items-center justify-center">
          <div className="parallax-float pf1" ref={setFloatRef(0)} />
          <div className="parallax-float pf2" ref={setFloatRef(1)} />

          <div className="flex w-full max-w-[500px] flex-col gap-4">
            <div className="relative grid grid-cols-2 gap-2.5">
              <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl border border-glass-border shadow-[0_24px_48px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)]"
                style={{ minHeight: '420px' }}>
                <img src={hero1} alt="Hairstyle Beispiel" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.05)] to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full border border-[rgba(220,38,38,0.4)] bg-[rgba(0,0,0,0.3)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-white backdrop-blur-sm">Haarschnitte</span>
                </div>
              </div>

              <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-glass-border shadow-[0_24px_48px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)]"
                style={{ minHeight: '200px' }}>
                <img src={heroRight} alt="Hairstyle Beispiel" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full border border-[rgba(220,38,38,0.4)] bg-[rgba(0,0,0,0.3)] px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-white backdrop-blur-sm">Haarschnitte</span>
                </div>
              </div>

              <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-glass-border shadow-[0_24px_48px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)]"
                style={{ minHeight: '200px' }}>
                <img src={heroLeft} alt="Hairstyle Beispiel" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full border border-[rgba(220,38,38,0.4)] bg-[rgba(0,0,0,0.3)] px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-white backdrop-blur-sm">Bartpflege</span>
                </div>
              </div>
            </div>

            <div className="w-full rounded-2xl border border-glass-border p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-[24px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(220,38,38,0.15)]"
              style={{ background: 'var(--glass)' }}>
              <div className="mb-1 flex items-center gap-2">
                <div className="inline-block rounded-full px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.18em]" style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}>
                  Geöffnet
                </div>
                <span className="avail-dot-el" style={{ width: '6px', height: '6px' }} />
              </div>
              <div className="mb-3 mt-1.5 space-y-2">
                {[
                  { day: 'Mo. – Do.', hours: '17:00 – 20:00' },
                  { day: 'Fr.', hours: '15:00 – 20:00' },
                  { day: 'Sa. – So.', hours: '10:00 – 20:00' },
                ].map((entry, i) => (
                  <div key={i} className="flex items-center justify-between gap-2">
                    <span className="text-[0.78rem] font-medium text-ink">{entry.day}</span>
                    <span className="whitespace-nowrap text-[0.75rem] tracking-wide" style={{ color: 'var(--accent)' }}>{entry.hours}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 border-t border-glass-border pt-2.5">
                <span style={{ fontSize: '0.68rem', color: 'var(--text2)' }}>🚗 Hausbesuch auf Anfrage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
