import Base from "./base";

export default class Circle extends Base {
  constructor(options = {}) {
    super(options);
    const { radius = 50, x = 0, y = 0 } = options;
    this.radius = radius;
    this.x = x;
    this.y = y;
  }
  update(options = {}) {
    super.update(options);
    const { radius = 50, x = 0, y = 0 } = options;
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw(ctx = null) {
    super.draw(ctx);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.bgColor;
    ctx.fill();
    // ctx.lineWidth = this.lineWidth;
    // ctx.strokeStyle = this.strokeColor;
    // ctx.stroke();
    this.active && this.drawActive();
  }
  move(step = {}) {
    super.move(step);
  }
  drawActive() {
    const { ctx } = this;
    ctx.strokeStyle = this.activeStyle;
    ctx.lineWidth = 2;

    ctx.stroke();
  }
  isPointInRegion(point = { x: 0, y: 0 }) {
    return (
      Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)) <
      this.radius
    );
  }
}
