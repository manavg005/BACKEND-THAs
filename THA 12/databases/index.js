const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "manav", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Connection Established  with DB.");
  } catch {
    console.error("Unable to connect to DB.");
  }
})();

module.exports = sequelize;
