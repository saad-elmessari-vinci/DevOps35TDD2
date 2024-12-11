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
  const main = new Main();
  it("Should add an error message when mass is smaller than 0.001", function () {
    const mass = 0;
    const errors = [];

    main.validatePlanetMass(errors, mass);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La masse de la planète doit être un nombre entre 0.001 et 5000 masses terrestres."
    );
  });
  it("Should add an error message when mass is greater than 5000 ", function () {
    const mass = 5300;
    const errors = [];

    main.validatePlanetMass(errors, mass);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La masse de la planète doit être un nombre entre 0.001 et 5000 masses terrestres."
    );
  });
  it("Should not add an error message when mass is smaller than 5000 and greater than 0.001", function () {
    const mass = 4555;
    const errors = [];

    main.validatePlanetMass(errors, mass);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});

describe("ValidateDensity function should add an error message", function () {
  const main = new Main();
  it("Should add a message error when desnty is not a number", function () {
    const density = "sdgsgs";
    const errors = [];

    main.validateDensity(density, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Valeur de la densité invalide");
  });
  it("Should add an error message when density is negative", function () {
    const density = -234;
    const errors = [];

    main.validateDensity(density, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Valeur de la densité invalide");
  });
  it("Should not add an error message when density is a positive number", function () {
    const density = 34;
    const errors = [];

    main.validateDensity(density, errors);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});

describe("ValidatePlanetDensity function should add an error message", function () {
  const main = new Main();
  it("Should add an error when density is smaller than 0.5", function () {
    const density = 0.4;
    const errors = [];

    main.validatePlanetDensity(errors, density);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La densité de la planète doit être un nombre entre 0.5 et 20 g/cm³."
    );
  });
  it("Should add an error when density is greater than 20", function () {
    const density = 20.1;
    const errors = [];

    main.validatePlanetDensity(errors, density);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La densité de la planète doit être un nombre entre 0.5 et 20 g/cm³."
    );
  });
  it("Should not add an error message when density is greater than 0.5 and smaller than 20", function () {
    const density = 13;
    const errors = [];

    main.validatePlanetDensity(errors, density);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});

describe("ValidateAtmosphereCompositionLength function should add an error message", function () {
  const main = new Main();
  it("Should add an error message when atmosphere composition is smaller than 5 characters", function () {
    const atm_composition = "abc";
    const errors = [];

    main.validateAtmosphereCompositionLength(errors, atm_composition);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La composition de l'atmosphère doit contenir entre 5 et 200 caractères."
    );
  });
  it("Should add an error message when atmosphere composition is greater than 200 characters", function () {
    const atm_composition =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus  tincidunt, libero ac egestas maximus, nunc felis tempor ante, non pretium tortor arcu in purus. Curabitur at erat sed lorem auctor faucibus. Nulla facilisi. Aenean vel tincidunt lorem. Duis gravida.";
    const errors = [];

    main.validateAtmosphereCompositionLength(errors, atm_composition);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "La composition de l'atmosphère doit contenir entre 5 et 200 caractères."
    );
  });
  it("Should not add an error message when atmosphere composition is between 5 and 200 characters", function () {
    const atm_composition = "Azote(100%)";
    const errors = [];

    main.validateAtmosphereCompositionLength(errors, atm_composition);

    expect(errors.length).toBe(0);
    expect(errors[0]).toBe(undefined);
  });
});
