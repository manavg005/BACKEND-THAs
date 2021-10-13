require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  SQ_HOST: process.env.SQ_HOST,
  SQ_DIALECT: process.env.SQ_DIALECT,
  SQ_USER: process.env.SQ_USER,
  SQ_DATABASE: process.env.SQ_DATABASE,
  SQ_PASSWORD: process.env.SQ_PASSWORD,
  SQ_PORT: process.env.SQ_PORT,
  SECRET: process.env.SECRET,
};
