import gameLoop from "../src/index";

test("Game played", () => {
  expect(gameLoop()).toBe("Ricardo has won the game");
});
