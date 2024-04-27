import React, { useEffect } from "react";
import handleSelector from "../modules/handleSelector";
import NavButtons from "./NavButtons";
import AlgorithmSelector from "./AlgorithmSelector";
import NodeRadio from "./NodeRadio";

export default function Nav(props) {
  const nodes = props.nodes;
  useEffect(() => {
    handleSelector();
    const radioButtons = document.getElementsByClassName("radio-button");
    for (let button of radioButtons) {
      button.addEventListener("change", () => {
        handleSelector();
      });
    }
  });

  return (
    <div className="nav">
      <AlgorithmSelector />
      <NodeRadio />
      <NavButtons nodes={nodes} />
    </div>
  );
}
