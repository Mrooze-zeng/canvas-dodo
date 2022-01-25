export default class Base {
  type = this.constructor.name;
  id = this._uuid();
  eventListener = new Map();
  ctx = null;
  active = false;
  constructor({
    name = this.constructor.name,
    bgColor = "#ff0000",
    strokeColor = "#00ff00",
    textColor = "#ffa500",
    lineWidth = 5,
    activeStyle = "#59c7f9",
    at = { x: 0, y: 0 },
  } = {}) {
    this.name = name;
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.textColor = textColor;
    this.lineWidth = lineWidth;
    this.activeStyle = activeStyle;
    this.at = at;
  }
  _uuid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
  draw(ctx = null) {
    this.ctx = ctx;
    return this.ctx;
  }

  moveBy({ x = 0, y = 0 } = {}) {
    this.at.x += x;
    this.at.y += y;
    return this;
  }
  moveTo({ x = 0, y = 0 } = {}) {
    this.at.x = x;
    this.at.y = y;
    return this;
  }
  update({
    bgColor = this.bgColor,
    strokeColor = this.strokeColor,
    textColor = this.textColor,
    lineWidth = this.lineWidth,
  } = {}) {
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.textColor = textColor;
    this.lineWidth = lineWidth;
  }
  setActive(bool = false) {
    this.active = bool;
  }
  drawActive(points = []) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = this.activeStyle;
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      if (i === 0) {
        ctx.moveTo(point.x, point.y);
        continue;
      }
      ctx.lineTo(point.x, point.y);
    }
    ctx.closePath();
    ctx.stroke();
  }
  on(name = "", listener = function () {}) {
    this.eventListener.set(name, listener);
  }
  off(name = "") {
    this.eventListener.delete(name);
  }
  isPointInRegion() {
    return false;
  }
  trigger(name = "", event) {
    const fn = this.eventListener.get(name) || function () {};
    this.setActive(true);
    fn.call(this, event);
  }
}
