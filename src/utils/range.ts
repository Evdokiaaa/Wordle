export default function range(start: number, end?: number, step = 1) {
  const result = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}
