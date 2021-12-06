import { useEffect, useRef } from "react";
import Dodo from "./dodo";
import Circle from "./dodo/shapes/circle";
import Polygon from "./dodo/shapes/polygon";
import Square from "./dodo/shapes/square";

function App() {
  const ref = useRef();
  const dodo = new Dodo({
    width: 800,
    height: 500,
  });
  const s1 = new Square({ name: "s1", width: 50 });
  const s2 = new Square({ name: "s2", x: 130, y: 120, width: 50 });
  const s3 = new Square({ name: "s3", x: 230, y: 120 });
  const c1 = new Circle({
    name: "c1",
    bgColor: "green",
    x: 130,
    y: 120,
  });

  const p1 = new Polygon({
    name: "polygon",
    points: [
      { x: 0, y: 0 },
      { x: 100, y: 400 },
      { x: 100, y: 500 },
      { x: 400, y: 400 },
      { x: 700, y: 500 },
      { x: 300, y: 500 },
      { x: 300, y: 400 },
    ],
  });

  s1.on("click", (event) => {
    console.log("s1 clicked....", event, dodo.shapes);
  });
  s2.on("click", function (event) {
    console.log("s2 clicked....", this, dodo.shapes);
  });

  c1.on("click", (event) => {
    event.stopPropagation();
    console.log("c1 clicked....");
  });

  p1.on("click", (event) => {
    console.log("=------");
  });

  const handleClick = function () {
    console.log(dodo.shapes);
  };

  useEffect(() => {
    dodo.mount(ref.current);
    dodo.addAll(s2, s1, s3, c1, p1);
    console.log(dodo.shapes);
  });

  return (
    <div ref={ref}>
      hello world
      <button onClick={handleClick}>delete</button>
    </div>
  );
}

export default App;
