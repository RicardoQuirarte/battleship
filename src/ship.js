const Ship = (length) => {
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hits += 1;
  };

  const isSunk = () => {
    if (length === hits) {
      sunk = true;
    }
    return sunk;
  };

  return { hit, isSunk };
};

const carrier = Ship(2);
carrier.hit();
carrier.hit();
carrier.isSunk();

// const carrier = Ship(5);
// const battleship = Ship(4);
// const destroyer = Ship(3);
// const destroyer2 = Ship(3);
// const submarine = Ship(2);

export default Ship;
