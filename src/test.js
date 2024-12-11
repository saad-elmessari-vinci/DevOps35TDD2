class Main {
  validateName(name, errors) {
    if (!name ||  name.trim().length===0 ) {
      errors.push("Le nom est requis");
    }
  }
}

module.exports = Main;
