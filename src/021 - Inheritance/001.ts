// Em UML, utilizamos seta 'generalization' para estabelecer a herança

// superclass, baseclass, parentclass
export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly _idade: number,
    private readonly _peso: number,
    private readonly _matricula: number,
    protected readonly _cpf: string,
  ) {}
  get idade(): number {
    return this._idade;
  }
  get peso(): number {
    return this._peso;
  }
  get cpf(): string {
    return this._cpf;
  }
  get matricula(): number {
    return this._matricula;
  }
  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// subclasses
export class Aluno extends Pessoa {
  private readonly _turma: string;
  constructor(
    nome: string,
    sobrenome: string,
    _turma: string,
    _idade: number,
    _cpf: string,
    _matricula: number,
    _peso: number,
  ) {
    super(nome, sobrenome, _idade, _peso, _matricula, _cpf); // chamado para ter acesso a superclasse
    this._turma = _turma;
  }
  get turma(): string {
    return this._turma;
  }
  get nomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`;
  }
}

// subclasses
export class Professor extends Pessoa {
  private readonly _graduacao: string;
  constructor(
    nome: string,
    sobrenome: string,
    _graduacao: string,
    _idade: number,
    _cpf: string,
    _matricula: number,
    _peso: number,
  ) {
    super(nome, sobrenome, _idade, _peso, _matricula, _cpf);
    this._graduacao = _graduacao;
  }
  get graduacao(): string {
    return this._graduacao;
  }
  get nomeCompleto(): string {
    return `Professor: ${this.nome} ${this.sobrenome}`;
  }
}
