const express = require("express");
const router = express.Router();

const User = require("../models/User.js");
const Planet = require("../models/Planet.js");
const Proposal = require("../models/Proposal.js");

router.get("/", (req, res, next) => {
  if (req.session.login) {
    const user = User.find(req.session.login);
    const planetsTable = Planet.list();
    const proposalsTable = Proposal.list();
    res.render("planets/index", {
      user,
      planetsTable,
      proposalsTable,
      errors: req.session.errors,
    });
  } else {
    res.redirect("/users");
  }
  req.session.errors = null;
});

module.exports = router;
