import { Player } from "../src/player";
import Gameboard from "../src/gameboard";

const gameboardOne = Gameboard(["g6"], ["g7"], ["g8"], ["g9"]);

const ricardo = Player(gameboardOne);

test("Successful attack", () => {
  expect(ricardo.attack("g8")).toBe("You hit a ship!");
});
