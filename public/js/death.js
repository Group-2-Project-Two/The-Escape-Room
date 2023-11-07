const againButton = document.getElementById("again")
const leaveButton = document.getElementById("leave")

function moveToAgain() {
    location.replace("/story")
}

function leavePage() {
    location.replace("/")
}

againButton.addEventListener("click", moveToAgain)
leaveButton.addEventListener("click", leavePage)

const div = document.querySelector(".text-typewriter");
const innerHTML = div.innerHTML;
const text = innerHTML;

function textTypeEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }
  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => textTypeEffect(element, text, i + 1), 60);
}

textTypeEffect(div, text);