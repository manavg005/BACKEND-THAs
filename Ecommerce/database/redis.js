const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");

const RedisStore = connectRedis(session);
const RedisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

RedisClient.on("error", (err) => {
  console.error(err);
});

RedisClient.on("connect", () => {
  console.log("Redis Connected");
});

module.exports = {
  RedisClient,
  RedisStore,
  session,
};
