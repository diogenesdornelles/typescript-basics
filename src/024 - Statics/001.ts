//
export class Pessoa {
  static standardtAge: number = 0;
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade?: number,
  ) {}
  // factory method
  static createPerson(nome: string, sobrenome: string, idade: number): Pessoa {
    const p = new Pessoa(nome, sobrenome, idade);
    return p;
  }
}

const p = Pessoa.createPerson('Dio', 'Costa', Pessoa.standardtAge);
console.log(p);
