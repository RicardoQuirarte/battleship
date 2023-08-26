import Ship from "./ship";
import createGrid from "./createGrid";

const Gameboard = () => {
  const grid = createGrid();

  const carrier = Ship(5);
  const battleship = Ship(4);
  const destroyer = Ship(3);
  const destroyer2 = Ship(3);
  const submarine = Ship(2);

  const shipsCoords = [];

  const carrierCoord = ["b2", "b3", "b4", "b5", "b6"];
  const battleshipCoord = ["h6", "h7", "h8", "h9"];
  const destroyerCoord = ["d5", "d6", "d7"];
  const destroyer2Coord = ["e0", "e1", "e2"];
  const submarineCoords = ["g8", "g9"];

  shipsCoords.push(
    carrierCoord,
    battleshipCoord,
    destroyerCoord,
    destroyer2Coord,
    submarineCoords
  );

  const useCoordinates = ["a0"];
  const missedAttacks = [];

  const receiveAttack = (coordinates) => {
    if (useCoordinates.includes(coordinates)) {
      console.log(useCoordinates);
      return "Choose another spot!";
    }
    // useCoordinates.push(coordinates);
    if (JSON.stringify(shipsCoords).includes(coordinates)) {
      if (carrierCoord.includes(coordinates)) {
        carrier.hit();
      }
      if (battleshipCoord.includes(coordinates)) {
        battleship.hit();
      }
      if (destroyerCoord.includes(coordinates)) {
        destroyer.hit();
      }
      if (destroyer2Coord.includes(coordinates)) {
        destroyer2.hit();
      }
      if (submarineCoords.includes(coordinates)) {
        submarine.hit();
      }
      return "You hit a ship!";
    }
    missedAttacks.push(coordinates);
    return "You missed!";
  };

  const allSunk = () => {
    if (
      carrier.isSunk() &&
      battleship.isSunk() &&
      destroyer.isSunk() &&
      destroyer2.isSunk() &&
      submarine.isSunk()
    ) {
      return true;
    }
    return false;
  };

  return { receiveAttack, allSunk, createGrid };
};

export default Gameboard;
