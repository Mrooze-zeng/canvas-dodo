export default class Base {
  id = this._uuid();
  eventListener = new Map();
  ctx = null;
  constructor({
    name = "base",
    bgColor = "#ff0000",
    strokeColor = "#00ff00",
    textColor = "#ffa500",
    lineWidth = 5,
    x = 0,
    y = 0,
    radius = 50,
    width = 50,
    height = 50,
    points = [],
  } = {}) {
    this.name = name;
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.textColor = textColor;
    this.lineWidth = lineWidth;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.width = width;
    this.height = height;
    this.points = points;
  }
  _uuid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
  draw(ctx = null) {
    this.ctx = ctx;
    return this.ctx;
  }
  update({
    bgColor = this.bgColor,
    strokeColor = this.strokeColor,
    textColor = this.textColor,
    lineWidth = this.lineWidth,
    x = this.x,
    y = this.y,
    radius = this.radius,
    width = this.width,
    height = this.height,
    points = this.points,
  } = {}) {
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.textColor = textColor;
    this.lineWidth = lineWidth;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.width = width;
    this.height = height;
    this.points = points;

    // this.draw(this.ctx);
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
    const { point } = event.data;
    const fn = this.eventListener.get(name) || function () {};
    this.isPointInRegion(point) && fn(event);
  }
}
