// similar ao any, mas mais seguro. Força a checagem de tipo antes de operações.
let x: unknown;

x = 100;
x = 'sei la';
x = 900;
x = '10';
const y: number = 900;
if (typeof x === 'number') console.log(y + x);
// console.log(y + x);
