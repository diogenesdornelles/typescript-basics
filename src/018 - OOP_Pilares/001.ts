// abstração, encapsulamento, herança e polimorfismo.

// abstração permite isolar do objeto somente attrs essenciais.

// encapsulamento ocultar partes internas ao funcionamento do objeto.

// herança visa passar características para um objeto em hierarquia inferior, ou seja, a classe inferior é a classe superior.

// polimorfismo possui a ideia de que a classe filha tem a capacidade de assumir diferentes formas.

// # modificadores de acesso.

// public acessíveis dentro da própria classe, bem como fora dela.

// private acessíveis apenas dentro da própria classe.

// protected são acessíveis dentro da própria classe e de suas subclasses (classes que a estendem).

export abstract class Person {
  private _name: string;
  private _lastName: string;
  constructor(name: string, lastName: string) {
    this._name = name;
    this._lastName = lastName;
  }
  // Getter
  get name(): string {
    return this._name;
  }

  // Setter
  set name(other: string) {
    this._name = other;
  }
  // Getter
  get lastName(): string {
    return this._lastName;
  }

  // Setter
  set lastName(other: string) {
    this._lastName = other;
  }

  public introduceYourself(): void {
    console.log(`Hello, my name is ${this._name} ${this._lastName}`);
  }

  abstract getWage(): number;

  static giveHours(): void {
    console.log(new Date().toLocaleDateString());
  }
}

export class Employee extends Person {
  private _wage: number;
  constructor(name: string, lastName: string, wage: number) {
    super(name, lastName);
    this._wage = wage;
  }
  public getWage(): number {
    return this._wage;
  }
}

export class Manager extends Person {
  private _wage: number;
  constructor(name: string, lastName: string, wage: number) {
    super(name, lastName);
    this._wage = wage;
  }
  public getWage(): number {
    return this._wage;
  }
}

class DeclareWage {
  public declare(person: Person): void {
    console.log(`My wage is ${person.getWage()}`);
  }
}

const employee: Employee = new Employee('Dio', 'Costa', 2000);
const manager: Manager = new Manager('Elis', 'Maciel', 4000);
const declare: DeclareWage = new DeclareWage();

employee.introduceYourself();
Employee.giveHours();
declare.declare(manager);

export class RemoteControll {
  private powerStatus: boolean;
  constructor() {
    this.powerStatus = false;
  }

  public turnOn(): void {
    this.powerStatus = true;
  }
  public turnOff(): void {
    this.powerStatus = false;
  }

  public status(): boolean {
    return this.powerStatus;
  }
}
