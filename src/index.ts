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

class Triangle {
  constructor(
    private _v1: Point,
    private _v2: Point,
    private _v3: Point,
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
      (this.v1.x * (this.v2.y - this.v3.y) +
        this.v2.x * (this.v3.y - this.v1.y) +
        this.v3.x * (this.v1.y - this.v2.y)) /
        2,
    );
  }
  draw(context: CanvasRenderingContext2D): void {
    const labelV1 = 'V1';
    const labelV2 = 'V2';
    const labelV3 = 'V3';
    context.beginPath();
    context.moveTo(this.v1.x, this.v1.y);
    context.fillText(labelV1, this.v1.x, this.v1.y);
    context.lineTo(this.v2.x, this.v2.y);
    context.fillText(labelV2, this.v2.x, this.v2.y);
    context.lineTo(this.v3.x, this.v3.y);
    context.fillText(labelV3, this.v3.x, this.v3.y);
    context.closePath();
    context.fill();
    context.fillText(`Área: ${this.getArea()}`, 350, 490);
  }
}

type Points = {
  ax: number;
  ay: number;
  bx: number;
  by: number;
  cx: number;
  cy: number;
};

interface InputElements {
  inputAX?: HTMLInputElement;
  inputAY?: HTMLInputElement;
  inputBX?: HTMLInputElement;
  inputBY?: HTMLInputElement;
  inputCX?: HTMLInputElement;
  inputCY?: HTMLInputElement;
  inputScale?: HTMLInputElement;
}

abstract class FrontEndMethods {
  abstract getInputs(): void;
  abstract addListeners(): void;
  abstract getValues(e: Event): void;
  abstract mountTriangle(): void;
  abstract setContext(): void;
  abstract init(): void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class FrontEndHandling extends FrontEndMethods implements InputElements {
  constructor(
    public inputAX?: HTMLInputElement,
    public inputAY?: HTMLInputElement,
    public inputBX?: HTMLInputElement,
    public inputBY?: HTMLInputElement,
    public inputCX?: HTMLInputElement,
    public inputCY?: HTMLInputElement,
    public inputScale?: HTMLInputElement,
    public points: Points = {
      ax: 400,
      ay: 100,
      bx: 0,
      by: 300,
      cx: 0,
      cy: 50,
    },
    public triangle?: Triangle,
    public context?: CanvasRenderingContext2D,
    public scaleFactor: number = 1,
  ) {
    super();
  }
  getInputs(): void {
    this.inputAX = document.querySelector('#input-point-a-x') as HTMLInputElement;
    this.inputAY = document.querySelector('#input-point-a-y') as HTMLInputElement;
    this.inputBX = document.querySelector('#input-point-b-x') as HTMLInputElement;
    this.inputBY = document.querySelector('#input-point-b-y') as HTMLInputElement;
    this.inputCX = document.querySelector('#input-point-c-x') as HTMLInputElement;
    this.inputCY = document.querySelector('#input-point-c-y') as HTMLInputElement;
    this.inputScale = document.querySelector('#input-range-scale') as HTMLInputElement;
  }
  addListeners(): void {
    this.inputAX?.addEventListener('input', (e: Event) => this.getValues(e));
    this.inputBX?.addEventListener('input', (e: Event) => this.getValues(e));
    this.inputCX?.addEventListener('input', (e: Event) => this.getValues(e));
    this.inputAY?.addEventListener('input', (e: Event) => this.getValues(e));
    this.inputBY?.addEventListener('input', (e: Event) => this.getValues(e));
    this.inputCY?.addEventListener('input', (e: Event) => this.getValues(e));
    this.inputScale?.addEventListener('change', (e: Event) => this.getValues(e));
  }
  getValues(e: Event): void {
    if ('target' in e) {
      const { name, value } = e.target as HTMLInputElement;
      if (parseFloat(value)) {
        switch (name) {
          case 'point-a-x':
            this.points.ax = parseFloat(value);
            this.mountTriangle();
            break;
          case 'point-a-y':
            this.points.ay = parseFloat(value);
            this.mountTriangle();
            break;
          case 'point-b-x':
            this.points.bx = parseFloat(value);
            this.mountTriangle();
            break;
          case 'point-b-y':
            this.points.by = parseFloat(value);
            this.mountTriangle();
            break;
          case 'point-c-x':
            this.points.cx = parseFloat(value);
            this.mountTriangle();
            break;
          case 'point-c-y':
            this.points.cy = parseFloat(value);
            this.mountTriangle();
            break;
          case 'input-range-scale':
            this.scaleFactor = parseFloat(value) / 4;
            this.mountTriangle();
            break;
        }
      }
    }
  }
  mountTriangle(): void {
    const pointA: Point = new Point(
      this.points.ax * this.scaleFactor,
      this.points.ay * this.scaleFactor,
    );
    const pointB: Point = new Point(
      this.points.bx * this.scaleFactor,
      this.points.by * this.scaleFactor,
    );
    const pointC: Point = new Point(
      this.points.cx * this.scaleFactor,
      this.points.cy * this.scaleFactor,
    );
    this.triangle = new Triangle(pointA, pointB, pointC);
    if (!this.context) this.setContext();
    if (this.context) {
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.triangle.draw(this.context);
    }
  }
  setContext(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.fillStyle = 'black';
    context.font = '20px Arial';
    this.context = context;
  }
  init(): void {
    this.getInputs();
    this.addListeners();
    this.mountTriangle();
  }
}

const frontendInstance = new FrontEndHandling();
frontendInstance.init();
