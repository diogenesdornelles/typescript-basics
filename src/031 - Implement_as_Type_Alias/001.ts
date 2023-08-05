export abstract class PersonTypeA {
  protected abstract name: string;
  protected abstract surname: string;
  protected abstract fullName(): string;
}

class Client extends PersonTypeA {
  constructor(
    protected name: string,
    protected surname: string,
  ) {
    super();
  }
  fullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

// TYPE: Implementa como uma espécie de interface. Não há possibilidade de uso de modificadores de acesso
// se precisar de modificadores de acesso, preferível usar extends com abstract

// Permite criar um novo nome para um tipo existente, tornando o código mais legível e expressivo.

// Permite a criação de tipos de união (união de tipos) e interseção (intersecção de tipos).

// Pode ser usado para definir tipos primitivos, tipos de união, tipos literais, tipos de função e tipos genéricos.

// em type, você pode criar um novo nome para um tipo existente, definindo-o como uma união,
// interseção ou qualquer outro tipo de personalização.

type PersonTypeB = {
  name: string;
  surname: string;
  fullName(): string;
};

type Age = {
  age: number;
  getAge(): number;
};

type Address = {
  street: string;
};

// implementa o tipo/interface
class User implements PersonTypeB, Age {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
  ) {}
  fullName(): string {
    return `${this.name} ${this.surname}`;
  }
  getAge(): number {
    return this.age;
  }
}

type FullInfo = PersonTypeB & Age & Address; // Deve ter todos os attrs

class Customer implements FullInfo {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public street: string,
  ) {}
  fullName(): string {
    return `${this.name} ${this.surname}`;
  }
  getAge(): number {
    return this.age;
  }
}

const client = new Client('Dio', 'Dorn');
const user = new User('Tato', 'Dorn', 8);
const customer = new Customer('Tato', 'Dorn', 8, 'Vitória');
console.log(client);
console.log(user);
console.log(customer);
