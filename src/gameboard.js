import Ship from "./ship";

const Gameboard = (
  coordsSubmarine,
  coordsDestroyer,
  coordsBattleship,
  coordsCarrier
) => {
  const createGrid = () => {
    const result = [];
    const gridVertical = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for (let rows = 0; rows < 10; rows++) {
      for (let columns = 0; columns < 10; columns++) {
        const squares = gridVertical[columns] + rows;
        result.push(squares);
      }
    }
    return result;
  };

  const carrier = Ship(5);
  const battleship = Ship(4);
  const destroyer = Ship(3);
  const submarine = Ship(2);

  const shipsCoords = [];

  const carrierCoord = coordsCarrier;
  const battleshipCoord = coordsBattleship;
  const destroyerCoord = coordsDestroyer;
  const submarineCoords = coordsSubmarine;

  shipsCoords.push(
    submarineCoords,
    destroyerCoord,
    battleshipCoord,
    carrierCoord
  );

  const receiveAttack = (coordinates) => {
    if (JSON.stringify(shipsCoords).includes(coordinates)) {
      if (carrierCoord.includes(coordinates)) {
        carrier.hit();
        if (carrier.isSunk()) {
          return "You sank a carrier!! (5)";
        }
      }
      if (battleshipCoord.includes(coordinates)) {
        battleship.hit();
        if (battleship.isSunk()) {
          return "You sank a battleship!! (4)";
        }
      }
      if (destroyerCoord.includes(coordinates)) {
        destroyer.hit();
        if (destroyer.isSunk()) {
          return "You sank a destroyer!! (3)";
        }
      }
      if (submarineCoords.includes(coordinates)) {
        submarine.hit();
        if (submarine.isSunk()) {
          return "You sank a submarine!! (2)";
        }
      }
      return "You hit a ship!";
    }
    return "You miss!";
  };

  const allSunk = () => {
    if (
      submarine.isSunk() &&
      destroyer.isSunk() &&
      battleship.isSunk() &&
      carrier.isSunk()
    ) {
      return true;
    }
    return false;
  };

  return { receiveAttack, allSunk, createGrid };
};

export default Gameboard;
