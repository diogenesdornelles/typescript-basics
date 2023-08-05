// sem anotação, ts reconhece chaves, mas obsta seja o objeto estendido. Não poso criar outras chaves.
const objA = {
  keyA: 'valor a',
  keyB: 'valor b',
};

console.log(objA.keyA);

// Utilizando Record ts não reconhece a forma do objeto. Posso criar outras chaves adicionais no curso da instrução.
const objB: Record<string, unknown> = {
  keyA: 'valor a',
  keyB: 'valor b',
};

console.log(objB);

// Estrutura equivalente ao Record, mas há o reconhecimento de forma. keyC é opcional. Readonly apenas leitura.
// [key: string]: unknown, no entanto permite a extensão
const objC: {
  keyA: string;
  readonly keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'valor a',
  keyB: 'valor b',
};

console.log(objC);

// Record<keyType, valueType> ... example for mixed values
const objD: Record<string, string | number> = {
  keyA: 'A',
  keyB: 2,
};

console.log(objD);
