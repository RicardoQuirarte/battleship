import { Player } from "../src/player";

const ricardo = Player();
// const computer = PlayerAI(gameboardOne);

test("Successful attack", () => {
  expect(ricardo.attack("g8")).toBe("You hit a ship!");
});

// test("Computer attack", () => {
//   expect(computer.attack()).toBe("Computer attack successful");
// });
