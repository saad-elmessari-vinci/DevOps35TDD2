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
  validatePlanetNameCharacters(errors, name) {
    if (!validator.isAlphanumeric(name, "fr-FR", { ignore: " -" })) {
      errors.push(
        "Le nom de la planète doit contenir uniquement des caractères aplhanumériques, des espaces ou des tirets."
      );
    }
  }

  validateType(type, errors) {
    if (!type || type.trim().length === 0) {
      errors.push("Le type est requis.");
    }
  }

  validatePlanetType(errors, type) {
    const validTypes = ["Rocheuse", "Gazeuse", "Géante glacée"];
    if (type !== "Rocheuse" && type !== "Gazeuse" && type !== "Géante glacée") {
      errors.push(
        `Le type de la planète doit être l'un des suivants : ${validTypes.join(
          ", "
        )}.`
      );
    }
  }

  validateSize(size, errors) {
    if (isNaN(size) || size < 0) {
      errors.push("Valeur de la taille est invalide");
    }
  }
  validatePlanetSize(errors, size) {
    if (!validator.isFloat(size.toString(), { min: 0.1, max: 100 })) {
      errors.push(
        "La taille de la planète doit être u nombre 0.1 et 100 rayons terrestres."
      );
    }
  }

  validateMass(mass, errors) {
    if (isNaN(mass) || mass < 0) {
      errors.push("Valeur de la masse invalide");
    }
  }

  validatePlanetMass(errors, mass) {
    if (!validator.isFloat(mass.toString(), { min: 0.001, max: 5000 })) {
      errors.push(
        "La masse de la planète doit être un nombre entre 0.001 et 5000 masses terrestres."
      );
    }
  }
  validateDensity(density, errors) {
    if (isNaN(density) || density < 0) {
      errors.push("Valeur de la densité invalide");
    }
  }
  validatePlanetDensity(errors, density) {
    if (!validator.isFloat(density.toString(), { min: 0.5, max: 20 })) {
      errors.push(
        "La densité de la planète doit être un nombre entre 0.5 et 20 g/cm³."
      );
    }
  }
  validateAtmosphereCompositionLength(errors, atmosphere_composition) {
    if (!validator.isLength(atmosphere_composition, { min: 5, max: 200 })) {
      errors.push(
        "La composition de l'atmosphère doit contenir entre 5 et 200 caractères."
      );
    }
  }
}

module.exports = Main;
