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

export default createGrid;
