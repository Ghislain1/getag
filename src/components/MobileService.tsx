import { useEffect, useRef, useState } from 'react';

interface Step {
  num: number;
  title: string;
  text: string;
}

const steps: Step[] = [
  { num: 1, title: 'Termin anfragen', text: 'Kontaktieren Sie uns mind. 48 Std. vorab telefonisch oder per E-Mail.' },
  { num: 2, title: 'Verfügbarkeit prüfen', text: 'Wir prüfen Kapazitäten & Entfernung und bestätigen Ihnen den Termin.' },
  { num: 3, title: 'Wir kommen zu Ihnen', text: 'Unser Fachpersonal kommt pünktlich mit dem kompletten Equipment.' },
  { num: 4, title: 'Genießen Sie den Service', text: 'Bequem bei Ihnen zuhause – gleiche Qualität wie im Salon.' },
];

export default function MobileService() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps(prev => new Set([...prev, i]));
            }, i * 180);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mobile" className="relative z-[1] border-y border-glass-border" style={{ background: 'linear-gradient(135deg, rgba(220,38,38,0.03) 0%, transparent 60%)' }}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-[5%] py-24 md:grid-cols-2 md:gap-20">
        <div className="reveal-left">
          <div className="section-eyebrow">Besonderer Service</div>
          <h2 className="section-title">Friseur kommt<br /><em>zu Ihnen.</em></h2>
          <p className="section-sub mb-8">
            Unser mobiler Hausbesuchsservice steht <strong style={{ color: 'var(--text)' }}>auf Anfrage</strong> zur Verfügung – ideal für Senioren, Personen mit eingeschränkter Mobilität oder besondere Anlässe.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#galerie" className="btn-primary">Hausbesuch anfragen</a>
            <a href="tel:+49000000000" className="btn-ghost">Direkt anrufen</a>
          </div>
          <div className="mt-6 rounded-xl border border-[rgba(220,38,38,0.15)] p-4 text-[0.8rem] leading-[1.6] text-ink-2" style={{ background: 'rgba(220,38,38,0.07)' }}>
            <strong className="text-red-600">Wichtig:</strong> Der mobile Service ist nicht täglich verfügbar. Wir bitten um Anfragen <strong className="text-red-600">mindestens 48 Stunden im Voraus</strong>. Verfügbarkeit: Di & Do, 14–18 Uhr. Fahrtpauschale ab 10 € je nach Entfernung.
          </div>
        </div>
        <div className="reveal-right relative">
          <div className="rounded-[20px] border border-glass-border p-8 shadow-[0_32px_64px_rgba(0,0,0,0.2)]" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)' }}>
            <div className="mobile-badge"><span className="mobile-dot" /> Mobiler Service</div>
            <h3 className="mb-4 font-serif text-[1.4rem] font-normal text-ink">Wie es funktioniert</h3>
            <div ref={ref}>
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 border-b border-glass-border px-0 py-3 transition-all duration-500 last:border-b-0 ${
                    visibleSteps.has(i) ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                  }`}
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(220,38,38,0.3)] text-[0.7rem] font-medium text-red-600" style={{ background: 'var(--accent-glow)' }}>{s.num}</div>
                  <div className="pt-[0.3rem] text-[0.85rem] text-ink-2">
                    <strong className="mb-[0.2rem] block font-medium text-ink">{s.title}</strong>
                    {s.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
