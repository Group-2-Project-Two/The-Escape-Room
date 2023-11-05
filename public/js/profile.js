const signupFormHandler = async function (event) {
  event.preventDefault();
  const usernameEl = document.querySelector("#newUsername");
  const passwordEl = document.querySelector("#inputPassword1");
  // console.log(usernameEl.value);
  // console.log(passwordEl.value);

  const response = await fetch("/", {
    method: "POST",
    body: JSON.stringify({
      userName: usernameEl.value.trim(),
      password: passwordEl.value.trim(),
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log("response", response);
  if (response.ok) {
    document.location.replace("/story");
  } else {
    alert("Failed to sign up. Please select a different username");
  }
};




document
  .querySelector("#createUser")
  .addEventListener("submit", signupFormHandler);
