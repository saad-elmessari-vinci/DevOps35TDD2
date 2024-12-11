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

  validateSize(size,errors){
    if(isNaN(size)|| size<0){
      errors.push("Valeur de la taille est invalide")
    }
  }
}

module.exports = Main;
