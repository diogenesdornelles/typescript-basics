// definindo 03 assinaturas

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y: number, ...args: number[]): number => {
  const arr = [x, y, ...args];
  return arr.reduce((acc, v) => (Number(v) ? acc + v : acc), 0);
};

const ad = adder(1, 1, 1, 1);
console.log(ad);
