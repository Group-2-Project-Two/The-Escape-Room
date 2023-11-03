const moveStory = async function (event) {
  const selected = event.target;
  if (selected.matches("#choiceA")) {
    console.log("choice A");
    await sendSelectionToBackend("A");
  } else if (selected.matches("#choiceB")) {
    console.log("choice B");
    await sendSelectionToBackend("B");
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
