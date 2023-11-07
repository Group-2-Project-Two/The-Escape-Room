const buttons = document.querySelectorAll("button");

function storySwitch(selected) {
  console.log("selected text: ", selected.text)
  console.log("made it to story switch")
  if (selected.text === "Play Again?") {
    console.log("made it to place again")
    document.location.replace("/story")
    // change this to STORY 2
  } else if (selected.text === "Quit while you're ahead?") {
    console.log("made it to win")
    location.replace("http://localhost:3001/winner")
  } else if (selected.text === "Give up?") {
    console.log("made it to death")
    location.replace("http://localhost:3001/death")
  } else {
    document.location.replace("/story/continue");
  }
}

const moveStory = async function (event) {
  const selected = {id: event.target.id, text: event.target.innerHTML};
  console.log("selects: ", selected)
  try {
    const response = await fetch('/story/continue', {
      method: "POST",
      body: JSON.stringify({data: selected}),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Response ok! Would move page along now")
      const result = await response.json()
      // const storyType = result.type 
      storySwitch(selected)
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", moveStory);
});
