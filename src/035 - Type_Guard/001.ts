// Type Guard - garantir que os tipos sejam corretamente fornecidos

type argA = number | string;

type argB = number | string;

export function add(a: argA, b: argB): argA {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

const result: number | string = add(2, '3');

console.log(result);

type A = { aaa: string };

type B = { bbb: string };

type C = A | B;

class D implements A {
  constructor(public aaa: string) {}
}

const a: A = {
  aaa: 'aaa',
};

const d = new D('ddd');

type Show = (obj: C) => void;

const show: Show = (obj: C | D) => {
  // garantir que exista a chave
  if ('bbb' in obj) console.log(obj.bbb);
  if (obj instanceof D) console.log(obj.aaa);
  if (typeof obj === 'object') console.log(a.aaa);
};

show(d);
