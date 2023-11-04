const buttons = document.querySelectorAll("button");

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
      document.location.replace("/story/continue");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", moveStory);
});
