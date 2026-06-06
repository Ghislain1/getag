interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed left-0 right-0 top-[var(--nav-h)] z-[99] flex flex-col items-center justify-center gap-10 backdrop-blur-[30px] transition-transform duration-[400ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ background: 'var(--menu-bg)' }}
    >
      <a href="#services" onClick={onClose} className="font-serif text-2xl font-light tracking-[0.05em] text-ink no-underline transition-colors duration-200 hover:text-red-600">Leistungen</a>
      <a href="#ueber-mich" onClick={onClose} className="font-serif text-2xl font-light tracking-[0.05em] text-ink no-underline transition-colors duration-200 hover:text-red-600">Über mich</a>
      <a href="#galerie" onClick={onClose} className="font-serif text-2xl font-light tracking-[0.05em] text-ink no-underline transition-colors duration-200 hover:text-red-600">Galerie</a>
      <a href="#reviews" onClick={onClose} className="font-serif text-2xl font-light tracking-[0.05em] text-ink no-underline transition-colors duration-200 hover:text-red-600">Reviews</a>
    </div>
  );
}
