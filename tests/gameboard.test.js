import Gameboard from "../src/gameboard";

const gameboardOne = Gameboard(
  ["g8", "g9"],
  ["d5", "d6", "d7"],
  ["h6", "h7", "h8", "h9"],
  ["b2", "b3", "b4", "b5", "b6"]
);
gameboardOne.receiveAttack("g8");
gameboardOne.receiveAttack("g9");
gameboardOne.receiveAttack("d5");
gameboardOne.receiveAttack("d6");
gameboardOne.receiveAttack("d7");
gameboardOne.receiveAttack("h6");
gameboardOne.receiveAttack("h7");
gameboardOne.receiveAttack("h8");
gameboardOne.receiveAttack("h9");
gameboardOne.receiveAttack("b2");
gameboardOne.receiveAttack("b3");
gameboardOne.receiveAttack("b4");
gameboardOne.receiveAttack("b5");
gameboardOne.receiveAttack("b6");

test("All ships are sunk", () => {
  expect(gameboardOne.allSunk()).toBe(true);
});

test("A submarine was hit", () => {
  expect(gameboardOne.receiveAttack("g8")).toBe("You hit a ship!");
});

test("Failed shot", () => {
  expect(gameboardOne.receiveAttack("j0")).toBe("You miss!");
});
