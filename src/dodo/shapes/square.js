import Base from "./base";

export default class Square extends Base {
  constructor(options = {}) {
    super(options);
    const { width = 50, height = 50, x = 0, y = 0 } = options;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
  update(options = {}) {
    super.update(options);
    const { width = 50, height = 50, x = 0, y = 0 } = options;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
  draw(ctx = null) {
    super.draw(ctx);
    ctx.fillStyle = this.bgColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.drawActive();
  }
  drawActive() {
    this.active &&
      super.drawActive([
        { x: this.x, y: this.y },
        { x: this.x + this.width, y: this.y },
        { x: this.x + this.width, y: this.y + this.height },
        { x: this.x, y: this.y + this.height },
      ]);
  }
  move(step = {}) {
    super.move(step);
  }
  isPointInRegion(point = { x: 0, y: 0 }) {
    return (
      point.x > this.x &&
      point.x < this.x + this.width &&
      point.y > this.y &&
      point.y < this.y + this.height
    );
  }
}
