/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
class Triangle {
    constructor(_v1, _v2, _v3) {
        this._v1 = _v1;
        this._v2 = _v2;
        this._v3 = _v3;
    }
    get v1() {
        return this._v1;
    }
    set v1(value) {
        this._v1 = value;
    }
    get v2() {
        return this._v2;
    }
    set v2(value) {
        if (value === this._v1 || value === this._v3) {
            throw new Error('Não é permitido definir pontos iguais');
        }
        this._v2 = value;
    }
    get v3() {
        return this._v3;
    }
    set v3(value) {
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
    getArea() {
        return Math.abs((this.v1.x * (this.v2.y - this.v3.y) +
            this.v2.x * (this.v3.y - this.v1.y) +
            this.v3.x * (this.v1.y - this.v2.y)) /
            2);
    }
    draw(context) {
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
class FrontEndMethods {
}
class FrontEndHandling extends FrontEndMethods {
    constructor(inputAX, inputAY, inputBX, inputBY, inputCX, inputCY, points = {
        ax: 400,
        ay: 100,
        bx: 0,
        by: 300,
        cx: 0,
        cy: 50,
    }, triangle, context) {
        super();
        this.inputAX = inputAX;
        this.inputAY = inputAY;
        this.inputBX = inputBX;
        this.inputBY = inputBY;
        this.inputCX = inputCX;
        this.inputCY = inputCY;
        this.points = points;
        this.triangle = triangle;
        this.context = context;
    }
    getInputs() {
        this.inputAX = document.querySelector('#input-point-a-x');
        this.inputAY = document.querySelector('#input-point-a-y');
        this.inputBX = document.querySelector('#input-point-b-x');
        this.inputBY = document.querySelector('#input-point-b-y');
        this.inputCX = document.querySelector('#input-point-c-x');
        this.inputCY = document.querySelector('#input-point-c-y');
    }
    addListeners() {
        this.inputAX?.addEventListener('input', (e) => this.getValues(e));
        this.inputBX?.addEventListener('input', (e) => this.getValues(e));
        this.inputCX?.addEventListener('input', (e) => this.getValues(e));
        this.inputAY?.addEventListener('input', (e) => this.getValues(e));
        this.inputBY?.addEventListener('input', (e) => this.getValues(e));
        this.inputCY?.addEventListener('input', (e) => this.getValues(e));
    }
    getValues(e) {
        if ('target' in e) {
            const { name, value } = e.target;
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
                }
            }
        }
    }
    mountTriangle() {
        const pointA = new Point(this.points.ax, this.points.ay);
        const pointB = new Point(this.points.bx, this.points.by);
        const pointC = new Point(this.points.cx, this.points.cy);
        this.triangle = new Triangle(pointA, pointB, pointC);
        if (!this.context)
            this.setContext();
        if (this.context) {
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            this.triangle.draw(this.context);
        }
    }
    setContext() {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.fillStyle = 'black';
        context.font = '20px Arial';
        this.context = context;
    }
    init() {
        this.getInputs();
        this.addListeners();
        this.mountTriangle();
    }
}
const frontendInstance = new FrontEndHandling();
frontendInstance.init();

/******/ })()
;
//# sourceMappingURL=bundle.js.map