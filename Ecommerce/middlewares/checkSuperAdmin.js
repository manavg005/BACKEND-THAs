const check = (req, res, next) => {
  if (req.session.User === "superadmin") next();
  else res.status(401).send("Not SuperAdmin");
};

module.exports = check;
