import generatedCoord from "./generatedCoord";

export const Player = (gameboard) => {
  const attack = (coordinates) => {
    const result = gameboard.receiveAttack(coordinates);
    return result;
    // return "Ricardo attack successful";
  };
  return { attack };
};

export const PlayerAI = (gameboard) => {
  const useCoordinates = [];
  let randomPlay = generatedCoord();
  useCoordinates.push(randomPlay);
  while (useCoordinates.includes(randomPlay)) {
    randomPlay = generatedCoord();
  }
  const attack = () => {
    gameboard.receiveAttack(randomPlay);
    return "Computer attack successful";
  };
  return { attack };
};
