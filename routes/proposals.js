const express = require("express");
const router = express.Router();

const Planet = require("../models/Planet.js");

router.post("/", (req, res, next) => {
  const errors = [];
  const planetData = parsePlanetData(req.body);
  if (isPresent(planetData)) {
    isPresentCase(errors, req, res);
  } else {
    //is not present case
  }
});

function parsePlanetData(data) {
  return {
    name: data.name,
    type: data.type,
    size: parseFloat(data.size),
    mass: parseFloat(data.mass),
    density: parseFloat(data.density),
    atm_composition: data.atm_composition,
  };
}

function isPresent(planetData) {
  const planet = Planet.findByName(planetData.name);
  if (planet) {
    return true;
  }
  return false;
}

function isPresentCase(errors, req, res) {
  errors.push("La planète est déjà présente");
  req.session.errors = errors;
  res.redirect("/planets");
}

module.exports = router;
