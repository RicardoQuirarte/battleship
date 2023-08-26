import Gameboard from "./gameboard";

const gameboardOne = Gameboard();
const gameboardTwo = Gameboard();

const container = document.querySelector(".container");

gameboardOne.createGrid().forEach((element) => {
  const div = document.createElement("div");
  div.classList.add("squares");
  container.appendChild(div);
});

console.log("hello");
