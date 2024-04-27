export default function handleSelector() {
  const radioButtons = document.getElementsByClassName("radio-button");
  const radioLabels = document.getElementsByClassName("radio-label");
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioLabels[i].classList.add("selected");
    } else {
      radioLabels[i].classList.remove("selected");
    }
  }
}
