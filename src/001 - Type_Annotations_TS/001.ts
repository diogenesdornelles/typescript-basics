/* eslint-disable @typescript-eslint/no-unused-vars */
const nome: string = 'Diogenes';
const age: number = 38;
const adult: boolean = true;

const arrayNumber: Array<number> = [1, 2, 3];

const arrayNumber2: number[] = [1, 2, 3];

const array: Array<string> = ['a', 'b', 'c'];

type Person = { nome: string; age: number; adult?: boolean };

const person: Person = {
  nome,
  age,
};

function sum(a: number, b: number) {
  return a + b;
}

const sum_2: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
