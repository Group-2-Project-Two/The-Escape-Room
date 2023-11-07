const button = document.querySelectorAll("button");

function movePage() {
    location.replace("/")
}

button.addEventListener("click", movePage)