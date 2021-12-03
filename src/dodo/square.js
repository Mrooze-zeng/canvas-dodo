import Base from "./base";

export default class Square extends Base {
  constructor(options = {}) {
    super(options);
  }
  draw(ctx = null) {
    super.draw(ctx);
    ctx.fillStyle = this.bgColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
