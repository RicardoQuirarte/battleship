import Gameboard from "./gameboard";
import { Player, PlayerAI } from "./player";
import "./style/style.css";

const gameboardOne = Gameboard();
const gameboardTwo = Gameboard();

const ricardo = Player(gameboardTwo);
const computer = PlayerAI(gameboardOne);

function gameLoop() {
  while (!gameboardOne.allSunk() && !gameboardTwo.allSunk()) {
    ricardo.attack("d7");
    if (gameboardTwo.allSunk()) {
      alert("Ricardo has won the game");
      break;
    }
    computer.attack();
    if (gameboardOne.allSunk()) {
      alert("Computer has won the game");
      break;
    }
  }
}

// // // // // // // // // // // // // // //

const container = document.querySelector(".container");

gameboardOne.createGrid().forEach(() => {
  const div = document.createElement("div");
  div.classList.add("squares");
  container.appendChild(div);
});

console.log(gameboardOne.createGrid());
