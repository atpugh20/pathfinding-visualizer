export default function clearBoard(nodes) {
  const squares = document.getElementsByClassName("square");
  for (let square of squares) {
    square.classList.remove(
      "start-node",
      "finish-node",
      "wall",
      "shortest-path",
      "all-paths"
    );
  }
  for (let row of nodes) {
    for (let node of row) {
      node.isStart = false;
      node.isFinish = false;
      node.distance = Infinity;
      node.isVisited = false;
      node.isWall = false;
      node.previousNode = null;
    }
  }
}
