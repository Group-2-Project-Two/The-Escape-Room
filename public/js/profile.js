const signupFormHandler = async function (event) {
  event.preventDefault();
  const usernameEl = document.querySelector("#newUsername");
  const passwordEl = document.querySelector("#inputPassword1");
  // console.log(usernameEl.value);
  // console.log(passwordEl.value);

  const response = await fetch("/signIn", {
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

const userLogin = async function (event) {
  event.preventDefault();
  const returnUsername = document.getElementById("returnUsername");
  const returnPassword = document.getElementById("returnPassword");

  // console.log(returnUsername.value);
  // console.log(returnPassword.value);

  if (returnUsername && returnPassword) {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        userName: returnUsername.value,
        password: returnPassword.value,
      }),

      headers: { "Content-Type": "application/json" },
    });
    console.log("response", response);
    if (response.ok) {
      document.location.replace("/story");
    } else {
      alert("login failed");
    }
  }
};

document.querySelector("#returnUser").addEventListener("submit", userLogin);

document
  .querySelector("#createUser")
  .addEventListener("submit", signupFormHandler);
