import "./style/style.css";
import Gameboard from "./gameboard";
import { Player, PlayerAI } from "./player";
import { renderGameboard, renderGameboardComputer } from "./dom";

const gameboardOne = Gameboard();
const gameboardTwo = Gameboard();

const ricardo = Player(gameboardOne);
const computer = PlayerAI(gameboardTwo);

const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const messages = document.querySelector(".messages");
const computerMsg = document.querySelector(".computer-messages");
const playAgain = document.querySelector(".play-again");

function attackComputer() {
  const result = computer.attack();
  const random = result.randomPlay;
  const div = document.querySelector(`#${random}`);
  if (result.result === "You hit a ship!") {
    div.setAttribute("style", "background-color: red");
  }
  if (result.result === "You miss!")
    div.setAttribute("style", "background-color: green");
  if (computer.gameOver()) {
    computerMsg.textContent = "Computer has won the game";
  }
}

function attack(element, div) {
  const result = ricardo.attack(element);
  if (ricardo.gameOver()) {
    computerMsg.textContent = "Ricardo has won the game! 🎉";
    playAgain.textContent = "Play again";
    playAgain.classList.add("play-again-style");
    container.classList.add("clicked");
  }
  div.classList.add("clicked");
  messages.textContent = result;
  if (result === "You hit a ship!") {
    div.setAttribute("style", "background-color: red");
  }
  if (result === "You miss!") {
    div.setAttribute("style", "background-color: green");
  }
  attackComputer();
}

renderGameboard(gameboardOne.createGrid(), container, attack);
renderGameboardComputer(gameboardTwo.createGrid(), container2);

playAgain.addEventListener("click", () => {
  location.reload();
});
