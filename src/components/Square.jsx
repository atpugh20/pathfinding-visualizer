import React from "react";

export default function Square(props) {
  const squareID = props.x + "-" + props.y;
  return <div id={squareID} className="square"></div>;
}
