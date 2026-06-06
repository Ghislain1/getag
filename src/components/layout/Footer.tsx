export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-glass-border overflow-hidden" style={{ background: 'var(--bg2)' }}>
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.04] blur-3xl" style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.6) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,38,38,0.3)] to-transparent" />
      </div>
      <div className="mx-auto max-w-[1200px] px-[5%] pt-16 pb-8 relative z-[1]">
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.8fr,1fr,1fr,1.2fr]">
          <div>
            <div className="mb-4 font-serif text-[1.8rem] font-semibold tracking-[0.12em] text-ink">
              Ge<span className="text-red-600">Tag</span>
            </div>
            <p className="mb-6 max-w-[300px] text-[0.85rem] leading-[1.7] text-ink-2">
              Premium Friseursalon in Mainz & Umgebung – mit mobilem Hausbesuchsservice. Kompetenz, Stil und Sauberkeit, die überzeugen.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/4915259269888"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-glass-border bg-glass text-base text-ink-2 transition-all duration-300 hover:border-[rgba(220,38,38,0.4)] hover:bg-glass-hover hover:text-red-600"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:info@gery-salon.de"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-glass-border bg-glass text-base text-ink-2 transition-all duration-300 hover:border-[rgba(220,38,38,0.4)] hover:bg-glass-hover hover:text-red-600"
                aria-label="E-Mail"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="mb-5 text-[0.65rem] uppercase tracking-[0.2em] text-ink-3">Navigation</h5>
            <ul className="space-y-3">
              <li><a href="#services" className="text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Leistungen</a></li>
              <li><a href="#ueber-mich" className="text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Über mich</a></li>
              <li><a href="#galerie" className="text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Galerie</a></li>
              <li><a href="#" className="text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Preisliste</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-5 text-[0.65rem] uppercase tracking-[0.2em] text-ink-3">Öffnungszeiten</h5>
            <ul className="space-y-3">
              {[
                { day: 'Mo–Do', time: '17:00–20:00' },
                { day: 'Fr', time: '15:00–20:00' },
                { day: 'Sa–So', time: '10:00–20:00' },
              ].map((entry, i) => (
                <li key={i} className="flex justify-between gap-6 text-[0.85rem]">
                  <span className="text-ink-2">{entry.day}</span>
                  <span className="text-ink-3">{entry.time}</span>
                </li>
              ))}
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-green-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                  Geöffnet
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-5 text-[0.65rem] uppercase tracking-[0.2em] text-ink-3">Kontakt</h5>
            <ul className="space-y-3">
              <li>
                <a href="tel:+4915259269888" className="flex items-center gap-2 text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +49 1525 9269888
                </a>
              </li>
              <li>
                <a href="mailto:info@gery-salon.de" className="flex items-center gap-2 text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  info@gery-salon.de
                </a>
              </li>
              <li className="flex items-start gap-2 text-[0.85rem] text-ink-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Mainz & Umgebung
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/4915259269888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-white no-underline transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,38,38,0.4)]"
                style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Termin via WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-6 md:flex-row">
          <span className="text-[0.75rem] text-ink-3">© {new Date().getFullYear()} GeTag Salon. Alle Rechte vorbehalten.</span>
          <div className="flex gap-4">
            <a href="#" className="text-[0.75rem] text-ink-3 no-underline transition-colors duration-200 hover:text-ink-2">Impressum</a>
            <span className="text-ink-3">·</span>
            <a href="#" className="text-[0.75rem] text-ink-3 no-underline transition-colors duration-200 hover:text-ink-2">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
