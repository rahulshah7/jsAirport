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
  });

  describe("takeoff(planeId)", () => {
    test("Removes 1 plane from the airport", () => {
      expect(airport.planes.length).toEqual(0);
      airport.land(plane0);
      expect(airport.planes.length).toEqual(1);
      airport.takeoff("plane-0");
      expect(airport.planes.length).toEqual(0);
    });
  });
});
