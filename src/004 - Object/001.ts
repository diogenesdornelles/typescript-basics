// sem anotação, ts reconhece chaves, mas obsta seja o objeto estendido. Não poso criar outras chaves.
const objA = {
  keyA: 'valor a',
  keyB: 'valor b',
};

console.log(objA.keyA);

// ts não reconhece a forma do objeto. Posso criar outras chaves.
const objB: Record<string, unknown> = {
  keyA: 'valor a',
  keyB: 'valor b',
};

console.log(objB);

// estrutura equivalente ao Record, mas há o reconhecimento de forma. keyC é opcional. Readonly apenas leitura.
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
