export function getSlideTransforms(
  current: number,
  offset: number,
  length: number,
): Record<number, string | null> {
  if (offset === 0) return {};

  const next = (current + 1) % length;
  const map: Record<number, string | null> = {};
  map[current] = `translateX(calc(0% + ${offset}px))`;
  map[next] = `translateX(calc(100% + ${offset}px))`;

  for (let i = 0; i < length; i++) {
    if (i !== current && i !== next) {
      map[i] = `translateX(calc(-100% + ${offset}px))`;
    }
  }
  return map;
}
