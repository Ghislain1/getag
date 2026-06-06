export function GradientWrap({ children, className = '', ...rest }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`relative inline-flex overflow-hidden rounded-full p-[1px] ${className}`} {...rest}>
      <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent, var(--accent), transparent, var(--accent), transparent)' }} />
      <span className="relative flex items-center justify-center rounded-full bg-[var(--bg)] transition-all duration-300 hover:bg-[var(--bg2)]">
        {children}
      </span>
    </span>
  );
}
