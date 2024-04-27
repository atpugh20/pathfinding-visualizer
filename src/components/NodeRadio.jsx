import React from "react";

export default function NodeRadio() {
  return (
    <div className="nav-section">
      <input
        className="radio-button"
        type="radio"
        id="start"
        value="start"
        name="selector"
        defaultChecked
      />
      <label className="radio-label" htmlFor="start">
        First-Node
      </label>

      <input
        className="radio-button"
        type="radio"
        id="finish"
        value="finish"
        name="selector"
      />
      <label className="radio-label" htmlFor="finish">
        Last-Node
      </label>

      <input
        className="radio-button"
        type="radio"
        id="wall"
        value="wall"
        name="selector"
      />
      <label className="radio-label" htmlFor="wall">
        Wall-Nodes
      </label>
    </div>
  );
}
