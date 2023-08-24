import Gameboard from "../src/gameboard";

const gameboardOne = Gameboard();

test("All ships are sunk", () => {
  expect(gameboardOne.allSunk()).toBe(false);
});

test("A submarine was hit", () => {
  expect(gameboardOne.receiveAttack("g8")).toBe("You hit a submarine!");
});

test("A battleship was hit", () => {
  expect(gameboardOne.receiveAttack("h8")).toBe("You hit a battleship!");
});

test("Player select the same spot twice", () => {
  expect(gameboardOne.receiveAttack("g8")).toBe("Choose another spot!");
});

test("Failed shot", () => {
  expect(gameboardOne.receiveAttack("f9")).toBe("You missed!");
});

test("Shot an a playable spot", () => {
  expect(gameboardOne.receiveAttack("r5")).toBe(
    "Coordinates not inside of grid"
  );
});
