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

function validatePlanetName(errors, name) {
  validateName(name, errors);
  validatePlanetNameLength(errors, name);
  validatePlanetNameCharacters(errors, name);
}

function validateName(name, errors) {
  if (!name || name.trim().length === 0) {
    errors.push("Le nom est requis ");
  }
}

function validatePlanetNameLength(errors, name) {
  if (!validator.isLength(name, { min: 3, max: 15 })) {
    errors.push("Le nom de la planète doit contenir entre 3 et 15 caractères.");
  }
}

function validatePlanetNameCharacters(errors, name) {
  if (!validator.isAlphanumeric(name, "fr-FR", { ignore: " -" })) {
    errors.push(
      "Le nom de la planète doit contenir uniquement des caractères alphanumériques, des espaces ou des tirets."
    );
  }
}
function validateTypePlanet(errors, type) {
  validateType(type, errors);
  validatePlanetType(errors, type);
}

function validateType(type, errors) {
  if (!type || type.trim().length === 0) {
    errors.push("Le type est requis.");
  }
}

function validatePlanetType(errors, type) {
  const validTypes = ["Rocheuse", "Gazeuse", "Géante glacée"];
  if (type !== "Rocheuse" && type !== "Gazeuse" && type !== "Géante glacée") {
    errors.push(
      `Le type de la planète doit être l'un des suivants : ${validTypes.join(
        ", "
      )}.`
    );
  }
}

module.exports = router;
