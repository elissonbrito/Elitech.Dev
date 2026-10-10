import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Digita uma sequência de linhas, uma após a outra.
 * Com movimento reduzido, mostra tudo de imediato.
 */
export function useTypewriter(lines, { speed = 28, pause = 420 } = {}) {
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState({ line: 0, char: 0 });

  useEffect(() => {
    if (reduced) return undefined;
    const { line, char } = state;
    if (line >= lines.length) return undefined;

    const finishedLine = char >= lines[line].length;
    const timer = setTimeout(
      () => setState(finishedLine ? { line: line + 1, char: 0 } : { line, char: char + 1 }),
      finishedLine ? pause : speed,
    );
    return () => clearTimeout(timer);
  }, [state, lines, speed, pause, reduced]);

  if (reduced) return { visible: lines, done: true };

  const visible = lines
    .slice(0, state.line + 1)
    .map((text, index) => (index < state.line ? text : text.slice(0, state.char)));
  return { visible, done: state.line >= lines.length };
}
