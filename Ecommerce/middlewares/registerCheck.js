/**
 * @requires { email,password,name}
 * @description
 * security,performance,edge case
 * level 1
 * email,password valid
 * level 2
 * sql/js injection
 * level 3
 * database check for duplication
 * hashing password
 */

var { emailValidate, passwordValidate } = require("../utils/validations.js");
console.log("checks");

const registerCheckslvl1 = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword == password &&
    emailValidate(email) &&
    passwordValidate(password)
  )
    next();
  else return res.status(401).send("Level 1 check failed");
};

const registerCheckslvl2 = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  console.log(email);
  if (
    typeof email == String &&
    typeof password == String &&
    typeof confirmPassword == String &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword.length == password.length &&
    emailValidate(email) &&
    passwordValidate(password)
  )
    next();
  else return res.status(401).send("Level 2 check failed");
};

const registerCheckslvl3 = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email == String &&
    typeof password == String &&
    typeof confirmPassword == String &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword.length == password.length &&
    emailValidate(email) &&
    passwordValidate(password)
  )
    next();
  else return res.status(401).send("Level 3 check failed");
};

module.exports = { registerCheckslvl1, registerCheckslvl2, registerCheckslvl3 };
