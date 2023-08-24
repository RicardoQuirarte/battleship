import Gameboard from "./gameboard";
import generatedCoord from "./generatedCoord";

const gameboardOne = Gameboard();
const gameboardTwo = Gameboard();

let playerOne = true;
let playerTwo = false;

export const Player = () => {
  const attack = (coordinates) => {
    if (playerOne) {
      gameboardTwo.receiveAttack(coordinates);
      playerOne = false;
      playerTwo = true;
      return "Ricardo attack successful";
    }
    if (playerTwo) {
      return "Is not your turn!";
    }
  };
  return { attack };
};

export const PlayerAI = () => {
  const useCoordinates = [];
  let randomPlay = generatedCoord();
  useCoordinates.push(randomPlay);
  while (useCoordinates.includes(randomPlay)) {
    randomPlay = generatedCoord();
  }
  const attack = () => {
    if (playerTwo) {
      gameboardOne.receiveAttack(randomPlay);
      playerOne = false;
      playerTwo = true;
      return "Computer attack successful";
    }
    if (playerOne) {
      return "Is not your turn!";
    }
  };
  return { attack };
};
