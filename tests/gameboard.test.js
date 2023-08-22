import gameboardOne from "../src/gameboard";

test.skip("All ships are sunk", () => {
  expect(gameboardOne.allSunk()).toBe(true);
});

test("A ship was hit", () => {
  expect(gameboardOne.receiveAttack("g8")).toBe("You hit a ship!");
});

test("Player select the same spot twice", () => {
  expect(gameboardOne.receiveAttack("g8")).toBe("Choose another spot!");
});

test("Failed shot", () => {
  expect(gameboardOne.receiveAttack("f10")).toBe("You missed!");
});

test("Shot an a playable spot", () => {
  expect(gameboardOne.receiveAttack("r5")).toBe(
    "Coordinates not inside of grid"
  );
});
