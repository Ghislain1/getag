import { useState, useCallback } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = useCallback(() => setIsOpen(v => !v), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, close };
}
