import { useRef } from 'react';
import { motion, useInView, cubicBezier } from 'framer-motion';
import aboutImg from '../../assets/getag_about.png';

const customEase = cubicBezier(0.25, 0.46, 0.45, 0.94);

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: customEase },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ueber-mich" className="relative z-[1] overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)', animation: 'pulse 4s ease-in-out infinite' }} />
      </div>

      <div ref={ref} className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-[5%] md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: 10 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.9, ease: customEase }}
          className="group relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[var(--accent)] via-transparent to-[var(--accent)] opacity-20 blur-xl transition-all duration-700 group-hover:opacity-40" />

          <div className="relative overflow-hidden rounded-3xl border border-glass-border shadow-[0_32px_64px_rgba(0,0,0,0.3)]"
            style={{ background: 'var(--bg2)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />
            <img src={aboutImg} alt="Gery - Friseur" className="relative w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent p-6 pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
                <span className="text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>GeTag</span>
                <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, var(--accent))' }} />
              </motion.div>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-full border border-[var(--accent)]/20" style={{ animation: 'floatB 6s ease-in-out infinite' }} />
          <div className="absolute -left-4 -top-4 h-12 w-12 rounded-full border border-[var(--accent)]/10" style={{ animation: 'floatA 8s ease-in-out infinite' }} />
        </motion.div>

        <div className="space-y-5">
          <motion.div custom={0} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={textVariants} className="section-eyebrow">Über mich</motion.div>
          <motion.h2 custom={1} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={textVariants} className="section-title">
            Mein Name ist Gery<br /><em>und ich lebe in Mainz.</em>
          </motion.h2>

          <motion.p custom={2} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={textVariants}
            className="text-[0.92rem] leading-[1.8]" style={{ color: 'var(--text2)' }}>
            Aufgrund der hohen Nachfrage nach Friseurdienstleistungen für Afro-Haare in Mainz und Umgebung – und des Mangels an spezialisierten Afro-Friseuren – biete ich Ihnen diesen mobilen Service an.
          </motion.p>

          <motion.p custom={3} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={textVariants}
            className="text-[0.92rem] leading-[1.8]" style={{ color: 'var(--text2)' }}>
            Ich komme gerne zu Ihnen nach Hause und schneide Ihnen oder Ihren Kindern die Haare fachgerecht und ganz nach Ihren Wünschen. Selbstverständlich hinterlasse ich Ihre Wohnung sauber und ordentlich.
          </motion.p>

          <motion.div custom={4} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={textVariants}
            className="rounded-2xl border p-5 backdrop-blur-sm" style={{ borderColor: 'rgba(220,38,38,0.2)', background: 'var(--accent-glow)' }}>
            <p className="text-[0.92rem] leading-[1.8]" style={{ color: 'var(--text2)' }}>
              Zahlreiche Frauen, Männer, Kinder, Jugendliche, Menschen mit Behinderung und Alleinerziehende schätzen bereits diese stressfreie und flexible Möglichkeit.
            </p>
            <p className="mt-3 text-[0.92rem] leading-[1.8]" style={{ color: 'var(--text2)' }}>
              Falls Sie zu Hause nicht ausreichend Platz haben, können Sie auch gerne zu mir kommen.
            </p>
          </motion.div>

          <motion.div custom={5} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={textVariants}
            className="flex flex-wrap items-center gap-4 pt-2">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent, var(--accent), transparent, var(--accent), transparent)' }} />
              <a href="https://wa.me/004915259269888" target="_blank" rel="noopener noreferrer" className="relative inline-block rounded-full bg-[var(--bg)] px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-ink no-underline transition-colors duration-300 hover:text-[var(--accent)]">
                Kontaktieren Sie mich
              </a>
            </span>
            <span className="text-[0.75rem]" style={{ color: 'var(--text3)' }}>
              In vielen Fällen bereits innerhalb von 30 Minuten bei Ihnen.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
