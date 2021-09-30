const mongoose = require("mongoose");

const mongodb =
  "mongodb+srv://Amit:amit@cluster0.76p0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("connect", () => {
  console.log("Connected to mongodb");
});

db.on("error", console.error.bind(console, "Mongodb connection error"));
