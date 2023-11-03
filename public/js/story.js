const buttons = document.querySelectorAll("button");

const moveStory = async function (event) {
  const selected = event.target;
  if (selected.matches("#choiceA")) {
    console.log(selected.textContent);
    await sendSelectionToBackend(selected.textContent);
  } else if (selected.matches("#choiceB")) {
    console.log(selected.textContent);
    await sendSelectionToBackend(selected.textContent);
  }
};

const sendSelectionToBackend = async (selection) => {
  try {
    const response = await fetch("/story/continue", {
      method: "POST",
      body: JSON.stringify({ selection }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/story/continue");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", moveStory);
});
