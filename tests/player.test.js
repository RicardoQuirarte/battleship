import ricardo from "../src/player";

test("Ricardo attack successful", () => {
  expect(ricardo.attack("d7")).toBe("Ricardo attack successful");
});

test("Daryan attack successful", () => {
  expect(ricardo.attack("g6")).toBe("Daryan attack successful");
});

test("Not player turn", () => {
  expect(ricardo.attack("b2")).toBe("Is not your turn!");
});
