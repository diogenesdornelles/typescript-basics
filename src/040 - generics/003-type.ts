type TPersonProtocol<U extends number, T extends string, V = boolean> = {
  name: T;
  surname: T;
  age: U;
  active: V;
}

export const personProtocol: TPersonProtocol<number, string, boolean> = {
  name: 'John',
  surname: 'Wick',
  age: 40,
  active: true,
}

