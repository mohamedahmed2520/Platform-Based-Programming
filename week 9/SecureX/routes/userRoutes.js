const express = require("express");
const { validateLogin } = require("../validators/expressValidator");

const router = express.Router();

router.post("/login", validateLogin, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login successful ✔ Welcome back hacker"
  });
});

module.exports = router;
