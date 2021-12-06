import CanvasEvent from "./event";
import Base from "./shapes/base";

export default class Dodo {
  ratio = window.devicePixelRatio || 1;
  constructor({ width = 250, height = 250 } = {}) {
    this.width = width;
    this.height = height;
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.width = width + "px";
    this.canvas.style.height = height + "px";
    this.ctx = this.canvas.getContext("2d");
    this.ctx.scale(this.ratio, this.ratio);
    this.shapes = [];
    this.drawGrid(this.ctx);
  }
  getContainer(container = HTMLElement) {
    if (!container instanceof Element) {
      throw new Error("Mount point should be set");
    }
    return container;
  }
  drawGrid(
    ctx = null,
    xSize = 10,
    ySize = 10,
    color = "lightgray",
    lineWidth = 0.5,
  ) {
    const lineWidthOrigin = ctx.lineWidth;
    ctx.lineWidth = lineWidth;
    const grid = function (
      size,
      max = 0,
      moveTo = function () {},
      lineTo = function () {},
    ) {
      for (let i = lineWidth, j = 0; i < max; i += size, j++) {
        ctx.beginPath();
        moveTo(i);
        lineTo(i);
        if (j % 5 === 0) {
          ctx.strokeStyle = "darkgrey";
        } else {
          ctx.strokeStyle = color;
        }
        ctx.stroke();
      }
    };
    grid(
      xSize,
      ctx.canvas.width,
      function (i) {
        ctx.moveTo(i, 0);
      },
      function (i) {
        ctx.lineTo(i, ctx.canvas.height);
      },
    );
    grid(
      ySize,
      ctx.canvas.height,
      function (i) {
        ctx.moveTo(0, i);
      },
      function (i) {
        ctx.lineTo(ctx.canvas.width, i);
      },
    );

    ctx.lineWidth = lineWidthOrigin;
  }
  mount(container = null) {
    const c = this.getContainer(container);
    if (!c.querySelector("canvas")) {
      c.appendChild(this.canvas);
      this.setupCanvasEvent();
    }
  }
  setupCanvasEvent() {
    this.canvas.addEventListener("click", this.handleClick.bind(this));
  }
  handleClick(event) {
    const rect = this.canvas.getBoundingClientRect();
    const point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    const evt = new CanvasEvent({ type: event.type, data: { point } });
    for (let index = 0; index < this.shapes.length; index++) {
      const shape = this.shapes[this.shapes.length - 1 - index];
      shape.setActive(false);
      if (evt.isStopPropagation) {
        continue;
      }
      if (shape.isPointInRegion(point)) {
        shape.trigger("click", evt);
      }
    }
    this.redraw();
  }
  shapeDetect(shape = null) {
    if (!(shape instanceof Base)) {
      throw new Error("It's not illegal shape!");
    }
  }
  add(shape = null) {
    this.shapeDetect(shape);
    if (this.shapes.findIndex((s) => s === shape) < 0) {
      this.shapes.push(shape);
      this.draw(shape);
    } else {
      console.warn(`Fail to add shape, duplicate: ${shape.type}`);
    }
  }
  addAll(...shapes) {
    shapes.forEach((s) => {
      this.add(s);
    });
  }
  moveActiveShape(step = { x: 1, y: 0 }) {
    this.shapes.forEach((s) => {
      if (s.active) {
        s.move(step);
      }
    });
    this.redraw();
  }
  removeActiveShape() {
    this.shapes = this.shapes.filter((s) => !s.active);
    this.redraw();
  }
  draw(shape) {
    this.shapeDetect(shape);
    shape.draw(this.ctx);
  }
  redraw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawGrid(this.ctx);

    this.shapes.forEach((s) => this.draw(s));
  }
}
