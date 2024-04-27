import React, { useEffect } from "react";
import Square from "./Square";
import handleGridClick from "../modules/handleGridClick";

export default function Grid(props) {
  const nodes = props.nodes;

  useEffect(() => {
    const grid = document.getElementById("grid");
    // Mouse Click
    grid.addEventListener("mousedown", (e) => handleGridClick(e, nodes));
    // Mouse Hold
    grid.addEventListener("mouseover", (e) => {
      if (e.buttons === 1) {
        handleGridClick(e, nodes);
      }
    });
  });

  return (
    <div className="grid" id="grid" draggable="false">
      {nodes.map((row, rowIndex) => (
        <div className="row" id={"row" + rowIndex} key={rowIndex}>
          {row.map((square, squareIndex) => (
            <Square
              key={`${square.x},${square.y}`}
              id={`${square.x},${square.y}`}
              x={square.x}
              y={square.y}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
