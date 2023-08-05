// INTERFACES
// É especificamente projetado para descrever a forma (shape) de objetos.
// Pode ser estendido por outras interfaces usando a palavra-chave extends.
// Permite declarar métodos e propriedades públicas e opcionais, mas não suporta propriedades privadas ou protegidas.
// Nas interfaces e classes, você está modelando a forma (shape) do objeto e,
// portanto, não usa o sinal de igual (=) para declarar propriedades ou métodos.
// Não se pode usar intercection e union com interfaces, porque não existe o sinal de atribuição
// é possível usar extends para unir interfaces
// não é possível proteger atributos na classe que implementa

interface Name {
  name: string;
}

interface Age {
  age: number;
}

interface Adress {
  street: string;
}

interface Person extends Name, Age, Adress {}

export class user implements Person {
  constructor(
    public name: string,
    public age: number,
    public street: string,
  ) {}
}
