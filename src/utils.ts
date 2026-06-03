export function uid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(v, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Mélange une couleur hex avec du blanc (ratio > 0) ou du noir (ratio < 0) */
export function mixColor(hex: string, ratio: number): string {
  const [r, g, b] = hexToRgb(hex);
  const target = ratio >= 0 ? 255 : 0;
  const t = Math.abs(ratio);
  const mix = (c: number) => Math.round(c + (target - c) * t);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

/** Calcule les variables CSS d'accent à partir d'une couleur de base */
export function accentVars(base: string): Record<string, string> {
  return {
    "--ac": base,
    "--ac-dark": mixColor(base, -0.25),
    "--ac-light": mixColor(base, 0.5),
    "--ac-border": mixColor(base, 0.72),
    "--ac-bg": mixColor(base, 0.92),
  };
}
