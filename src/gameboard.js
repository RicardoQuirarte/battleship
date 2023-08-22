import { electron } from "webpack";
import Ship from "./ship";

const Gameboard = () => {
  const gridVertical = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const gridHorizontal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const submarine = Ship(2);
  const destroyer = Ship(3);

  const shipsCoords = [];

  const coordsSubmarine = "c-4";
  const coordsDestroyer = "g-8";
  shipsCoords.push(coordsSubmarine, coordsDestroyer);

  const useCordinates = [];
  const missedAttacks = [];

  const receiveAttack = (x) => {
    const cordinates = [x];
    useCordinates.push(cordinates);
    if (cordinates === useCordinates.map) {
      return "Choose another spot!";
    }
    if (shipsCoords.includes(x)) {
      submarine.hit();
      return "You hit a ship!";
    }
    missedAttacks.push();
    return "You missed!";
  };

  const allSunk = () => {
    if (submarine.isSunk() && destroyer.isSunk()) {
      return true;
    }
    return false;
  };

  return { receiveAttack, allSunk };
};

const gameboardOne = Gameboard();

export default gameboardOne;
