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

  //
  // const useCoordinates = [];

  // let randomPlay = generatedCoord();

  // while (useCoordinates.includes(randomPlay)) {
  //   randomPlay = generatedCoord();
  // }
  // useCoordinates.push(randomPlay);
  //

  // const carrierCoord = ["b2", "b3", "b4", "b5", "b6"];
  // const battleshipCoord = ["h6", "h7", "h8", "h9"];
  // const destroyerCoord = ["d5", "d6", "d7"];

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
      // if (carrierCoord.includes(coordinates)) {
      //   carrier.hit();
      // }
      // if (battleshipCoord.includes(coordinates)) {
      //   battleship.hit();
      // }
      // if (destroyerCoord.includes(coordinates)) {
      //   destroyer.hit();
      // }
      if (submarineCoords.includes(coordinates)) {
        submarine.hit();
      }
      return "You hit a ship!";
    }
    return "You miss!";
  };

  const allSunk = () => {
    if (
      submarine.isSunk()
      // destroyer.isSunk() &&
      // battleship.isSunk() &&
      // carrier.isSunk()
    ) {
      return true;
    }
    return false;
  };

  return { receiveAttack, allSunk, createGrid };
};

export default Gameboard;
