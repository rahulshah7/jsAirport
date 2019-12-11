const Plane = require("../src/plane");

beforeEach(() => (this.plane = new Plane()));

describe("Plane", () => {
  test("An Plane can be instantiated", () => {
    expect(this.plane).toBeInstanceOf(Plane);
  });
});
