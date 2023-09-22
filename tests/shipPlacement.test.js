import generatedCoord from "../src/generatedCoord";

const useCoordinates = [];

let randomPlay = generatedCoord();

while (useCoordinates.includes(randomPlay)) {
  randomPlay = generatedCoord();
}
useCoordinates.push(randomPlay);

const submarineCoords = [randomPlay, randomPlay + 1];

test("Ship placement working correctly", () => {
  expect(submarineCoords).toBe(["g8", "g9"]);
});
