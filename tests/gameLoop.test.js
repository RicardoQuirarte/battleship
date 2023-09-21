import { Player } from "../src/player";

const ricardo = Player();

ricardo.attack("g8");
ricardo.attack("g9");

test("Loop working correctly", () => {
  expect(ricardo.gameOver()).toBe(true);
});
