const validator = require("validator");

class Main {
  validateName(name, errors) {
    if (!name || name.trim().length === 0) {
      errors.push("Le nom est requis");
    }
  }

  validatePlanetNameLength(errors, name) {
    if (!validator.isLength(name, { min: 3, max: 15 })) {
      errors.push(
        "Le nom de la planète doit contenir entre 3 et 15 caractères"
      );
    }
  }
}

module.exports = Main;
