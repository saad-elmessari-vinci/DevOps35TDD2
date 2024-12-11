const validator = require("validator");

class Main {
  validateName(name, errors) {
    if (!name || name.trim().length === 0) {
      errors.push("Le nom est requis");
    }
  }

  validatePlanetNameLength(errors, name) {
    if (name.length > 15) {
      errors.push(
        "Le nom de la planète doit etre plus petit que 16 caractères"
      );
    }
  }
}

module.exports = Main;
