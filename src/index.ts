import os from 'os';

function assertNonNull<T>(value: T, message?: string): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw Error(message ?? `Assert Non-Null failed, value = ${value}`);
  }
}

export function endOfLine(text?: string) {
  if (text) {
    const t = text.slice(0, 4096);
    const nl = t.match(/\r\n|\n\r|\n|\r/g);
    if (nl && nl.length > 0) {
      const s = nl.reduce<[string, number][]>(
        (r, a) => {
          const c = r.find(([c]) => c === a);
          assertNonNull(c);
          c[1]++;
          return r;
        },
        [
          ['\n', 0],
          ['\r\n', 0],
          ['\r', 0],
          ['\n\r', 0],
        ],
      );
      const r = s.reduce<[string, number][]>(
        (r, a) => (r.length < 1 || r[0][1] < a[1] ? [a] : r[0][1] === a[1] ? [...r, a] : r),
        [],
      );
      if (r.length === 1 || !r.some(([c]) => c === os.EOL)) return r[0][0];
    }
  }
  return os.EOL;
}
