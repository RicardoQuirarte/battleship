import { Player, PlayerAI } from "../src/player";

const ricardo = Player();
const computer = PlayerAI();

test("Ricardo attack", () => {
  expect(ricardo.attack("d7")).toBe("Ricardo attack successful");
});

test("Not player turn", () => {
  expect(ricardo.attack("b2")).toBe("Is not your turn!");
});

test("Computer attack", () => {
  expect(computer.attack()).toBe("Computer attack successful");
});
