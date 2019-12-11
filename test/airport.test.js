const Airport = require("../src/airport");

describe("Airport", () => {
  test("An Airport can be instantiated", () => {
    expect(new Airport()).toBeInstanceOf(Airport);
  });
});
