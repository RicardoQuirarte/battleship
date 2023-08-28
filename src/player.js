import generatedCoord from "./generatedCoord";

export const Player = (gameboard) => {
  const attack = (coordinates) => {
    const result = gameboard.receiveAttack(coordinates);
    return result;
  };
  return { attack };
};

export const PlayerAI = (gameboard) => {
  const useCoordinates = [];
  const attack = () => {
    let randomPlay = generatedCoord();
    while (useCoordinates.includes(randomPlay)) {
      randomPlay = generatedCoord();
    }
    useCoordinates.push(randomPlay);
    gameboard.receiveAttack(randomPlay);
    const result = gameboard.receiveAttack(randomPlay);
    return { result, randomPlay };
  };
  return { attack };
};
