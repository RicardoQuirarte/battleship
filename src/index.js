import Gameboard from "./gameboard";
import { Player, PlayerAI } from "./player";
import "./style/style.css";
// import renderGameboard from "./dom";

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

const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const messages = document.querySelector(".messages");

// function attack() {
//   ricardo.attack();
//   console.log("helo");
// }

const renderGameboard = (gameboard, containerr) => {
  gameboard.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("squares");
    div.textContent = element;
    div.addEventListener("click", () => {
      messages.textContent = ricardo.attack(element);
      console.log(ricardo.attack(element));
      if (messages.textContent === "You hit a ship!") {
        div.setAttribute("style", "background-color: red");
      } else {
        div.setAttribute("style", "background-color: green");
      }
    });
    containerr.appendChild(div);
  });
};

renderGameboard(gameboardOne.createGrid(), container);
renderGameboard(gameboardTwo.createGrid(), container2);
