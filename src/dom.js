export const renderGameboard = (gameboard, containerr, attack) => {
  gameboard.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("squares");
    div.textContent = element;
    div.addEventListener("click", () => {
      attack(element, div);
    });
    containerr.appendChild(div);
  });
};

export const renderGameboardComputer = (gameboard, containerr) => {
  gameboard.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("squares", "computer-grid");
    div.textContent = element;
    div.setAttribute("id", element);
    containerr.appendChild(div);
  });
};
