import React from "react";
import startSearch from "../modules/startSearch";
import clearBoard from "../modules/clearBoard";

export default function NavButtons(props) {
  const nodes = props.nodes;

  return (
    <div className="nav-section">
      <button className="find button" onClick={() => startSearch(nodes)}>
        Find Path
      </button>
      <button className="button" onClick={() => clearBoard(nodes)}>
        Clear Board
      </button>
    </div>
  );
}
