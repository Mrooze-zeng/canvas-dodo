import Base from "./base";

export default class Polygon extends Base {
  constructor(options = {}) {
    super(options);
    const { points = [] } = options;
    this.points = points;
  }
  update(options = {}) {
    super.update(options);
    const { points = [] } = options;
    this.points = points;
  }
  draw(ctx = null) {
    super.draw(ctx);
    ctx.fillStyle = this.bgColor;
    ctx.beginPath();
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      if (i === 0) {
        ctx.moveTo(point.x, point.y);
        continue;
      }
      ctx.lineTo(point.x, point.y);
    }
    ctx.fill();

    this.drawActive();
  }
  move(step = { x: 0, y: 0 }) {
    this.points.map((p) => {
      p.x += step.x;
      p.y += step.y;
      return p;
    });
  }
  drawActive() {
    this.active && super.drawActive(this.points);
  }
  cross(x = { x: 0, y: 0 }, y = { x: 0, y: 0 }, z = { x: 0, y: 0 }) {
    return (y.x - x.x) * (z.y - x.y) - (z.x - x.x) * (y.y - x.y);
  }
  isPointInRegion(point = { x: 0, y: 0 }) {
    let wn = 0;

    this.points.forEach((a, i) => {
      const b = this.points[(i + 1) % this.points.length];
      if (a.y <= point.y) {
        if (b.y > point.y && this.cross(a, b, point) > 0) {
          wn += 1;
        }
      } else if (b.y <= point.y && this.cross(a, b, point) < 0) {
        wn -= 1;
      }
    });

    return wn !== 0;
  }
}
