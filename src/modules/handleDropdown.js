// Handles hiding and showing the Alg-Dropdown-Menu

export default function handleDropdown() {
  const algSelect = document.getElementById("alg-select");
  const algList = document.getElementById("alg-list");
  const algItems = document.getElementsByClassName("dropdown-item");

  window.addEventListener("click", (e) => {
    if (algSelect.contains(e.target)) {
      if (dropIsHidden(algList)) {
        showDrop(algList, algItems);
      } else {
        hideDrop(algList, algItems);
      }
    } else {
      hideDrop(algList, algItems);
    }
  });

  window.onclick = (e) => {};
}

// Functions

function dropIsHidden(algList) {
  if (
    algList.classList.contains("hidden") ||
    algList.classList.contains("drop-hide")
  ) {
    return true;
  } else {
    return false;
  }
}

function showDrop(algList, algItems) {
  algList.classList.remove("hidden");
  algList.classList.remove("drop-hide");
  algList.classList.add("drop-show");
  for (let item of algItems) {
    item.classList.remove("hidden");
    item.classList.add("item-show");
  }
}

function hideDrop(algList, algItems) {
  algList.classList.remove("drop-show");
  algList.classList.add("drop-hide");
  for (let item of algItems) {
    item.classList.remove("item-show");
    item.classList.add("hidden");
  }
}
