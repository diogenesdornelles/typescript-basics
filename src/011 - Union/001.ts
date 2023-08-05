// pipe indica que é possível unir tipos
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

const result: number | string = add(2, '3');

console.log(result);
