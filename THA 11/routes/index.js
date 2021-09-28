var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires {email, firstName, lastName, password, confirmPassword} - req.body
 * @description
 * level - 1
 * Security, performance and edge cases
 * email validate
 * password validate
 * password == confirmPassword
 * level - 2
 * JS / SQL
 * level - 3
 * chack if email is already in use
 * password hashing
 * email lowercase
 * save
 */

router.post('/register')

module.exports = router;
