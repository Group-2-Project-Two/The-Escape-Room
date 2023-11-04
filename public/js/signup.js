const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#newUsername");
  const passwordEl = document.querySelector("#inputPassword1");
  console.log(usernameEl)
  console.log(passwordEl)

  const response = await fetch("/", {
    
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/story");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#createUser")
  .addEventListener("submit", signupFormHandler);

