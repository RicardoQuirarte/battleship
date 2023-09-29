function generatedCoord(length) {
  const characters = "abcdefghij";
  const numbers = "0123456789";
  let result1 = "";
  let result2 = "";
  for (let i = 0; i < 1; i++) {
    result1 += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  for (let i = 0; i < 1; i++) {
    result2 += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result1 + result2;
}

export default generatedCoord;
