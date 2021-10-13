var express = require("express");
var { register, registerSuperAdmin } = require("../controllers/register");
const check = require("../middlewares/checkSuperAdmin");
var router = express.Router();
const {
  registerCheckslvl1,
  registerCheckslvl2,
  registerCheckslvl3,
} = require("../middlewares/registerCheck");
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/redis", function (req, res, next) {
  const sess = req.session;
  sess.username = "Aditya";
  console.log(req.session.username);
});

router.post("/register", registerCheckslvl1, register);
router.post("/register-superadmin", registerCheckslvl1, registerSuperAdmin);
router.get("/superadmin", check);

module.exports = router;
