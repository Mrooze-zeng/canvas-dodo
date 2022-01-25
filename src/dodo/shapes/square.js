import Base from "./base";

export default class Square extends Base {
  constructor(options = {}) {
    super(options);
    const { width = 50, height = 50, at = { x: 0, y: 0 } } = options;
    this.width = width;
    this.height = height;
    this.at = at;
  }
  update(options = {}) {
    super.update(options);
    const { width = 50, height = 50, at = { x: 0, y: 0 } } = options;
    this.width = width;
    this.height = height;
    this.at = at;
  }
  draw(ctx = null) {
    super.draw(ctx);
    ctx.fillStyle = this.bgColor;
    ctx.fillRect(this.at.x, this.at.y, this.width, this.height);

    this.drawActive();
  }
  drawActive() {
    this.active &&
      super.drawActive([
        { x: this.at.x, y: this.at.y },
        { x: this.at.x + this.width, y: this.at.y },
        { x: this.at.x + this.width, y: this.at.y + this.height },
        { x: this.at.x, y: this.at.y + this.height },
      ]);
  }
  // moveBy(step = {}) {
  //   return super.move(step);
  // }
  // moveTo(point = {}) {
  //   return super.moveTo(point);
  // }
  isPointInRegion(point = { x: 0, y: 0 }) {
    return (
      point.x > this.at.x &&
      point.x < this.at.x + this.width &&
      point.y > this.at.y &&
      point.y < this.at.y + this.height
    );
  }
}
