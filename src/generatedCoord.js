export const generatedCoord = () => {
  const characters = "abcdefghij";
  const numbers = "0123456789";
  const result1 = characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
  const result2 = numbers.charAt(Math.floor(Math.random() * numbers.length));
  return result1 + result2;
};

const letters = [];

export const generatedCoordShip = (number) => {
  const characters = "abcdefghij";
  const numbers = "0123456789";
  let result = characters.charAt(Math.floor(Math.random() * characters.length));
  let result2 = +numbers.charAt(Math.floor(Math.random() * numbers.length));
  let initialResult = result2;

  while (letters.includes(result)) {
    result = characters.charAt(Math.floor(Math.random() * characters.length));
  }
  letters.push(result);

  const coord = result + result2;
  const array = [];
  array.push(coord);

  for (let i = 1; i < number; i++) {
    if (result2 >= 9) {
      let coord3 = initialResult--;
      coord3--;
      coord3.toString();
      coord3 = result + coord3;
      array.push(coord3);
    } else {
      let coord2 = result2++;
      coord2++;
      coord2.toString();
      coord2 = result + coord2;
      array.push(coord2);
    }
  }
  return array;
};
