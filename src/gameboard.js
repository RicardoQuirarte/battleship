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
  const eachCoords = (cordinates) => {
    const algo = cordinates;
    shipsCoords.push(algo);
  };

  eachCoords("g8");

  const useCordinates = [];
  const missedAttacks = [];

  const receiveAttack = (cordinates) => {
    if (grid.includes(cordinates)) {
      if (useCordinates.includes(cordinates)) {
        return "Choose another spot!";
      }
      useCordinates.push(cordinates);
      if (shipsCoords.includes(cordinates)) {
        submarine.hit();
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

export default gameboardOne;
