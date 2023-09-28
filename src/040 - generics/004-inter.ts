interface IPersonProtocol<T extends string, U extends number, V = boolean> {
  name: T;
  surname: T;
  age: U;
  active: V;
}

const personProtocol: IPersonProtocol<string, number, boolean> = {
  name: 'John',
  surname: 'Wick',
  age: 40,
  active: true,
}


interface IPerson {
  [key: string]: "name" | "surname" | "age" | string | number | boolean;
}

const person: IPerson = {
  name: "John",     // Valor literal "name"
  surname: "Doe",  // Valor literal "surname"
  age: 30,          // Valor literal "age"
  city: "New York", // Chave e valor não literais
  isActive: true,   // Chave e valor não literais
};

