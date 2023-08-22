import carrier from "../src/ship";

test.skip("the ship is sunk", () => {
  expect(carrier.isSunk()).toBe(true);
});
