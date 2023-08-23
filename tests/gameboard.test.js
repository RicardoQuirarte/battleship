import gameboardOne from "../src/gameboard";

test.skip("All ships are sunk", () => {
  expect(gameboardOne.allSunk()).toBe(true);
});

test.skip("A ship was hit", () => {
  expect(gameboardOne.receiveAttack("g8")).toBe("You hit a ship!");
});

test.skip("Player select the same spot twice", () => {
  expect(gameboardOne.receiveAttack("g8")).toBe("Choose another spot!");
});

test.skip("Failed shot", () => {
  expect(gameboardOne.receiveAttack("f10")).toBe("You missed!");
});

test.skip("Shot an a playable spot", () => {
  expect(gameboardOne.receiveAttack("r5")).toBe(
    "Coordinates not inside of grid"
  );
});

test.skip("Player hit an specific ship(submarine)", () => {
  expect(gameboardOne.receiveAttack("g9")).toBe("You hit a submarine!");
});

test.skip("Player hit an specific ship(destroyer)", () => {
  expect(gameboardOne.receiveAttack("d6")).toBe("You hit a destroyer!");
});
