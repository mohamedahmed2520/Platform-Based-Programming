const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  message.innerText = "Authenticating...";
  message.style.color = "#00ff88";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      message.style.color = "red";
      message.innerText = data.errors?.[0]?.msg || "Login failed";
      return;
    }

    message.style.color = "#00ff88";
    message.innerText = data.message;

  } catch {
    message.style.color = "red";
    message.innerText = "Server unreachable";
  }
});
