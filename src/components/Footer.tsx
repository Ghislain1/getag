export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-glass-border px-[5%] py-12" style={{ background: 'var(--bg2)' }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr]">
          <div>
            <div className="mb-4 font-serif text-[1.5rem] font-semibold tracking-[0.15em] text-ink">GeTag</div>
            <p className="max-w-[260px] text-[0.85rem] leading-[1.6] text-ink-2">
              Premium Friseursalon in Ihrer Stadt – mit optionalem mobilem Hausbesuchsservice auf Anfrage.
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-[0.7rem] uppercase tracking-[0.15em] text-ink-3">Salon</h5>
            <a href="#services" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Leistungen</a>
            <a href="#team" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Team</a>
            <a href="#booking" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Termin</a>
          </div>
          <div>
            <h5 className="mb-4 text-[0.7rem] uppercase tracking-[0.15em] text-ink-3">Service</h5>
            <a href="#mobile" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Mobiler Service</a>
            <a href="#" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Preisliste</a>
            <a href="#" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Produkte</a>
          </div>
          <div>
            <h5 className="mb-4 text-[0.7rem] uppercase tracking-[0.15em] text-ink-3">Kontakt</h5>
            <a href="tel:+49000000000" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">+49 (0) 000 000 000</a>
            <a href="mailto:info@gery-salon.de" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">info@gery-salon.de</a>
            <a href="#" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Mo–Fr: 9–19 Uhr</a>
            <a href="#" className="mb-[0.6rem] block text-[0.85rem] text-ink-2 no-underline transition-colors duration-200 hover:text-red-600">Sa: 9–17 Uhr</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-glass-border pt-6 md:flex-row">
          <span className="text-[0.75rem] text-ink-3">© 2025 GeTag Salon. Alle Rechte vorbehalten.</span>
          <span className="text-[0.75rem] text-ink-3">Impressum · Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}
