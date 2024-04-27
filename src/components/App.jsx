import React from "react";
import Grid from "./Grid";
import Nav from "./Nav";
import createGrid from "../modules/createGrid";

export default function App() {
  const nodes = createGrid(30, 30);

  return (
    <div className="App">
      <Nav nodes={nodes} />
      <Grid nodes={nodes} />
    </div>
  );
}
