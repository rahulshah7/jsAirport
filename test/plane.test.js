const Plane = require("../src/plane");
const Airport = require("../src/airport");

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

  describe("get isLanded()", () => {
    beforeEach(() => (this.airport = new Airport()));

    describe("After a plane lands", () => {
      test("Returns true", () => {
        this.airport.land(this.plane);
        expect(this.plane.isLanded).toBe(true);
      });
    });

    describe("After a plane takes off", () => {
      test("Returns false", () => {
        this.airport.land(this.plane);
        expect(this.plane.isLanded).toBe(true);
        this.airport.takeoff("plane-0");
        expect(this.plane.isLanded).toBe(false);
      });
    });
  });
});
