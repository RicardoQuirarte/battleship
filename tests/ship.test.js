import Ship from "../src/ship";

const carrier = Ship(3);
carrier.hit();
carrier.hit();
carrier.hit();

test("the ship is sunk", () => {
  expect(carrier.isSunk()).toBe(true);
});
