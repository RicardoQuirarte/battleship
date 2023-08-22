/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst Gameboard = () => {\n  const grid = [];\n\n  const createGrid = () => {\n    const gridVertical = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n    for (let rows = 1; rows < 11; rows++) {\n      for (let columns = 0; columns < 10; columns++) {\n        const squares = gridVertical[columns] + rows;\n        grid.push(squares);\n      }\n    }\n    console.log(grid);\n  };\n\n  const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n  const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n\n  const shipsCoords = [];\n\n  const coordsSubmarine = \"c-4\";\n  const coordsDestroyer = \"g-8\";\n  shipsCoords.push(coordsSubmarine, coordsDestroyer);\n\n  const useCordinates = [];\n  const missedAttacks = [];\n\n  const receiveAttack = (x) => {\n    const cordinates = [x];\n    useCordinates.push(cordinates);\n    if (cordinates === useCordinates.map) {\n      return \"Choose another spot!\";\n    }\n    if (shipsCoords.includes(x)) {\n      submarine.hit();\n      return \"You hit a ship!\";\n    }\n    missedAttacks.push();\n    return \"You missed!\";\n  };\n\n  const allSunk = () => {\n    if (submarine.isSunk() && destroyer.isSunk()) {\n      return true;\n    }\n    return false;\n  };\n\n  return { receiveAttack, allSunk, createGrid };\n};\n\nconst gameboardOne = Gameboard();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardOne);\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconsole.log(\"hello once moree\");\n\n_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGrid();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\n  let hits = 0;\n  let sunk = false;\n\n  const hit = () => {\n    hits += 1;\n  };\n\n  const isSunk = () => {\n    if (length === hits) {\n      sunk = true;\n    }\n    return sunk;\n  };\n\n  return { hit, isSunk };\n};\n\nconst carrier = Ship(2);\ncarrier.hit();\ncarrier.hit();\ncarrier.isSunk();\n\n// const carrier = Ship(5);\n// const battleship = Ship(4);\n// const destroyer = Ship(3);\n// const destroyer2 = Ship(3);\n// const submarine = Ship(2);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;