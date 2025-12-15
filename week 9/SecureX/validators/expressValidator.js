const { body, validationResult } = require("express-validator");

exports.validateLogin = [
  body("email")
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .isLength({ min: 6, max: 12 })
    .withMessage("Password must be 6–12 characters")
    .custom((value) => {
      const forbidden = /['"<>\-\-;]/;
      if (forbidden.test(value)) {
        throw new Error("Forbidden characters detected in password");
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];
