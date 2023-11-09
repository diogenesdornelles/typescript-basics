// Inversão de dependência: uma classe se relaciona com uma classe abstrata/interface, a fim de utilizar serviços de filhas destas.
// Criou-se uma associação fraca ao estabelecer um atributo opcional do tipo 'Tool' em 'Writer'

export abstract class Tool {
  constructor(private _name: string) {}
  get name(): string {
    return this._name;
  }
  abstract write(): string;
}

class Pen extends Tool {
  write(): string {
    return `writting with ${this.name} ...`;
  }
}

const pen = new Pen('caneta');

class Pencil extends Tool {
  write(): string {
    return `writting with ${this.name} ...`;
  }
}

const pencil = new Pencil('lapis');

class Writer {
  constructor(
    private _name: string,
    // inversão de dependência com uma associação fraca (opcional(?), pois escritor existe independentemente de Tool. _tool pode ser qualquer objeto de uma classe filha de Tool)
    private _tool?: Tool,
  ) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool) {
    this._tool = tool;
  }

  writeWith(): void {
    if (!this._tool) {
      console.log(`${this._name} has no tool!`);
    } else {
      console.log(`${this._name} is ${this._tool.write()}`);
    }
  }
}

const writer = new Writer('Dio');

writer.tool = pen;

writer.writeWith();

writer.tool = pencil;

writer.writeWith();
