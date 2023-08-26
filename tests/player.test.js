import Gameboard from "../src/gameboard";
import { Player, PlayerAI } from "../src/player";

const gameboardTwo = Gameboard();
const gameboardOne = Gameboard();

const ricardo = Player(gameboardTwo);
const computer = PlayerAI(gameboardOne);

test("Ricardo attack", () => {
  expect(ricardo.attack("g8")).toBe("Ricardo attack successful");
});

test("Computer attack", () => {
  expect(computer.attack()).toBe("Computer attack successful");
});
