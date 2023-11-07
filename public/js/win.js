const homeButton = document.getElementById("home");

function movePage() {
    location.replace("/login")
}

homeButton.addEventListener("click", movePage)

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