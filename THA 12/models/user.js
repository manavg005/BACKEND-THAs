const { DataTypes } = require("sequelize");

const sequelize = require("../databases/index");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
