// Para relação de herança entre uma classe abstrata e suas subclasses em um diagrama UML,
// utilizamos a seta "Generalization" (também conhecida como "inheritance" ou "is-a")

// a dependência ocorre sempre que uma classe utiliza outra, geralmente como um parâmetro de método,
// variável local ou retorno de método, sem que exista uma relação mais forte entre elas

export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected force: number,
    protected life: number,
    protected defense: number,
    protected _isAlive: boolean = true,
  ) {}
  //  associação de dependência: polimorfismo. Método depende de uma outra instância de outra classe.
  atack(oponent: Personagem): void {
    console.log(`${this.name} is atacking ${oponent.name}!`);
    this.slogan();
    oponent.receiveDamaged(this.force);
  }
  receiveDamaged(damage: number): void {
    let realDamage: number;
    this.life -= damage;
    if (this.defense >= damage) {
      this.life += damage;
      realDamage = 0;
    } else {
      realDamage = damage - this.defense;
      this.life += this.defense;
    }
    if (realDamage > 0) {
      console.log(`${this.name} lost ${realDamage} life! Now is ${this.life} HP!`);
    } else {
      console.log(`Too weak atack!`);
    }
    this.checkIsAlive();
  }
  protected checkIsAlive(): void {
    if (this.life <= 0) {
      this._isAlive = false;
      console.log(`${this.name} is dead!`);
    }
  }
  get isAlive(): boolean {
    return this._isAlive;
  }

  abstract slogan(): void; // força as subclasses a adotarem o método
}

class Warrior extends Personagem {
  protected emoji: string = '\u{1F9DD}';
  slogan(): void {
    console.log(this.emoji, 'UNTIL WINNN!');
  }
}

class Monster extends Personagem {
  protected emoji: string = '\u{1F9DF}';
  slogan(): void {
    console.log(this.emoji, 'DIE HUMANN!');
  }
}

const warrior: Warrior = new Warrior('Elfo', 5, 100, 2);

const monster: Monster = new Monster('Orc', 3, 80, 3);

let count = 0;

while (warrior.isAlive && monster.isAlive) {
  if (count % 2 === 0) {
    warrior.atack(monster);
  } else {
    monster.atack(warrior);
  }
  count++;
}
