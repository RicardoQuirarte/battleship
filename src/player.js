import Gameboard from "./gameboard";

const gameboardOne = Gameboard();
const gameboardTwo = Gameboard();

let playerOne = true;
let playerTwo = false;

const Player = (name) => {
  const attack = (coordinates) => {
    if (playerOne) {
      gameboardTwo.receiveAttack(coordinates);
      playerOne = false;
      playerTwo = true;
      return "Ricardo attack successful";
    }
    if (playerTwo) {
      gameboardOne.receiveAttack(coordinates);
      playerTwo = false;
      playerOne = true;
      return "Daryan attack successful";
    }
    return "Is not your turn!";
  };

  return { attack };
};

const ricardo = Player();

const daryan = Player();
daryan.attack("g7");

export default ricardo;
