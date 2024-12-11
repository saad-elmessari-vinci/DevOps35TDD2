const express = require("express");
const router = express.Router();

const Planet = require("../models/Planet.js");

router.post("/", (req, res, next) => {
  const planetData = parsePlanetData(req.body);
  if (isPresent(planetData)) {
    //is present case
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

module.exports = router;