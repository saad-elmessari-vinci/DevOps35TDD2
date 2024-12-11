const Main = require("../src/test.js");

describe("ValidateName function should add an error message", function () {
  const main = new Main();

  it("Should add 'Le nom est requis' to errors if name is undefined", function () {
    const errors = [];
    const name = undefined;

    main.validateName(name, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Le nom est requis");
  });

  it("Should add 'Le nom est requis' to errors if name is empty", function () {
    const errors = [];
    const name = "  ";

    main.validateName(name, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Le nom est requis");
  });
});

describe("ValidatePlanetNameLength function should add an error message", function () {
  const main = new Main();

  it("Should add 'Le nom de la planète doit etre plus petit que 16 caractères' to errors if name s too long", function () {
    const errors = [];
    const name = "name tooooo long";

    main.validatePlanetNameLength(errors, name);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "Le nom de la planète doit contenir entre 3 et 15 caractères"
    );
  });
  it("Should add 'Le nom de la planète doit contenir entre 3 et 15 caractères' to errors if name is too short", function () {
    const errors = [];
    const name = "n";

    main.validatePlanetNameLength(errors, name);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "Le nom de la planète doit contenir entre 3 et 15 caractères"
    );
  });
});

describe("ValidatePlanetNameCharacters function should add an error message", function () {
  const main = new Main();
  it("Should add 'Le nom de la planète doit contenir uniquement des caractères aplhanumériques, des espaces ou des tirets.' if name is not alphanumeric", function () {
    const name = "à'!à!è!ç!";
    const errors = [];

    main.validatePlanetNameCharacters(errors, name);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "Le nom de la planète doit contenir uniquement des caractères aplhanumériques, des espaces ou des tirets."
    );
  });

  it("Should not add an error message when name is alphanumeric", function () {
    const name = "Mars";
    const errors = [];

    main.validatePlanetNameCharacters(errors, name);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });

  it("Should not add an error message when name contains hyphens ", function () {
    const name = "Test-Test";
    const errors = [];

    main.validatePlanetNameCharacters(errors, name);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});

describe("ValidateType function should add an error message", function () {
  const main = new Main();
  it("Should add 'Le type est requis' to errors if type is undefined", function () {
    const errors = [];
    const type = undefined;

    main.validateType(type, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Le type est requis.");
  });

  it("Should add 'Le type est requis' to errors if type is empty", function () {
    const type = "  ";
    const errors = [];

    main.validateType(type, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Le type est requis.");
  });
  it("Should not add an error message when type is not undefined and not empty", function () {
    const type = "Rocheuse";
    const errors = [];

    main.validateType(type, errors);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});

describe("ValidatePlanetType function should add an error message", function () {
  const main = new Main();
  it("Should add an error message if type does is not 'Rocheuse' nor 'Gazeuse' nor 'Géante glacée' ", function () {
    const type = "Test";
    const error = [];

    main.validatePlanetType(error, type);

    expect(error.length).toBe(1);
    expect(error[0]).toBe(
      "Le type de la planète doit être l'un des suivants : Rocheuse, Gazeuse, Géante glacée."
    );
  });

  it("Should not add an error message if type  is 'Rocheuse' ", function () {
    const type = "Rocheuse";
    const error = [];

    main.validatePlanetType(error, type);

    expect(error.length).toBe(0);
    expect(error[0]).toBe(undefined);
  });

  it("Should not add an error message if type  is 'Gazeuse' ", function () {
    const type = "Gazeuse";
    const error = [];

    main.validatePlanetType(error, type);

    expect(error.length).toBe(0);
    expect(error[0]).toBe(undefined);
  });

  it("Should not add an error message if type  is 'Géante glacée' ", function () {
    const type = "Géante glacée";
    const error = [];

    main.validatePlanetType(error, type);

    expect(error.length).toBe(0);
    expect(error[0]).toBe(undefined);
  });
});

describe("ValidateSize function should add an error message", function () {
  const main = new Main();
  it("Should add an error message when size is not a number", function () {
    const size = "fsg";
    const errors = [];

    main.validateSize(size, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Valeur de la taille est invalide");
  });
  it("Should add an error message when size is a negative number", function () {
    const size = -23;
    const errors = [];

    main.validateSize(size, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Valeur de la taille est invalide");
  });
  it("Should not add an error message when size is an positive number", function () {
    const size = 23;
    const errors = [];

    main.validateSize(size, errors);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});
describe("ValidatePlanetSize function should add an error message", function () {
  const main = new Main();
  it("Should add an error message when size is greater than 100", function () {
    const size = 101;
    const errors = [];

    main.validatePlanetSize(errors, size);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La taille de la planète doit être u nombre 0.1 et 100 rayons terrestres."
    );
  });
  it("Should add an error message when size is smaller than 0.1", function () {
    const size = 0;
    const errors = [];

    main.validatePlanetSize(errors, size);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La taille de la planète doit être u nombre 0.1 et 100 rayons terrestres."
    );
  });
  it("Should not add an error message when size is smaller than 100 and greater than 0.1", function () {
    const size = 45;
    const errors = [];

    main.validatePlanetSize(errors, size);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});

describe("ValidateMass function should add an error message", function () {
  const main = new Main();
  it("Should add an error when mass is not a number", function () {
    const mass = "sggsgg";
    const errors = [];

    main.validateMass(mass, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Valeur de la masse invalide");
  });
  it("Should add an error message when mass is a negative number", function () {
    const mass = -23;
    const errors = [];

    main.validateMass(mass, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Valeur de la masse invalide");
  });

  it("Should not add an error message when mass is a positive number", function () {
    const mass = 345;
    const errors = [];

    main.validateMass(mass, errors);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});

describe("ValidatePlanetMass function should add an error message", function () {
  it("Should add an error message when mass is smaller than 0.001", function () {
    const main = new Main();
    const mass = 0;
    const errors = [];

    main.validatePlanetMass(errors, mass);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La masse de la planète doit être un nombre entre 0.001 et 5000 masses terrestres."
    );
  });
  it("Should add an error message when mass is greater than 5000 ", function () {
    const main = new Main();
    const mass = 5300;
    const errors = [];

    main.validatePlanetMass(errors, mass);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La masse de la planète doit être un nombre entre 0.001 et 5000 masses terrestres."
    );
  });
});
