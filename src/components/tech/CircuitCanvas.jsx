import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './CircuitCanvas.css';

const GRID = 48;
const TRACE_COUNT = 18;

/** Gerador pseudoaleatório com semente: o desenho é sempre o mesmo. */
function seeded(seed) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

/** Cria trilhas de circuito: retas na grade com curvas de 45°. */
function buildTraces(width, height) {
  const rand = seeded(7);
  const cols = Math.ceil(width / GRID);
  const rows = Math.ceil(height / GRID);
  const traces = [];

  for (let t = 0; t < TRACE_COUNT; t += 1) {
    let x = Math.floor(rand() * cols) * GRID;
    let y = Math.floor(rand() * rows) * GRID;
    const points = [[x, y]];
    const steps = 3 + Math.floor(rand() * 4);
    let horizontal = rand() > 0.5;

    for (let s = 0; s < steps; s += 1) {
      const run = (1 + Math.floor(rand() * 4)) * GRID;
      const dir = rand() > 0.5 ? 1 : -1;
      if (horizontal) x += run * dir;
      else y += run * dir;
      points.push([x, y]);
      // curva de 45° entre trechos
      const diag = GRID * (rand() > 0.5 ? 1 : -1);
      x += horizontal ? 0 : diag;
      y += horizontal ? diag : 0;
      x += horizontal ? GRID * dir : 0;
      y += horizontal ? 0 : GRID * dir;
      points.push([x, y]);
      horizontal = !horizontal;
    }

    const lengths = points.slice(1).map(([px, py], i) => Math.hypot(px - points[i][0], py - points[i][1]));
    traces.push({
      points,
      lengths,
      total: lengths.reduce((a, b) => a + b, 0),
      offset: rand(),
      speed: 0.04 + rand() * 0.05,
      warm: rand() > 0.7,
    });
  }
  return traces;
}

function pointAt(trace, progress) {
  let distance = progress * trace.total;
  for (let i = 0; i < trace.lengths.length; i += 1) {
    if (distance <= trace.lengths[i]) {
      const [x1, y1] = trace.points[i];
      const [x2, y2] = trace.points[i + 1];
      const k = trace.lengths[i] ? distance / trace.lengths[i] : 0;
      return [x1 + (x2 - x1) * k, y1 + (y2 - y1) * k];
    }
    distance -= trace.lengths[i];
  }
  return trace.points[trace.points.length - 1];
}

function readColors() {
  const styles = getComputedStyle(document.documentElement);
  return {
    cool: styles.getPropertyValue('--accent-2').trim() || '#7EAAEB',
    warm: styles.getPropertyValue('--accent').trim() || '#EC6A86',
  };
}

/** Fundo animado do hero: trilhas de circuito com pulsos de dados. */
export function CircuitCanvas() {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    let traces = [];
    let colors = readColors();
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      traces = buildTraces(width, height);
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1.2;
      ctx.lineJoin = 'round';

      traces.forEach((trace) => {
        const color = trace.warm ? colors.warm : colors.cool;
        ctx.globalAlpha = 0.22;
        ctx.strokeStyle = color;
        ctx.beginPath();
        trace.points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.stroke();

        const [ex, ey] = trace.points[trace.points.length - 1];
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(ex, ey, 3, 0, Math.PI * 2);
        ctx.fill();

        if (!reduced) {
          const progress = (trace.offset + (time / 1000) * trace.speed) % 1;
          const [px, py] = pointAt(trace, progress);
          ctx.globalAlpha = 0.95;
          ctx.shadowColor = color;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(px, py, 2.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
      ctx.globalAlpha = 1;
    };

    const loop = (time) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    resize();
    if (reduced) draw(0);
    else frame = requestAnimationFrame(loop);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    resizeObserver.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      colors = readColors();
      if (reduced) draw(0);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="circuit-canvas" aria-hidden="true" />;
}
