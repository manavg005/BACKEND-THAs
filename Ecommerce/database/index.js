const { Sequelize } = require("sequelize");
const {
  SQ_HOST,
  SQ_DIALECT,
  SQ_USER,
  SQ_DATABASE,
  SQ_PASSWORD,
} = require("../config");

const sequelize = new Sequelize(
  SQ_DATABASE, //db name
  SQ_USER, //user name
  SQ_PASSWORD, //passsword
  {
    host: SQ_HOST,
    dialect: SQ_DIALECT,
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB CONNECTION ESTABLISHED");
  } catch (err) {
    console.error("DB CONNECTION FAILED");
  }
})();

module.exports = sequelize;
