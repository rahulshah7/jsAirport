const Airport = require("../src/airport");
const Plane = require("../src/plane");

let airport;
let plane0;

beforeEach(() => {
  airport = new Airport();
  plane0 = new Plane("plane-0");
});

describe("Airport", () => {
  test("Can be instantiated", () => {
    expect(airport).toBeInstanceOf(Airport);
  });

  describe("land(plane)", () => {
    test("Adds 1 plane to the airport", () => {
      expect(airport.planes.length).toEqual(0);
      airport.land(plane0);
      expect(airport.planes.length).toEqual(1);
    });

    test("Returns the landed plane", () => {
      expect(airport.land(plane0)).toBe(plane0);
    });

    describe("When the airport is full", () => {
      test("Throws an error", () => {
        for (let i = 0; i < airport._capacity; i++) {
          airport.land(new Plane(`plane-${i}`));
        }
        expect(() => airport.land(new Plane("plane-10"))).toThrowError(/full/);
      });
    });
    describe("When the plane is already landed", () => {
      test("Throws an error", () => {
        airport.land(plane0);
        expect(() => airport.land(plane0)).toThrowError(/already landed/);
      });
    });
  });

  describe("takeoff(planeId)", () => {
    test("Removes 1 plane from the airport", () => {
      expect(airport.planes.length).toEqual(0);
      airport.land(plane0);
      expect(airport.planes.length).toEqual(1);
      airport.takeoff("plane-0");
      expect(airport.planes.length).toEqual(0);
    });

    test("Returns the taken-off plane", () => {
      airport.land(plane0);
      expect(airport.takeoff("plane-0")).toBe(plane0);
    });

    describe("When the plane has already taken off", () => {
      test("Throws an error", () => {
        airport.land(plane0);
        airport.takeoff("plane-0");
        expect(() => airport.takeoff("plane-0")).toThrowError(/not in airport/);
      });
    });
  });
});
