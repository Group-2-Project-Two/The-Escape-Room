const form = document.getElementById("loginUser");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the form from submitting
  const username = document.getElementById("returnUsername").value;
  const password = document.getElementById("returnPassword").value;

  console.log("Username:", username);
  console.log("Password:", password);

  const response = await fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      userName: username,
      password: password,
    }),

    headers: { "Content-Type": "application/json" },
  });
  console.log("response", response);
  if (response.ok) {
    document.location.replace("/story");
  } else {
    alert("login failed");
  }
});
