// Association: relação de 'tem-um'
// relação fraca
// nenhum dos objetos depende um do outro para existir
// pode-se criar uma associação fraca ao criar um atributo opcional do tipo 'Tool' em 'Writer'
// no caso abaixo, criou-se no próprio método writeWith

export abstract class Tool {
  constructor(public name: string) {}
}

class Pen extends Tool {}

const pen = new Pen('caneta');

class Pencil extends Tool {}

const pencil = new Pencil('lapis');

class Escritor {
  constructor(public name: string) {}

  writeWith(tool: Tool): void {
    console.log(`${this.name} está escrevendo com um(a) ${tool.name}`);
  }
}

const escritor = new Escritor('Dio');

escritor.writeWith(pencil);
escritor.writeWith(pen);
