class Point {
  constructor(
    private _x: number,
    private _y: number,
  ) {}
  get x(): number {
    return this._x;
  }
  get y(): number {
    return this._y;
  }
}

export class Triangle {
  constructor(
    private _v1: Point = new Point(1, 2),
    private _v2: Point = new Point(1, 2),
    private _v3: Point = new Point(2, 7),
  ) {}
  get v1(): Point {
    return this._v1;
  }
  set v1(value: Point) {
    this._v1 = value;
  }
  get v2(): Point {
    return this._v2;
  }
  set v2(value: Point) {
    if (value === this._v1 || value === this._v3) {
      throw new Error('Não é permitido definir pontos iguais');
    }
    this._v2 = value;
  }
  get v3(): Point {
    return this._v3;
  }
  set v3(value: Point) {
    if (value === this._v1 || value === this._v2) {
      throw new Error('Não é permitido definir pontos iguais');
    }
    const slopeAB_EF = (value.y - this._v1.y) / (value.x - this._v2.x);
    const slopeAB_CD = (this._v2.y - this._v1.y) / (this._v2.x - this._v2.x);
    if (slopeAB_EF === slopeAB_CD) {
      throw new Error('Pontos não podem ser colineares');
    }
    this._v3 = value;
  }
  getArea(): number {
    return Math.abs(
      (this._v1.x * (this._v2.y - this._v3.y) +
        this._v2.x * (this._v3.y - this._v1.y) +
        this._v3.x * (this._v1.y - this._v2.y)) /
        2,
    );
  }
}

const triangle = new Triangle();

console.log(triangle.getArea());
