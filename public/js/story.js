// when the page first loads, we want first story section to show

// when user clicks choice button, next story section/choices loads

// const choiceAButton = document.getElementById("choiceA")
// const choiceBButton = document.getElementById("choiceB")

// choiceAButton.addEventListener("click", function() {
//     console.log("choice A clicked")
// })

// choiceBButton.addEventListener("click", function() {
//     console.log("choice B clicked")
// })
const moveStory = async function(event) {
    var selected = event.target
    if (selected.matches('#choiceA')) {
        console.log("choice A")
    } else {
        console.log("choice B")
    }
}

document.querySelector('button').addEventListener('click', moveStory)