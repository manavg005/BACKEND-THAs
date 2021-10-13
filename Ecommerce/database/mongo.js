const mongoose = require("mongoose");
var mongodb = "mongodb://127.0.0.1/mongo_database";

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb Connection failed"));
