import ScrollReveal from '../shared/ScrollReveal';

const reviews = [
  {
    name: 'Golden Boy Brandon',
    text: 'Ehrenprofessionell in seiner Arbeit und ich empfehle ihn sehr gerne weiter. Bin 100% mit seiner Leistung zufrieden.',
    rating: 5,
  },
  {
    name: 'Colima',
    text: 'Gery war sehr spontan – wir waren auf dem Weg woanders hin und konnten dann Samstag abends noch zu ihm kommen. Er ist sehr nett und hat meinem Sohn eine tolle Frisur geschnitten. Wir gehen wieder hin!',
    rating: 5,
  },
  {
    name: 'Ismael Ngoufo',
    text: 'Ich hatte eine wundervolle Erfahrung! Er war nicht nur äußerst professionell und kompetent, sondern auch sehr nett und freundlich. Er hat sich die Zeit genommen, meine Wünsche genau zu verstehen und hat mich hervorragend beraten. Das Ergebnis ist fantastisch und ich bin mehr als zufrieden. Ich kann diesen Friseur nur wärmstens empfehlen!',
    rating: 5,
  },
];

const stars = Array.from({ length: 5 }, (_, i) => i);

export default function Reviews() {
  return (
    <section id="reviews" className="relative z-[1] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.03] blur-3xl" style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.5) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,38,38,0.2)] to-transparent" />
      </div>
      <div className="mx-auto max-w-[1200px] px-[5%] pb-20 pt-20">
        <ScrollReveal className="reveal section-eyebrow">Stimmen</ScrollReveal>
        <ScrollReveal className="reveal section-title">Das sagen meine <em>Kunden & Kundinnen.</em></ScrollReveal>
        <ScrollReveal className="reveal section-sub mb-12">Ehrliches Feedback – direkt von meinen Kunden.</ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} className="reveal group relative flex flex-col rounded-[var(--radius)] border border-glass-border bg-glass p-8 backdrop-blur-lg transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(220,38,38,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <div className="pointer-events-none absolute -right-6 -top-6 select-none font-serif text-[8rem] font-bold leading-none" style={{ color: 'rgba(220,38,38,0.04)' }}>
                "
              </div>
              <div className="mb-4 flex gap-1">
                {stars.map((s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={s < r.rating ? '#dc2626' : 'none'} stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 flex-1 text-[0.9rem] leading-[1.75] text-ink-2">{r.text}</p>
              <div className="flex items-center gap-3 border-t border-glass-border pt-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[0.75rem] font-bold uppercase text-white"
                  style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
                >
                  {r.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <span className="font-serif text-base font-normal text-ink">{r.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
