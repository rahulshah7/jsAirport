const Plane = require("../src/plane");

beforeEach(() => (this.plane = new Plane("plane-0")));

describe("Plane", () => {
  test("An Plane can be instantiated", () => {
    expect(this.plane).toBeInstanceOf(Plane);
  });

  describe("get id()", () => {
    test("Returns the plane id", () => {
      expect(this.plane.id).toBe("plane-0");
    });
  });
});
