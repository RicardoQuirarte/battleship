import generatedCoord from "./generatedCoord";

export const Player = (gameboard) => {
  const attack = (coordinates) => {
    const result = gameboard.receiveAttack(coordinates);
    return result;
  };
  function gameOver() {
    if (gameboard.allSunk()) {
      return true;
    }
    return false;
  }
  return { attack, gameOver };
};

export const PlayerAI = (gameboard) => {
  const useCoordinates = [];
  const attack = () => {
    let randomPlay = generatedCoord();
    while (useCoordinates.includes(randomPlay)) {
      randomPlay = generatedCoord();
    }
    useCoordinates.push(randomPlay);
    const result = gameboard.receiveAttack(randomPlay);
    return { result, randomPlay };
  };
  const gameOver = () => {
    if (gameboard.allSunk()) {
      return true;
    }
    return false;
  };
  return { attack, gameOver };
};
