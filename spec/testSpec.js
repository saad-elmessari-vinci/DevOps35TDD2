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
});
