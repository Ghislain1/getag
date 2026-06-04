import { useState } from 'react';
import { useTilt } from '../hooks/useTilt';
import { useParallax } from '../hooks/useParallax';

interface Slot {
  time: string;
  taken: boolean;
}

const slots: Slot[] = [
  { time: '10:00', taken: false },
  { time: '11:30', taken: true },
  { time: '13:00', taken: false },
  { time: '14:30', taken: true },
  { time: '16:00', taken: false },
  { time: '17:30', taken: false },
];

export default function Hero() {
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const tiltRef = useTilt();
  const { setFloatRef } = useParallax();

  return (
    <section id="hero" className="relative z-[1] flex min-h-screen items-center overflow-hidden px-[5%] pt-[calc(var(--nav-h)+4rem)] pb-20">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <div className="hero-eyebrow mb-6">Premium Friseursalon</div>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-ink mb-6">
            Haarkunst,<br /><em className="not-italic text-red-600">neu definiert.</em>
          </h1>
          <p className="mb-10 max-w-[420px] text-base leading-[1.7]" style={{ color: 'var(--text2)' }}>
            Präzision trifft Stil. Bei GeTag erleben Sie hochwertige Friseurkunst im Salon oder bequem bei Ihnen zuhause – auf Anfrage.
          </p>
          <div className="hero-cta flex flex-wrap gap-4">
            <a href="#booking" className="btn-primary text-white">Termin vereinbaren</a>
            <a href="#services" className="btn-ghost">Leistungen</a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="parallax-float pf1" ref={setFloatRef(0)} />
          <div className="parallax-float pf2" ref={setFloatRef(1)} />
          <div
            ref={tiltRef}
            className="hero-card-gradient relative w-full max-w-[420px] overflow-hidden rounded-3xl border border-glass-border p-10 shadow-[0_32px_64px_rgba(0,0,0,0.3)]"
            style={{ background: 'var(--glass)', backdropFilter: 'blur(24px)', transformStyle: 'preserve-3d' }}
          >
            <div className="relative z-[1] mb-6 inline-block rounded-full border border-[rgba(220,38,38,0.2)] px-3 py-[0.3rem] text-[0.7rem] uppercase tracking-[0.16em] text-red-600" style={{ background: 'var(--accent-glow)' }}>
              Nächste freie Slots
            </div>
            <h3 className="relative z-[1] mb-2 font-serif text-[1.6rem] font-normal text-ink">Heute verfügbar</h3>
            <p className="relative z-[1] mb-6 text-[0.85rem] text-ink-2">Wählen Sie Ihren Wunschtermin für morgen</p>
            <div className="avail-row relative z-[1] mb-3 flex items-center justify-between">
              <span className="text-[0.8rem] text-ink-2">Salon · Di, 10. Juni</span>
              <span className="avail-dot-el" />
            </div>
            <div className="slots relative z-[1] mt-4 flex flex-wrap gap-2">
              {slots.map((s, i) => (
                <button
                  key={i}
                  disabled={s.taken}
                  className={`rounded-lg border px-3 py-[0.35rem] text-[0.75rem] font-medium transition-all duration-200 font-sans ${s.taken
                    ? 'cursor-not-allowed opacity-30 line-through'
                    : activeSlot === i
                      ? 'border-red-600 bg-red-600 text-[#0a0a0a] scale-105'
                      : 'border-glass-border text-ink-2 cursor-pointer hover:bg-red-600 hover:border-red-600 hover:text-[#0a0a0a] hover:scale-105'
                    }`}
                  onClick={() => !s.taken && setActiveSlot(i)}
                >
                  {s.time}
                </button>
              ))}
            </div>
            <div className="relative z-[1] mt-5 border-t border-glass-border pt-4">
              <div className="mb-1 flex items-center justify-between">
                <span style={{ fontSize: '0.75rem', color: 'var(--text2)' }}>🚗 Hausbesuch (auf Anfrage)</span>
                <span className="avail-dot-el busy" />
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text3)' }}>
                Nächster mobiler Slot: Do, 12. Juni ab 14 Uhr
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
