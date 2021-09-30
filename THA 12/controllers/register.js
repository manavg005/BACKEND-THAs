const User = require("../models/mongo");
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    console.log(alreadyExists);
    if (alreadyExists) {
      res.json("email already exists");
    } else {
      const newUser = new User({
        email: email,
        password: password,
      });

      const savedUser = await newUser.save();
      res.json(savedUser);
    }
  } catch {
    console.error("Something  went wrong!!");
  }
};

module.exports = register;
