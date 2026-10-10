import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'elitech-theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function store(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* armazenamento indisponível: o tema vale só para esta visita */
  }
}

function resolveInitial() {
  const explicit = document.documentElement.dataset.theme || readStored();
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return window.matchMedia?.(DARK_QUERY).matches === false ? 'light' : 'dark';
}

/** Tema claro/escuro com preferência do sistema como padrão. */
export function useTheme() {
  const [theme, setTheme] = useState(resolveInitial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      store(next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
