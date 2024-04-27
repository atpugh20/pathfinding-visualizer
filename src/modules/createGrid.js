export default function createGrid(cols, rows) {
  const nodes = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push({
        x: col,
        y: row,
        isStart: false,
        isFinish: false,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
      });
    }
    nodes.push(currentRow);
  }
  return nodes;
}
