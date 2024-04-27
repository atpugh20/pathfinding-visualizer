const selectedStart = [];
const selectedFinish = [];

export default function handleGridClick(e, grid) {
  const selector = document.querySelector(
    'input[name="selector"]:checked'
  ).value;

  // Get Clicked Coords from html ID
  const clickedCoordinates = e.target.id.split("-");
  clickedCoordinates[0] = Number(clickedCoordinates[0]);
  clickedCoordinates[1] = Number(clickedCoordinates[1]);

  switch (selector) {
    case "start":
      toggleStartNode(e, grid, clickedCoordinates);
      break;
    case "finish":
      toggleEndNode(e, grid, clickedCoordinates);
      break;
    case "wall":
      toggleWall(e, grid, clickedCoordinates);
      break;
    default:
      console.log("Node Selection Error");
  }
}

// Functions:

function toggleStartNode(e, grid, clickedCoordinates) {
  selectedStart.push({
    coordinates: clickedCoordinates,
    element: e.target,
  });

  e.target.classList.add("start-node");
  e.target.classList.remove("wall", "finish-node");
  const selectedNode = grid[clickedCoordinates[1]][clickedCoordinates[0]];
  selectedNode.isStart = true;
  selectedNode.isFinish = false;
  selectedNode.isWall = false;
  // Can only be one Start Node
  if (selectedStart.length === 2) {
    const oldCoord = selectedStart[0].coordinates;
    const oldNode = grid[oldCoord[1]][oldCoord[0]];
    const newCoord = selectedStart[1].coordinates;

    // When clicking same node
    if (newCoord[0] !== oldNode.x || newCoord[1] !== oldNode.y) {
      selectedStart[0].element.classList.remove("start-node");
      oldNode.isStart = false;
    }
    selectedStart.shift();
  }
}

function toggleEndNode(e, grid, clickedCoordinates) {
  selectedFinish.push({
    coordinates: clickedCoordinates,
    element: e.target,
  });

  e.target.classList.add("finish-node");
  e.target.classList.remove("wall", "start-node");
  const selectedNode = grid[clickedCoordinates[1]][clickedCoordinates[0]];
  selectedNode.isFinish = true;
  selectedNode.isStart = false;
  selectedNode.isWall = false;
  // Can only be one Finish Node
  if (selectedFinish.length === 2) {
    const oldCoord = selectedFinish[0].coordinates;
    const oldNode = grid[oldCoord[1]][oldCoord[0]];
    const newCoord = selectedFinish[1].coordinates;

    // When clicking same node
    if (newCoord[0] !== oldNode.x || newCoord[1] !== oldNode.y) {
      selectedFinish[0].element.classList.remove("finish-node");
      oldNode.isFinish = false;
    }
    selectedFinish.shift();
  }
}

function toggleWall(e, grid, clickedCoordinates) {
  e.target.classList.add("wall");
  e.target.classList.remove("start-node", "finish-node");
  const selectedNode = grid[clickedCoordinates[1]][clickedCoordinates[0]];
  selectedNode.isWall = true;
  selectedNode.isStart = false;
  selectedNode.isFinish = false;
}
