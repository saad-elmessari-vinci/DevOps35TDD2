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
  it("Should add 'Le nom de la planète doit contenir entre 3 et 15 caractères' to errors if name is too short",function(){
    const errors = [];
    const name = "n";

    main.validatePlanetNameLength(errors, name);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(
      "Le nom de la planète doit contenir entre 3 et 15 caractères"
    );
  })
});
