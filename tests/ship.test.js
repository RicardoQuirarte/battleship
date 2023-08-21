import carrier from "../src/ship";

test("the ship is sunk", () => {
  expect(carrier.isSunk()).toBe(true);
});
