import animateDijkstra from "./algorithms/animateDijkstra";
import dijkstra, { getShortestPath } from "./algorithms/dijkstra";

export default function startSearch(props) {
  const grid = props;
  const chosenAlg = document
    .getElementById("chosen-alg")
    .textContent.toLowerCase();

  switch (chosenAlg) {
    case "dijkstra":
      const paths = dijkstra(grid);
      if (paths.length > 0) {
        const shortestPath = getShortestPath(paths);
        animateDijkstra(shortestPath, paths);
      }

      break;
    default:
      console.log("Please choose an algorithm.");
  }
}
