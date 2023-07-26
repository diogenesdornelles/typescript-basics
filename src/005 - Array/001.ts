//Array<T> - T[]

function multArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

const mult: number = multArgs(2, 3, 4);

console.log(mult);

function concatStr(...args: string[]): string {
  return args.reduce((ac, value) => ac + value, '');
}

const concat: string = concatStr('a', 'b', 'c');

console.log(concat);

function toUpper(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const upper: string[] = toUpper('a', 'b', 'c');

console.log(upper);
