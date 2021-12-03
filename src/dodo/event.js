export default class CanvasEvent {
  constructor({ type = "event", data = {} } = {}) {
    this.type = type;
    this.data = data;
    this.isStopPropagation = false;
  }
  stopPropagation() {
    this.isStopPropagation = true;
  }
}
