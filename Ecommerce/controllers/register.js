// const User = require("../models/user");
const User = require("../models/mongo");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    //for psql
    const alreadyEmail = await User.findOne({ where: { email } });
    //for mongo
    // const alreadyEmail = await User.findOne({ where: { email } }).exec();

    if (alreadyEmail) {
      res.status(401).send("Email already exists");
    }
    let saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: fullName,
    });
    const savedUser = await newUser.save();
    return res.status(201).send({ "User Registered": savedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).send("User Registeration failed");
  }
};

const registerSuperAdmin = async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    //for psql
    const alreadyEmail = await User.findOne({ where: { email } });
    //for mongo
    // const alreadyEmail = await User.findOne({ where: { email } }).exec();

    if (alreadyEmail) {
      res.status(401).send("Email already exists");
    }
    let saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: fullName,
      role: "superadmin",
    }).exec();
    const savedUser = await newUser.save();
    req.session.User = savedUser;
    return res.status(201).send({ "User Registered": savedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).send("User Registeration failed");
  }
};

module.exports = { register, registerSuperAdmin };
