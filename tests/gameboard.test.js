import gameboardOne from "../src/gameboard";

test.skip("All ships are sunk", () => {
  expect(gameboardOne.allSunk()).toBe(true);
});

test("A ship was hit", () => {
  expect(gameboardOne.receiveAttack("g-8")).toBe("You hit a ship!");
});
