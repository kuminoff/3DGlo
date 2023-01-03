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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calcValid.js */ \"./modules/calcValid.js\");\n/* harmony import */ var _modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValid.js */ \"./modules/formValid.js\");\n/*jshint esversion: 6 */\n\n\n\n\n\n\n\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"31 january 2023\");\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calcValid.js":
/*!******************************!*\
  !*** ./modules/calcValid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*jshint esversion: 6 */\r\n\r\n\r\n\r\nconst calcValid = () => {\r\n  const calcItems = document.querySelectorAll(\"input.calc-item\");\r\n  calcItems.forEach((calcItem) => {\r\n    calcItem.addEventListener(\"input\", () => {\r\n      calcItem.value = calcItem.value.replace(/[^\\d]/, \"\");\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcValid);\r\n\n\n//# sourceURL=webpack:///./modules/calcValid.js?");

/***/ }),

/***/ "./modules/formValid.js":
/*!******************************!*\
  !*** ./modules/formValid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*jshint esversion: 6 */\r\n\r\n\r\n\r\nconst formValid = () => {\r\n  const formItemsText = document.querySelectorAll(\r\n    \"form input[type=text], form input[placeholder='Ваше сообщение']\"\r\n  );\r\n  const formItemsEmail = document.querySelectorAll(\"form input[type=email]\");\r\n  const formItemsTel = document.querySelectorAll(\"form input[type=tel]\");\r\n\r\n  formItemsText.forEach((formItemText) => {\r\n    formItemText.addEventListener(\"input\", () => {\r\n      console.log(\"Сообщение\");\r\n      formItemText.value = formItemText.value.replace(/[^а-яА-Я\\s\\-]+/, \"\"); //\r\n    });\r\n  });\r\n\r\n  formItemsEmail.forEach((formItemEmail) => {\r\n    formItemEmail.addEventListener(\"input\", () => {\r\n      formItemEmail.value = formItemEmail.value.replace(\r\n        /[^A-Za-z\\d\\@\\-\\_\\.\\!\\~\\*\\']+/,\r\n        \"\"\r\n      );\r\n    });\r\n  });\r\n\r\n  formItemsTel.forEach((formItemTel) => {\r\n    formItemTel.addEventListener(\"input\", () => {\r\n      formItemTel.value = formItemTel.value.replace(/[^\\d\\\\(\\\\)\\-]+/, \"\");\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValid);\r\n\n\n//# sourceURL=webpack:///./modules/formValid.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*jshint esversion: 6 */\r\n\r\n\r\n\r\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n  const mouseScroll = document.querySelector(\"main>a\");\r\n\r\n  const smoothScroll = (e, item) => {\r\n    e.preventDefault();\r\n    const blockID = item.getAttribute(\"href\").substr(1);\r\n\r\n    document.getElementById(blockID).scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  };\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n  closeBtn.addEventListener(\"click\", handleMenu);\r\n  menuItems.forEach((item) =>\r\n    item.addEventListener(\"click\", (event) => {\r\n      handleMenu();\r\n      smoothScroll(event, item);\r\n    })\r\n  );\r\n\r\n  mouseScroll.addEventListener(\"click\", (event) => {\r\n    smoothScroll(event, mouseScroll);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*jshint esversion: 6 */\r\n\r\n\r\n\r\nconst modal = () => {\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modal = document.querySelector(\".popup\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n  modal.style.transform = \"translateY(100%)\";\r\n  let count = 50;\r\n  let modalHandle;\r\n\r\n  buttons.forEach((item) =>\r\n    item.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n      screen.width > 768 ? modalShow() : (modal.style.transform = \"\");\r\n    })\r\n  );\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    count = 50;\r\n    modal.style.transform = \"translateY(100%)\";\r\n    modal.style.display = \"none\";\r\n  });\r\n\r\n  const modalShow = () => {\r\n    if (count > 0) {\r\n      count--;\r\n      modalHandle = requestAnimationFrame(modalShow);\r\n      modal.style.transform = `translateY(${-count * 3}%)`;\r\n    } else {\r\n      cancelAnimationFrame(modalHandle);\r\n    }\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*jshint esversion: 6 */\n\nconst timer = (deadline) => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n  const timerDays = document.getElementById(\"timer-days\");\n  let timerInterval;\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    let days = Math.floor(timeRemaining / 3600 / 24);\n\n    let hours = Math.floor((timeRemaining / 3600) % 24);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    return {\n      timeRemaining,\n      days,\n      hours,\n      minutes,\n      seconds,\n    };\n  };\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n    timerDays.textContent =\n      getTime.days.toString().length === 1 ? \"0\" + getTime.days : getTime.days;\n    timerHours.textContent =\n      getTime.hours.toString().length === 1\n        ? \"0\" + getTime.hours\n        : getTime.hours;\n    timerMinutes.textContent =\n      getTime.minutes.toString().length === 1\n        ? \"0\" + getTime.minutes\n        : getTime.minutes;\n    timerSeconds.textContent =\n      getTime.seconds.toString().length === 1\n        ? \"0\" + getTime.seconds\n        : getTime.seconds;\n    return getTime.timeRemaining;\n  };\n\n  if (updateClock() > 0) {\n    timerInterval = setInterval(updateClock, 1000);\n  } else {\n    clearInterval(timerInterval);\n\n    timerDays.textContent = \"00\";\n    timerHours.textContent = \"00\";\n    timerMinutes.textContent = \"00\";\n    timerSeconds.textContent = \"00\";\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;