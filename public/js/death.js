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