export default function selectAlgorithm() {
  const dropdownButton = document.getElementById("chosen-alg");
  const algList = document.getElementById("alg-list");
  const algItems = Object.values(
    document.getElementsByClassName("dropdown-item")
  );
  algList.addEventListener("click", (e) => {
    if (algItems.includes(e.target))
      dropdownButton.textContent = e.target.textContent;
  });
}
