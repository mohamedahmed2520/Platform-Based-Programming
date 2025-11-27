const express = require("express");
const { PrismaClient } = require("@prisma/client");
const path = require("path");

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Show users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    
    let html = `
      <h1 style="font-family:Arial;">Saved Users</h1>
      <a href="/" style="font-size:18px;">⬅ Back</a>
      <br><br>
      <table border="1" cellpadding="10" style="border-collapse:collapse;font-family:Arial;">
        <tr style="background:#222;color:#fff;">
          <th>ID</th><th>Name</th><th>Email</th>
        </tr>
    `;

    users.forEach(u => {
      html += `
        <tr>
          <td>${u.id}</td>
          <td>${u.name}</td>
          <td>${u.email}</td>
        </tr>
      `;
    });

    html += "</table>";

    res.send(html);
  } catch (err) {
    res.send("❌ Error: " + err.message);
  }
});

// Save user
app.post("/submit", async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await prisma.user.create({
      data: { name, email }
    });

    res.send(`
      <h2>User Added Successfully!</h2>
      <p>ID: ${user.id}</p>
      <a href="/" style="color:blue;">Back</a>
      <br><br>
      <a href="/users" style="color:green;">View Users</a>
    `);
  } catch (err) {
    res.send("❌ Error: " + err.message);
  }
});

// Start server
app.listen(3000, () => console.log("🚀 Server running: http://localhost:3000"));
