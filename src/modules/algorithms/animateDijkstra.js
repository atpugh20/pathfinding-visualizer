export default async function animateDijkstra(shortestPath, allPaths) {
  await animateAllPaths(allPaths);
  animateShortestPath(shortestPath);
}

async function animateAllPaths(allPaths) {
  let element;
  for (let node of allPaths) {
    element = document.getElementById(`${node.x}-${node.y}`);
    element.classList.add("all-paths");
    await new Promise((r) => setTimeout(r, 10));
  }
}

async function animateShortestPath(shortestPath) {
  let element;
  for (let node of shortestPath) {
    element = document.getElementById(`${node.x}-${node.y}`);
    element.classList.add("shortest-path");
    element.classList.remove("all-paths");
    await new Promise((r) => setTimeout(r, 50));
  }
}
