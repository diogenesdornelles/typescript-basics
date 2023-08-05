// tuplas não existem em js puro. Em ts, via de regra, são mutáveis, diferentemente de python.

const dadosA: [number, string] = [123, 'Luiz']; // não há como criar um terceiro elemento

const dadosB: [number, string, string?] = [123, 'Luiz']; // terceiro elemento é opcional

const dadosC: [number, ...string[]] = [123, 'Luiz']; // somente o primeiro precisa ser number. Pemrite estender.

const dadosD: readonly [number, string] = [123, 'Luiz']; // Readonly: a tupla se torna imutável. Não é possível usar métodos como pop ou push.

console.log(dadosA);
console.log(dadosB);
console.log(dadosC);
console.log(dadosD);

// mimetizando o comportamento de tuplas com readonly arrays
const arr_1: readonly string[] = ['Otávio', 'Tato'];
const arr_2: ReadonlyArray<string> = ['Jojo', 'Linda'];

console.log(arr_1);
console.log(arr_2);
