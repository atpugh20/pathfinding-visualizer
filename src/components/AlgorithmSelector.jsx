import React, { useEffect } from "react";
import handleDropdown from "../modules/handleDropdown";
import selectAlgorithm from "../modules/selectAlgorithm";

export default function AlgorithmSelector() {
  useEffect(() => {
    handleDropdown();
    selectAlgorithm();
  });

  return (
    <div name="alg" id="alg-select" className="dropdown-button">
      <p id="dropdown-button-text">
        <span className="chosen-alg" id="chosen-alg">
          Dijkstra
        </span>
        <span className="down-arrow">▼</span>
      </p>
      <ul id="alg-list" className="dropdown hidden">
        <li className="dropdown-item">Dijkstra</li>
        <li className="dropdown-item">N/A</li>
        <li className="dropdown-item">N/A</li>
        <li className="dropdown-item">N/A</li>
        <li className="dropdown-item">N/A</li>
      </ul>
    </div>
  );
}
