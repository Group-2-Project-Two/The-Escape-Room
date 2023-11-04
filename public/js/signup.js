
const usernameEl = document.querySelector("#newUsername");
const passwordEl = document.querySelector("#inputPassword1");



const signupFormHandler = async function (event) {
  event.preventDefault();


  const response = await fetch("/", {
    method: "POST",
    body: JSON.stringify({
      userName: usernameEl.value,
      password: passwordEl.value,

    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log("response", response);
  if (response.ok) {
    document.location.replace("/story");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#createUser")
  .addEventListener("submit", signupFormHandler);
