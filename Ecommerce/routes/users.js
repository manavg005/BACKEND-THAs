var express = require("express");
var router = express.Router();
const Pool = require("pg").Pool;
const {
  SQ_HOST,
  SQ_PORT,
  SQ_USER,
  SQ_DATABASE,
  SQ_PASSWORD,
} = require("../config");

const pool = new Pool({
  user: SQ_USER,
  database: SQ_DATABASE,
  host: SQ_HOST,
  password: SQ_PASSWORD,
  port: SQ_PORT,
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  pool.query(
    'select * from "Users" where id=$1',
    [req.query.id],
    (err, resp) => {
      if (err) console.log(err);
      else res.status(200).json(resp);
    }
  );
  // res.send("respond with a resource");
});

module.exports = router;
