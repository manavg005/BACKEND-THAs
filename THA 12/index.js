const express = require("express");
const app = express();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "amit",
  port: 5432,
});

const registerInitialChecks = require("./middlewares/registerInitialChecks");
const register = require("./controllers/register");
const { RedisStore, redisClient, session } = require("./databases/redis");

require("./databases/mongo");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "secret$%123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    },
  })
);

// app.get("/", (req, res) => {
//   pool.query('SELECT * FROM "Users";', (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.status(200).json(result.rows);
//   });
// });

app.get("/", (req, res) => {
  const sess = req.session;
  sess.username = "amit";
  res.json("user saved");
});

app.get("/test", (req, res) => {
  console.log(req.session.username);
  res.json(req.session.username);
});

app.post("/register", register);

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server started on port 3000");
});
