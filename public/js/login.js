const userLogin = async function (event) {
  event.preventDefault();
  const returnUsername = document.getElementById("returnUsername");
  const returnPassword = document.getElementById("returnPassword");

  console.log(returnUsername.value);
  console.log(returnPassword.value);

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
