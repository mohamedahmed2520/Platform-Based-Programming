require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

mongoose.connect(process.env.MONGODB_URI);

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
  })
);

(async () => {
  await User.deleteMany();

  await User.create([
    {
      name: "Admin",
      email: "admin@test.com",
      password: await bcrypt.hash("admin123", 10),
      role: "admin",
    },
    {
      name: "Member",
      email: "member@test.com",
      password: await bcrypt.hash("member123", 10),
      role: "member",
    },
  ]);

  console.log("Seed complete ✅");
  process.exit();
})();
