import Ship from "../src/ship";

const carrier = Ship(2);
carrier.hit();
carrier.hit();

test("the ship is sunk", () => {
  expect(carrier.isSunk()).toBe(true);
});
