import "./style/style.css";
import Gameboard from "./gameboard";
import { Player, PlayerAI } from "./player";
import { renderGameboard, renderGameboardComputer } from "./dom";
import { generatedCoord, generatedCoordShip } from "./generatedCoord";

const initialPage = document.querySelector(".initial-page");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const placementContainer = document.querySelector(".placement-container");
const messages = document.querySelector(".messages");
const playAgain = document.querySelector(".play-again");
const submitCoords = document.querySelector("#submit");
const submarine = document.querySelector("#submarine");
const destroyer = document.querySelector("#destroyer");
const battleship = document.querySelector("#battleship");
const carrier = document.querySelector("#carrier");

const placementGameboard = Gameboard();
renderGameboardComputer(placementGameboard.createGrid(), placementContainer);

function showSelection(input) {
  const array = input.value.split("-");
  for (let i = 0; i < array.length; i++) {
    const div = document.querySelector(`#${array[i]}`);
    div.classList.add("selected");
  }
}

submarine.addEventListener("focusout", () => {
  showSelection(submarine);
});
destroyer.addEventListener("focusout", () => {
  showSelection(destroyer);
});
battleship.addEventListener("focusout", () => {
  showSelection(battleship);
});
carrier.addEventListener("focusout", () => {
  showSelection(carrier);
});

function startGame(e) {
  e.preventDefault();
  initialPage.classList.add("remove");
  const ship1 = submarine.value.split("-");
  const ship2 = destroyer.value.split("-");
  const ship3 = battleship.value.split("-");
  const ship4 = carrier.value.split("-");

  const useCoordinates = [];
  const randomShip = () => {
    let randomCoord = generatedCoordShip();
    while (useCoordinates.includes(randomCoord)) {
      randomCoord = generatedCoordShip();
    }
    useCoordinates.push(randomCoord);
    return randomCoord;
  };

  console.log(generatedCoordShip(2));
  console.log(generatedCoordShip(3));
  console.log(generatedCoordShip(4));
  console.log(generatedCoordShip(5));

  const gameboardOne = Gameboard(ship1, ship2, ship3, ship4);
  const gameboardTwo = Gameboard(ship1, ship2, ship3, ship4);

  const ricardo = Player(gameboardOne);
  const computer = PlayerAI(gameboardTwo);

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
      messages.textContent = "Computer has won the game 🖥️";
      playAgain.textContent = "Play again";
      container.classList.add("clicked");
    }
  }

  function attack(element, div) {
    const result = ricardo.attack(element);
    div.classList.add("clicked");
    messages.textContent = result;
    if (result === "You hit a ship!") {
      div.setAttribute("style", "background-color: red");
    }
    if (result === "You miss!") {
      div.setAttribute("style", "background-color: green");
    }
    if (ricardo.gameOver()) {
      messages.textContent = "Ricardo has won the game! 🎉";
      playAgain.textContent = "Play again";
      container.classList.add("clicked");
    }
    attackComputer();
  }

  renderGameboard(gameboardOne.createGrid(), container, attack);
  renderGameboardComputer(gameboardTwo.createGrid(), container2);
}

submitCoords.addEventListener("click", startGame);

playAgain.addEventListener("click", () => {
  location.reload();
});
