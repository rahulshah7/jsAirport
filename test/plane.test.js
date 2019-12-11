const Plane = require("../src/plane");

describe("Plane", () => {
  test("An Plane can be instantiated", () => {
    expect(new Plane()).toBeInstanceOf(Plane);
  });
});
