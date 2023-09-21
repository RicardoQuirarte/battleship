import Gameboard from "../src/gameboard";

const gameboardOne = Gameboard();
gameboardOne.receiveAttack("g8");
gameboardOne.receiveAttack("g9");

test("All ships are sunk", () => {
  expect(gameboardOne.allSunk()).toBe(true);
});

test("A submarine was hit", () => {
  expect(gameboardOne.receiveAttack("g8")).toBe("You hit a ship!");
});

test("Failed shot", () => {
  expect(gameboardOne.receiveAttack("f9")).toBe("You miss!");
});
