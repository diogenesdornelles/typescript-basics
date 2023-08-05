// assim como type, é possível 'mergear' interfaces com mesmo nome

interface Person {
  readonly name: string;
}

interface Person {
  readonly surname: string;
}

interface Person {
  readonly addresses?: ReadonlyArray<string>;
}

interface Person {
  readonly age: number;
}

class Client implements Person {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public addresses: string[] = ['rua vitoria'],
  ) {}
}

const client = new Client('dio', 'Dorn', 38);
console.log(client);
