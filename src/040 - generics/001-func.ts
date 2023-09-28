// LOCAIS EM QUE PODE SER USADO o ANGULAR BRACKETS
// 1) Declaração de Função Genérica:
// function exampleA<T> -> Função receberá um genérico de tipo T
// 2) Chamada de Função Genérica:
// identity<number>(42); -> Iremos acionar a função com um tipo number
// 3) Type assertion:
// return <T>value -> type assertion ou type casting

// exemplo com todos os locais em que posso utilizar <>
function exampleA<T>(value: T): T {
  return <T>value;
}

let a: string = exampleA<string>('a');
console.log(a);

// impelindo que o arg seja um objeto que tenha um método print
interface IPrintable {
  print(arg: string): void;
}

type Tmsg = string;

function printItem<T extends IPrintable, U extends Tmsg>(item: T, arg: U) {
  item.print(arg);
}

const item = {
  name: 'foo',
  print: (arg: Tmsg) => console.log(item.name, arg)
}

printItem(item, '++');

// multiplos tipos

type TFirst = "key" | "value" | "arg";
type TLast = {
  keyA: number;
  keyB: number;
}

// a sintaxe { [K in T]: U } utilizada para criar um objeto com uma chave dinâmica
function pair<T extends TFirst, U extends TLast>(a: T, b: U): { [K in T]: U } {
  const result: { [K in T]: U } = {} as { [K in T]: U };
  result[a] = b;
  return result;
}

const p = pair<TFirst, TLast>('key', { keyA: 2, keyB: 5 });
console.log(p); // { key: { keyA: 2, keyB: 5 } }


// criando um mapper
type Mapper<W> = (item: W) => W;

function mapArray<T>(arr: T[], cbFn: Mapper<T>): T[] {
  return <T[]>arr.map(cbFn);
}

const doubleFy = (item: number): number => {
  return item * 2
}

const arr = [1,2,3,4]

const result = mapArray(arr, doubleFy);

console.log(result)


const multiplyAll1 = <T extends number | string>(factor: T, ...args: T[]): T[] => {
  const arr = args.map((item: T) => {
    if (typeof item === 'number' && typeof factor === 'number') {
      return factor * item
    } else {
      return 0
    }
  });
  return <T[]>arr
}

const arr2 = multiplyAll1<number | string | number | number>(2, '1',2,3)
console.log(arr2)


const multiplyAll2 = (factor: number, ...args: number[]): number[] => {
  const arr = args.map((item: number) => factor * item);
  return arr
}

const arr3 = multiplyAll2(2, 1,2,3)
console.log(arr3)

const foo = <T extends number>(arg: T) => {

}

