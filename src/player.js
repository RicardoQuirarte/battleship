import Gameboard from "./gameboard";

const Player = (name) => {
  const gameboard = Gameboard();

  gameboard.receiveAttack("f", 4);

  return { hit, isSunk };
};

export default Player;
