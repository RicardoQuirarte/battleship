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

// // // // // // // // // // // // // // // // // // //

const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const messages = document.querySelector(".messages");
const computerMsg = document.querySelector(".computer-messages");

function attack(element, div) {
  messages.textContent = ricardo.attack(element);
  if (messages.textContent === "You hit a ship!") {
    div.setAttribute("style", "background-color: red");
  }
  if (messages.textContent === "You miss!") {
    div.setAttribute("style", "background-color: green");
  }
  if (gameboardTwo.allSunk()) {
    messages.textContent = "Ricardo has won the game";
    return;
  }
  ricardo.attack(element);
  computerAttack();
}

// function computerAttack(div) {
//   computerMsg.textContent = computer.attack().result;
//   console.log(computer.attack().randomPlay);
//   const random = computer.attack().randomPlay;
//   if (div.textContent === random) {
//     div.click();
//   }
//   if (computerMsg.textContent === "You hit a ship!") {
//     div.setAttribute("style", "background-color: red");
//   }
//   if (computerMsg.textContent === "You miss!") {
//     div.setAttribute("style", "background-color: green");
//   }
//   if (gameboardOne.allSunk()) {
//     computerMsg.textContent = "Ricardo has won the game";
//     return;
//   }
//   computer.attack();
// }

const renderGameboard = (gameboard, containerr) => {
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

function computerAttack(div) {
  computer.attack();
  const random = computer.attack().randomPlay;
  console.log(random);
  if (div.dataset.coordinate === random) {
    div.click();
  }
}

const renderGameboardComputer = (gameboard, containerr) => {
  gameboard.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("squares");
    div.textContent = element;
    div.dataset.coordinate = element;
    containerr.appendChild(div);
  });
  computerAttack(div);
};

renderGameboard(gameboardOne.createGrid(), container);
renderGameboardComputer(gameboardTwo.createGrid(), container2);
