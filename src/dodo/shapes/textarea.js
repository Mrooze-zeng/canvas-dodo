import Polygon from "./polygon";

export default class Textarea extends Polygon {
  constructor({
    width = 100,
    height = 25,
    at = { x: 0, y: 0 },
    name = "",
  } = {}) {
    super({
      name: name,
      points: [
        at,
        { x: at.x + width, y: at.y },
        { x: at.x + width, y: at.y + height },
        { x: at.x, y: at.y + height },
      ],
    });
  }
}
