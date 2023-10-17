// habilitar decoratos in tsconfig.

function colorDecorator<T extends new (...args: any[]) => any >(target: T, _context: ClassDecoratorContext): T {
  const colorOptions = ['blue', 'green', 'yellow', 'orange'];
  return class extends target {
    color: string;
    constructor(...args: any[]) {
      super(...args);
      if (!colorOptions.includes(args[0])) {
        this.color = 'blue';
      } else this._color = args[0];
    }
  }
}

@colorDecorator
export class Animal {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}

// const AnimalDecorated = decorator(Animal);
const a = new Animal('purple');
console.log(a);
