const buttons = document.querySelectorAll("button");

const moveStory = async function (event) {
  const selected = { id: event.target.id, text: event.target.innerHTML };
  console.log("selects: ", selected);
  try {
    const response = await fetch("/story/continue", {
      method: "POST",
      body: JSON.stringify({ data: selected }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Response ok! Would move page along now");
      document.location.replace("/story/continue");
    }
  } catch (error) {
    console.error("Error:", error);
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

  setTimeout(() => textTypeEffect(element, text, i + 1), 50);
}

textTypeEffect(div, text);
