const buttons = document.querySelectorAll("button");

function storySwitch(selected) {
  if (selected.text === "Quit while you're ahead?") {
    location.replace("/winner");
  } else if (selected.text === "Give up?") {
    location.replace("/death");
  } else {
    document.location.replace("/story/continue");
  }
}

const moveStory = async function (event) {
  const selected = { id: event.target.id, text: event.target.innerHTML };
  if (
    selected.text === "Give up?" ||
    selected.text === "Quit while you're ahead?"
  ) {
    storySwitch(selected);
  } else {
    try {
      const response = await fetch("/story/continue", {
        method: "POST",
        body: JSON.stringify({ data: selected }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        storySwitch(selected);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", moveStory);
});

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
