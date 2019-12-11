const Airport = require("../src/airport");
const Plane = require("../src/plane");
jest.mock("../src/plane");

let airport;
let plane;

beforeEach(() => {
  airport = new Airport();
  Plane.mockClear();
  plane = new Plane();
});

describe("Airport", () => {
  test("An Airport can be instantiated", () => {
    expect(airport).toBeInstanceOf(Airport);
  });

  describe("land(plane)", () => {
    test("Landing a plane adds 1 plane to the airport", () => {
      expect(airport.planes.length).toEqual(0);
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
    });
  });
});
