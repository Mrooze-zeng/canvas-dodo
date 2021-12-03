import { useEffect, useRef } from "react";
import Dodo from "./dodo";
import Circle from "./dodo/circle";
import Square from "./dodo/square";

function App() {
  const ref = useRef();
  const dodo = new Dodo({
    width: 800,
    height: 500,
  });
  const s1 = new Square({ name: "s1", width: 50, height: 50 });
  const s2 = new Square({ name: "s2", x: 130, y: 120, width: 50 });
  const s3 = new Square({ name: "s3", x: 230, y: 120 });
  const c1 = new Circle({
    name: "c1",
    bgColor: "green",
    x: 130,
    y: 120,
    width: 25,
    lineWidth: 0.1,
  });

  s1.on("click", (event) => {
    console.log("s1 clicked....", event);
  });
  s2.on("click", (event) => {
    console.log("s2 clicked....");
  });

  c1.on("click", (event) => {
    event.stopPropagation();
    console.log("c1 clicked....");
  });

  const handleClick = function () {
    s2.update({ x: 120 });
    dodo.redraw();
  };

  useEffect(() => {
    dodo.mount(ref.current);
    dodo.addAll(s2, s1, s3, c1);
  });

  return (
    <div ref={ref}>
      hello world
      <button onClick={handleClick}>delete</button>
    </div>
  );
}

export default App;
