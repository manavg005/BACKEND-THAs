const { emailValidate, passwordValidate } = require("../utils/validate");

const registerInitialChecks = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    password === confirmPassword &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    console.log("Initial Checks Passed");
    next();
  } else {
    res.send("Initial Checks Failed");
  }
};

module.exports = registerInitialChecks;
