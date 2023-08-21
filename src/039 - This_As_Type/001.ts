// this as type

export class Calculator {
  constructor(public n: number) {}

  add(other: number): this {
    this.n += other;
    return this;
  }

  sub(other: number): this {
    this.n -= other;
    return this;
  }

  mul(other: number): this {
    this.n *= other;
    return this;
  }

  div(other: number): this {
    this.n /= other;
    return this;
  }
}

class SubCalculator extends Calculator {
  constructor(n: number) {
    super(n);
  }
  pow(other: number): this {
    this.n = Math.pow(this.n, other);
    return this;
  }
}

const calc = new SubCalculator(3);
const { n } = calc.add(2).div(3).sub(3).pow(3);
console.log(n);

// GOF - Builder Pattern. Settar por partes o objeto.

type RequisitionType = 'GET' | 'POST';

export class RequestBuilder {
  private method: RequisitionType | null = null;
  private URL: string | null = null;

  setMethod(method: RequisitionType): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.URL = url;
    return this;
  }

  send(): void {
    console.log(`Sending data by ${this.method} method to ${this.URL}`);
  }
}

const req = new RequestBuilder();

req.setMethod('GET').setUrl('https//..').send();
