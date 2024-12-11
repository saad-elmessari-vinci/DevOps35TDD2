const express = require("express");
const router = express.Router();

const Proposal = require("../models/Proposal.js");
const User = require("../models/User.js");
const Planet = require("../models/Planet.js");

router.post("/", (req, res, next) => {
  const errors = [];
  const planetData = parsePlanetData(req.body);
  if (isPresent(planetData)) {
    isPresentCase(errors, req, res);
  } else {
    return isNotPresentCase(planetData, errors, req, res);
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

function isNotPresentCase(planetData, errors, req, res) {
  validateData(planetData, errors);
  if (errors.length == 0) {
    const user = User.find(req.session.login);
    Proposal.add({ ...planetData, id: user.id_user });
  } else {
    req.session.errors = errors;
  }
  return res.redirect("/planets");
}

function validateData(data, errors) {
  validatePlanetName(errors, data.name);
  validateTypePlanet(errors, data.type);
  validateSizePlanet(errors, data.size);
  validateMassPlanet(errors, data.mass);
  validateDensityPlanet(errors, data.density);
  validateAtmosphereCompositionLength(errors, data.atm_composition);
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

function validateSizePlanet(errors, size) {
  validateSize(size, errors);
  validatePlanetSize(errors, size);
}

function validateSize(size, errors) {
  if (isNaN(size) || size < 0) {
    errors.push("Valeur de la taille est invalide");
  }
}

function validatePlanetSize(errors, size) {
  if (!validator.isFloat(size.toString(), { min: 0.1, max: 100 })) {
    errors.push(
      "La taille de la planète doit être u nombre 0.1 et 100 rayons terrestres."
    );
  }
}
function validateMassPlanet(errors, mass) {
  validateMass(mass, errors);
  validatePlanetMass(errors, mass);
}

function validateMass(mass, errors) {
  if (isNaN(mass) || mass < 0) {
    errors.push("Valeur de la masse invalide ");
  }
}

function validatePlanetMass(errors, mass) {
  if (!validator.isFloat(mass.toString(), { min: 0.001, max: 5000 })) {
    errors.push(
      "La masse de la planète doit être un nombre entre 0.001 et 5000 masses terrestres."
    );
  }
}
function validateDensityPlanet(errors, density) {
  validateDensity(density, errors);
  validatePlanetDensity(errors, density);
}

function validateDensity(density, errors) {
  if (isNaN(density) || density < 0) {
    errors.push("Valeur de la densité invalide");
  }
}
function validatePlanetDensity(errors, density) {
  if (!validator.isFloat(density.toString(), { min: 0.5, max: 20 })) {
    errors.push(
      "La densité de la planète doit être un nombre entre 0.5 et 20 g/cm³."
    );
  }
}

function validateAtmosphereCompositionLength(errors, atmosphere_composition) {
  if (!validator.isLength(atmosphere_composition, { min: 5, max: 200 })) {
    errors.push(
      "La composition de l'atmosphère doit contenir entre 5 et 200 caractères."
    );
  }
}

module.exports = router;
