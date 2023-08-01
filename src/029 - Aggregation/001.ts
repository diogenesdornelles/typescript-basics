// Agregação: objetos das classes agregada e agregadora existem em separado, mas a classe agregada complementa de forma essencial
// o objetivo da classe agregadora. O carrinho existe, mas sua funcionalidade fica limitada por completo sem produtos.
// A destruição de carrinho ou produto não afeta a existência um do outro.

export default class Good {
  constructor(
    private _name: string,
    private _price: number,
  ) {}
  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price;
  }
  info(): Record<string, string | number> {
    return {
      name: this._name,
      price: this._price,
    };
  }
}

class Cart {
  constructor(private _goods: Good[] = []) {}
  get goods(): Good[] {
    return this._goods;
  }
  add(...goods: Good[]): void {
    this._goods = [...this._goods, ...goods];
  }
  remove(good: Good): void {
    this._goods = this._goods.filter((item) => item !== good);
  }
  show(): void {
    this._goods.forEach((item) => {
      console.log(item.info());
    });
  }
  total(): number {
    return this._goods.reduce((ac, good) => good.price + ac, 0);
  }
}

const cart = new Cart();
const good1 = new Good('Cell1', 1000);
const good2 = new Good('Cell2', 2000);
cart.add(good1, good2);
cart.show();
console.log('total R$ ', cart.total());
