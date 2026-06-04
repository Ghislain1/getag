import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  target: number;
  label: string;
}

function StatItem({ target, label }: StatItemProps) {
  const ref = useCountUp(target);
  return (
    <div className="reveal text-center">
      <span className="block font-serif text-5xl font-light text-red-600" ref={ref}>0</span>
      <span className="text-[0.75rem] uppercase tracking-[0.12em] text-ink-2">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative z-[1] border-y border-glass-border" style={{ background: 'linear-gradient(90deg, rgba(220,38,38,0.15), rgba(220,38,38,0.05), rgba(220,38,38,0.15))' }}>
      <div className="stats-inner mx-auto flex max-w-[1200px] flex-wrap justify-around gap-8 px-[5%] py-12">
        <StatItem target={12} label="Jahre Erfahrung" />
        <StatItem target={4800} label="Zufriedene Kunden" />
        <StatItem target={98} label="% Kundenzufriedenheit" />
        <StatItem target={3} label="Mobile Tage / Woche" />
      </div>
    </section>
  );
}
