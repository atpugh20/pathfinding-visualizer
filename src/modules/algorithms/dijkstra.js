export default function dijkstra(originalGrid) {
  const visitedNodes = [];
  const grid = updateGrid(originalGrid);
  const unvisitedNodes = getAllNodes(grid);
  const startNode = getStartNode(grid);
  if (startNode) {
    startNode.distance = 0;
    while (unvisitedNodes.length) {
      sortNodesByDistance(unvisitedNodes);
      const currentNode = unvisitedNodes.shift();

      if (currentNode.isWall) continue;
      if (currentNode.distance === Infinity) return visitedNodes;
      currentNode.isVisited = true;
      visitedNodes.push(currentNode);
      if (currentNode.isFinish) return visitedNodes;

      const neighbors = getNeighbors(currentNode, grid);
      updateNeighbors(currentNode, neighbors);
    }
  } else {
    console.log("No start node set!");
    return visitedNodes;
  }
  console.log("No finish node set!");
  return visitedNodes;
}

function updateGrid(grid) {
  const newGrid = [];
  for (let row of grid) {
    const currentRow = [];
    for (let node of row) {
      const newNode = {};
      for (let key in node) {
        newNode[key] = node[key];
      }
      currentRow.push(newNode);
    }
    newGrid.push(currentRow);
  }
  return newGrid;
}

function getAllNodes(grid) {
  const allNodes = [];
  for (let row of grid) {
    for (let node of row) {
      allNodes.push(node);
    }
  }
  return allNodes;
}

function getStartNode(grid) {
  var startNode = false;
  for (let row of grid) {
    for (let node of row) {
      if (node.isStart) {
        startNode = node;
        return startNode;
      }
    }
  }
  return startNode;
}

function sortNodesByDistance(nodes) {
  nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function getNeighbors(currentNode, grid) {
  const neighbors = [];
  const x = currentNode.x;
  const y = currentNode.y;
  const cols = grid[0].length;
  const rows = grid.length;

  if (x > 0) neighbors.push(grid[y][x - 1]);
  if (x < rows - 1) neighbors.push(grid[y][x + 1]);

  if (y > 0) neighbors.push(grid[y - 1][x]);
  if (y < cols - 1) neighbors.push(grid[y + 1][x]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

function updateNeighbors(currentNode, neighbors) {
  for (let neighbor of neighbors) {
    neighbor.distance = currentNode.distance + 1;
    neighbor.previousNode = currentNode;
  }
}

function getShortestPath(visitedNodes) {
  const shortestPath = [];
  var moreNodes = true;
  var node = visitedNodes[visitedNodes.length - 1];

  while (moreNodes) {
    if (node.isStart) moreNodes = false;
    shortestPath.push(node);
    node = node.previousNode;
  }

  return shortestPath;
}

export { getShortestPath };
