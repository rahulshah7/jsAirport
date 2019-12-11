const Airport = require("../src/airport");

let airport;

beforeEach(() => (airport = new Airport()));

describe("Airport", () => {
  test("An Airport can be instantiated", () => {
    expect(airport).toBeInstanceOf(Airport);
  });
});
