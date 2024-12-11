class Main {
  validateName(name, errors) {
    if (!name) {
      errors.push("Le nom est requis");
    }
  }
}

module.exports = Main;
