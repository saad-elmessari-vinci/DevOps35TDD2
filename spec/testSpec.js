const Main = require("../src/test.js");

describe("ValidateName function should add an error message", function () {
  it("Should add 'Le nom est requis' to errors if name is undefined", function () {
    const main = new Main();
    const name = undefined;
    const errors = [];

    main.validateName(name, errors);

    expect(errors.length).toBe(1);
    expect(errors[0]).toBe("Le nom est requis");
  });
      
});