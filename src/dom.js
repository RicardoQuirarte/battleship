const renderGameboard = (gameboard, container) => {
  gameboard.forEach(() => {
    const div = document.createElement("div");
    div.classList.add("squares");
    div.addEventListener("click", () => {
      console.log("attack");
    });
    container.appendChild(div);
  });
};

export default renderGameboard;
