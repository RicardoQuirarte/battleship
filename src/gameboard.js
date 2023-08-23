import Ship from "./ship";

const Gameboard = () => {
  const grid = [];
  const createGrid = () => {
    const gridVertical = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for (let rows = 1; rows < 11; rows++) {
      for (let columns = 0; columns < 10; columns++) {
        const squares = gridVertical[columns] + rows;
        grid.push(squares);
      }
    }
  };
  createGrid();

  const submarine = Ship(2);
  const destroyer = Ship(3);

  const shipsCoords = [];

  const submarineCoords = ["g8", "g9"];
  const destroyerCoords = ["d5", "d6", "d7"];
  shipsCoords.push(submarineCoords, destroyerCoords);

  const useCoordinates = [];
  const missedAttacks = [];

  const receiveAttack = (coordinates) => {
    if (grid.includes(coordinates)) {
      if (useCoordinates.includes(coordinates)) {
        return "Choose another spot!";
      }
      useCoordinates.push(coordinates);
      if (JSON.stringify(shipsCoords).includes(coordinates)) {
        if (submarineCoords.includes(coordinates)) {
          submarine.hit();
          return "You hit a submarine!";
        }
        if (destroyerCoords.includes(coordinates)) {
          destroyer.hit();
          return "You hit a destroyer!";
        }
        return "You hit a ship!";
      }
      missedAttacks.push();
      return "You missed!";
    }
    return "Coordinates not inside of grid";
  };

  const allSunk = () => {
    if (submarine.isSunk() && destroyer.isSunk()) {
      return true;
    }
  };

  return { receiveAttack, allSunk, createGrid };
};

const gameboardOne = Gameboard();

export default Gameboard;
