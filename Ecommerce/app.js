var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const { RedisClient, RedisStore, session } = require("./database/redis");
const passport = require("passport");
require("./database/mongo");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    store: new RedisStore({ client: RedisClient }),
    secret: "ASDWASDW123@",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    },
  })
);

app.use(passport.initialize());
require("./middlewares/passport")(passport);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/passport", require("./routes/passport"));
app.use("/products", require("./routes/products"));
app.use("/stream", require("./routes/stream"));
app.use("/stripe", require("./routes/stripe"));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
