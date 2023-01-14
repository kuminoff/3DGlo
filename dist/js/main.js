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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calcValid.js */ \"./modules/calcValid.js\");\n/* harmony import */ var _modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValid.js */ \"./modules/formValid.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs.js */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider.js */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc.js */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./modules/sendForm.js\");\n/*jshint esversion: 6 */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// //\r\n// let phoneInput1 = document\r\n//   .querySelector(\"#form1-phone\" || \"#form2-phone\")\r\n//   .getAttribute(\"name\");\r\n// console.log(phoneInput1);\r\n// //\r\n// let nameInput21 = document.querySelector(\"#form1-name\");\r\n// let nameInput22 = document.querySelector(\"#form2-name\");\r\n// //\r\n// let emailInput21 = document.querySelector(\"#form1-email\");\r\n// let emailInput22 = document.querySelector(\"#form2-email\");\r\n// //\r\n// let phoneInput21 = document.querySelector(\"#form1-phone\");\r\n// let phoneInput22 = document.querySelector(\"#form2-phone\");\r\n// //\r\n// console.log(nameInput21);\r\n// console.log(emailInput21);\r\n// console.log(phoneInput21);\r\n\r\n// //\r\n// console.log(nameInput22);\r\n// console.log(emailInput22);\r\n// console.log(phoneInput22);\r\n// //\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"24 january 2023\");\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\r\n  \"portfolio-content\",\r\n  \"portfolio-item\",\r\n  \"portfolio-dots\",\r\n  \"dot\",\r\n  \"portfolio-btn\",\r\n  \"portfolio-item-active\",\r\n  \"dot-active\"\r\n);\r\n(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form1\",\r\n  someElement: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form2\",\r\n  someElement: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form3\",\r\n  someElement: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\n\n\nconst calc = (price = 100) => {\n  const calcBlock = document.querySelector(\".calc-block\");\n  const calcType = document.querySelector(\".calc-type\");\n  const calcSquare = document.querySelector(\".calc-square\");\n  const calcCount = document.querySelector(\".calc-count\");\n  const calcDay = document.querySelector(\".calc-day\");\n  const total = document.getElementById(\"total\");\n  let oldValue = 0;\n  let totalValue = 0;\n\n  const countCalc = () => {\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n    const calcSquareValue = +calcSquare.value;\n    const calcCountValue = 1 + 0.1 * +calcCount.value;\n    const calcDayValue = !calcDay.value\n      ? 1\n      : +calcDay.value >= 10\n      ? 1\n      : +calcDay.value > 5\n      ? 1.5\n      : 2;\n    oldValue = totalValue;\n    totalValue = 0;\n\n    if (calcTypeValue && calcSquareValue) {\n      totalValue = Math.round(\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\n      );\n      console.log(\n        calcTypeValue,\n        calcSquareValue,\n        calcCountValue,\n        calcDayValue,\n        totalValue\n      );\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n        duration: 1000,\n        timing(timeFraction) {\n          return timeFraction;\n        },\n        draw(progress) {\n          if (totalValue > oldValue) {\n            total.textContent =\n              oldValue + parseInt((totalValue - oldValue) * progress);\n          } else if (totalValue < oldValue) {\n            total.textContent = parseInt(\n              oldValue - (oldValue - totalValue) * progress\n            );\n          } else {\n            total.textContent = totalValue;\n          }\n        },\n      });\n    } else {\n      total.textContent = 0;\n    }\n  };\n\n  calcBlock.addEventListener(\"input\", () => {\n    countCalc();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/calcValid.js":
/*!******************************!*\
  !*** ./modules/calcValid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst calcValid = () => {\n  const calcItems = document.querySelectorAll(\"input.calc-item\");\n  calcItems.forEach((calcItem) => {\n    calcItem.addEventListener(\"input\", () => {\n      calcItem.value = calcItem.value.replace(/[^\\d]/, \"\");\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcValid);\n\n\n//# sourceURL=webpack:///./modules/calcValid.js?");

/***/ }),

/***/ "./modules/formValid.js":
/*!******************************!*\
  !*** ./modules/formValid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _inputValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputValid */ \"./modules/inputValid.js\");\n\r\n\r\n\r\n\r\nconst formValid = () => {\r\n  const formItemsText = document.querySelectorAll(\"form input[type=text]\");\r\n  const formItemsEmail = document.querySelectorAll(\"form input[type=email]\");\r\n  const formItemsTel = document.querySelectorAll(\"form input[type=tel]\");\r\n  const formItemsMes = document.querySelectorAll(\r\n    \"form input[name='user_message']\"\r\n  );\r\n  const formItems = document.querySelectorAll(\"form input\");\r\n\r\n  formItemsText.forEach((formItemText) => {\r\n    formItemText.addEventListener(\"input\", () => {\r\n      formItemText.value = formItemText.value.replace(я);\r\n      if (formItemText.classList.contains(\"error\")) (0,_inputValid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formItemText);\r\n    });\r\n  });\r\n\r\n  formItemsMes.forEach((formItemMes) => {\r\n    formItemMes.addEventListener(\"input\", () => {\r\n      formItemMes.value = formItemMes.value.replace(\r\n        /[^а-яА-Я0-9\\s\\-\\,\\.\\:\\;]+/g,\r\n        \"\"\r\n      );\r\n    });\r\n  });\r\n\r\n  formItemsEmail.forEach((formItemEmail) => {\r\n    formItemEmail.addEventListener(\"input\", () => {\r\n      formItemEmail.value = formItemEmail.value.replace(\r\n        /[^a-zA-Z\\d\\@\\-\\_\\.\\!\\~\\*\\']+/g,\r\n        \"\"\r\n      );\r\n      if (formItemEmail.classList.contains(\"error\")) (0,_inputValid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formItemEmail);\r\n    });\r\n  });\r\n\r\n  formItemsTel.forEach((formItemTel) => {\r\n    formItemTel.addEventListener(\"input\", () => {\r\n      formItemTel.value = formItemTel.value.replace(/[^\\d\\\\(\\\\)\\-\\+]+/g, \"\");\r\n      if (formItemTel.classList.contains(\"error\")) (0,_inputValid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formItemTel);\r\n    });\r\n  });\r\n\r\n  formItemsText.forEach((formItemText) => {\r\n    formItemText.addEventListener(\"blur\", () => {\r\n      formItemText.value = formItemText.value.replace(/[\\s]+/g, \" \");\r\n      formItemText.value = formItemText.value.replace(/[\\-]+/g, \" \");\r\n      formItemText.value = formItemText.value.replace(/[\\s\\-]+/g, \" \");\r\n      formItemText.value = formItemText.value.replace(/^[\\s\\-]+/g, \"\");\r\n      formItemText.value = formItemText.value.replace(/[\\s\\-]+$/g, \"\");\r\n      formItemText.value = formItemText.value.replace(\r\n        /( |^)[а-яА-Я]/g,\r\n        function (x) {\r\n          return x.toUpperCase();\r\n        }\r\n      );\r\n    });\r\n  });\r\n\r\n  formItemsMes.forEach((formItemMes) => {\r\n    formItemMes.addEventListener(\"blur\", () => {\r\n      formItemMes.value = formItemMes.value.replace(/[\\s]+/g, \" \");\r\n      formItemMes.value = formItemMes.value.replace(/[\\-]+/g, \" \");\r\n      formItemMes.value = formItemMes.value.replace(/[\\s\\-]+/g, \" \");\r\n      formItemMes.value = formItemMes.value.replace(/^[\\s\\-]+/g, \" \");\r\n      formItemMes.value = formItemMes.value.replace(/[\\s\\-]+$/g, \" \");\r\n    });\r\n  });\r\n\r\n  formItemsEmail.forEach((formItemEmail) => {\r\n    formItemEmail.addEventListener(\"blur\", () => {\r\n      formItemEmail.value = formItemEmail.value.replace(/[\\-]+/g, \"-\");\r\n      formItemEmail.value = formItemEmail.value.replace(/[\\s\\-]+/g, \"-\");\r\n      formItemEmail.value = formItemEmail.value.replace(/^[\\s\\-]+/g, \"\");\r\n      formItemEmail.value = formItemEmail.value.replace(/[\\s\\-]+$/g, \"\");\r\n    });\r\n  });\r\n\r\n  formItemsTel.forEach((formItemTel) => {\r\n    formItemTel.addEventListener(\"blur\", () => {\r\n      formItemTel.value = formItemTel.value.replace(/[\\-]+/g, \"-\");\r\n      formItemTel.value = formItemTel.value.replace(/^[\\s\\-]+[\\s\\-]+/g, \"\");\r\n      formItemTel.value = formItemTel.value.replace(/[\\s\\-]+$/g, \"\");\r\n      formItemTel.value = formItemTel.value.replace(/[\\s\\-]+/g, \"-\");\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValid);\r\n\n\n//# sourceURL=webpack:///./modules/formValid.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({ timing, draw, duration }) {\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    let progress = timing(timeFraction);\n\n    draw(progress);\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/inputValid.js":
/*!*******************************!*\
  !*** ./modules/inputValid.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst inputValid = (item) => {\r\n  switch (true) {\r\n    case item.name === \"user_name\":\r\n      if (\r\n        item.value.match(\r\n          /^([А-ЯA-Z]|[А-ЯA-Z][\\x27а-яa-z]{1,}|[А-ЯA-Z][\\x27а-яa-z]{1,}\\-([А-ЯA-Z][\\x27а-яa-z]{1,}|(оглы)|(кызы)))\\040[А-ЯA-Z][\\x27а-яa-z]{1,}(\\040[А-ЯA-Z][\\x27а-яa-z]{1,})?$/\r\n        )\r\n      ) {\r\n        item.classList.remove(\"error\");\r\n      }\r\n      break;\r\n    case item.name === \"user_email\":\r\n      if (\r\n        item.value.match(\r\n          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/\r\n        )\r\n      ) {\r\n        item.classList.remove(\"error\");\r\n      }\r\n      break;\r\n    case item.name === \"user_phone\":\r\n      if (\r\n        item.value.match(\r\n          /^((\\+7|7|8)+\\(?([0-9]){3}\\)?)(\\-?([0-9]){3})(\\-?([0-9]){2}){2}$/g\r\n        )\r\n      ) {\r\n        item.classList.remove(\"error\");\r\n      }\r\n      break;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValid);\r\n\n\n//# sourceURL=webpack:///./modules/inputValid.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst menu = () => {\n  const menu = document.querySelector(\"menu\");\n\n  const smoothScroll = (e, item) => {\n    e.preventDefault();\n    const blockID = item.getAttribute(\"href\").substr(1);\n\n    document.getElementById(blockID).scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\",\n    });\n  };\n\n  const handleMenu = () => {\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  document.addEventListener(\"click\", (e) => {\n    switch (true) {\n      case !!e.target.closest(\".close-btn\"):\n      case !!e.target.closest(\".menu\"):\n        handleMenu();\n        break;\n      case !!e.target.matches(\"menu>ul>li>a\"):\n        handleMenu();\n        smoothScroll(e, e.target);\n        break;\n      case !!e.target.closest(\"main>a\"):\n        smoothScroll(e, e.target.closest(\"main>a\"));\n        if (menu.classList.contains(\"active-menu\")) {\n          handleMenu();\n        }\n        break;\n      case !e.target.closest(\"menu\"):\n        if (menu.classList.contains(\"active-menu\")) {\n          handleMenu();\n        }\n        break;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\n\n\nconst modal = () => {\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const modal = document.querySelector(\".popup\");\n  const modalContent = modal.querySelector(\".popup-content\");\n  modal.style.transform = \"translateY(100%)\";\n  modalContent.style.opacity = 0;\n\n  buttons.forEach((item) =>\n    item.addEventListener(\"click\", () => {\n      modalShow();\n    })\n  );\n\n  const modalShow = () => {\n    if (screen.width > 768) {\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n        duration: 2000,\n        timing(timeFraction) {\n          return timeFraction;\n        },\n        draw(progress) {\n          modal.style.display = \"block\";\n          modal.style.transform = `translateY(${100 * (1 - progress)}%)`;\n          modalContent.style.opacity = progress;\n        },\n      });\n    } else {\n      modal.style.transform = \"\";\n      modalContent.style.opacity = 1;\n      modal.style.display = \"block\";\n    }\n  };\n\n  modal.addEventListener(\"click\", (e) => {\n    if (\n      !e.target.closest(\".popup-content\") ||\n      e.target.classList.contains(\"popup-close\")\n    ) {\n      if (screen.width > 768) {\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n          duration: 2000,\n          timing(timeFraction) {\n            return timeFraction;\n          },\n          draw(progress) {\n            modalContent.style.opacity = 1 - progress;\n            modal.style.transform = `translateY(${100 * progress}%)`;\n            if (progress === 1) modal.style.display = \"none\";\n          },\n        });\n      } else {\n        modal.style.transform = `translateY(100%)`;\n        modal.style.display = \"none\";\n        modalContent.style.opacity = 0;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./modules/validator.js\");\n\r\n\r\n\r\n\r\nconst sendForm = ({ formId, someElement = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement(\"img\");\r\n  statusBlock.classList.add(\"load-img\");\r\n  const loadUrl = \"../images/loading-svgrepo-com.svg\";\r\n  const successUrl = \"../images/success-svgrepo-com.svg\";\r\n  const errorUrl = \"../images/error-svgrepo-com.svg\";\r\n\r\n  statusBlock.style.width = \"50px\";\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n\r\n    (0,_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list);\r\n\r\n    list.forEach((input) => {\r\n      if (input.classList.contains(\"error\")) success = false;\r\n    });\r\n\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n    const formElements = form.querySelectorAll(\"input\");\r\n\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      if (key === \"user_message\" && val === \"\") {\r\n        return;\r\n      }\r\n      formBody[key] = val;\r\n    });\r\n\r\n    someElement.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n      if (elem.type === \"block\" && element.textContent != 0) {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === \"input\" && element.value != \"\") {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    if (validate(formElements)) {\r\n      statusBlock.src = loadUrl;\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          formElements.forEach((input) => {\r\n            statusBlock.src = successUrl;\r\n            statusBlock.classList.add(\"active\");\r\n            input.value = \"\";\r\n          });\r\n        })\r\n        .then((data) => {\r\n          setTimeout(() => {\r\n            statusBlock.remove();\r\n            statusBlock.classList.remove(\"active\");\r\n          }, 2000);\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.src = errorUrl;\r\n        });\r\n    } else {\r\n      statusBlock.src = errorUrl;\r\n      setTimeout(() => {\r\n        statusBlock.remove();\r\n      }, 2000);\r\n    }\r\n  };\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"Верните форму на место\");\r\n    }\r\n\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst slider = (\n  sliderBlockClass,\n  slidesClass,\n  dotsBlockClass,\n  dotsClass,\n  slideBtnClass,\n  itemActiveClass = \"portfolio-item-active\",\n  dotActiveClass = \"dot-active\"\n) => {\n  const sliderBlock = document.querySelector(`.${sliderBlockClass}`);\n  const slides = document.querySelectorAll(`.${slidesClass}`);\n  const dotsBlock = document.querySelector(`.${dotsBlockClass}`);\n  const dots = [];\n\n  if (\n    !(\n      sliderBlockClass &&\n      slidesClass &&\n      dotsBlockClass &&\n      dotsClass &&\n      slideBtnClass\n    )\n  )\n    return;\n\n  let currentSlide = 0;\n  let interval;\n  const timeInterval = 2000;\n\n  const createDots = () => {\n    for (let i = 0; i < slides.length; i++) {\n      const dot = document.createElement(\"li\");\n      dot.classList.add(dotsClass);\n      if (i === 0) dot.classList.add(dotActiveClass);\n      dots.push(dot);\n      dotsBlock.append(dot);\n    }\n  };\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, itemActiveClass);\n    prevSlide(dots, currentSlide, dotActiveClass);\n\n    currentSlide++;\n\n    if (currentSlide === slides.length) currentSlide = 0;\n    nextSlide(slides, currentSlide, itemActiveClass);\n    nextSlide(dots, currentSlide, dotActiveClass);\n  };\n\n  const startSlide = (timerInterval) => {\n    interval = setInterval(autoSlide, timerInterval);\n  };\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  };\n\n  sliderBlock.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n\n    if (!e.target.matches(`.${dotsClass}, .${slideBtnClass}`)) {\n      return;\n    }\n\n    prevSlide(slides, currentSlide, itemActiveClass);\n    prevSlide(dots, currentSlide, dotActiveClass);\n\n    if (e.target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (e.target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } else if (e.target.matches(`.${dotsClass}`)) {\n      currentSlide = dots.indexOf(e.target);\n    }\n\n    if (currentSlide === slides.length) currentSlide = 0;\n    if (currentSlide < 0) currentSlide = slides.length - 1;\n\n    nextSlide(slides, currentSlide, itemActiveClass);\n    nextSlide(dots, currentSlide, dotActiveClass);\n  });\n\n  sliderBlock.addEventListener(\n    \"mouseenter\",\n    (e) => {\n      if (e.target.matches(`.${dotsClass}, .${slideBtnClass}`)) stopSlide();\n    },\n    true\n  );\n\n  sliderBlock.addEventListener(\n    \"mouseleave\",\n    (e) => {\n      if (e.target.matches(`.${dotsClass}, .${slideBtnClass}`))\n        startSlide(timeInterval);\n    },\n    true\n  );\n\n  createDots();\n  startSlide(timeInterval);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst tabs = () => {\n  const tabContent = document.querySelectorAll(\".service-tab\");\n  const tabPanel = document.querySelector(\".service-header\");\n  const tabs = document.querySelectorAll(\".service-header-tab\");\n\n  tabPanel.addEventListener(\"click\", (e) => {\n    if (e.target.closest(\".service-header-tab\")) {\n      const tabBtn = e.target.closest(\".service-header-tab\");\n      tabs.forEach((tab, index) => {\n        if (tab === tabBtn) {\n          tab.classList.add(\"active\");\n          tabContent[index].classList.remove(\"d-none\");\n        } else {\n          tab.classList.remove(\"active\");\n          tabContent[index].classList.add(\"d-none\");\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*jshint esversion: 6 */\n\nconst timer = (deadline) => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n  const timerDays = document.getElementById(\"timer-days\");\n  let timerInterval;\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    // let days = Math.floor(timeRemaining / 3600 / 24);\n\n    let hours = Math.floor(timeRemaining / 3600);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    return {\n      timeRemaining,\n      // days,\n      hours,\n      minutes,\n      seconds,\n    };\n  };\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n    // timerDays.textContent =\n    //   getTime.days.toString().length === 1 ? \"0\" + getTime.days : getTime.days;\n    timerHours.textContent =\n      getTime.hours.toString().length === 1\n        ? \"0\" + getTime.hours + \"ч\"\n        : getTime.hours + \"ч\";\n    timerMinutes.textContent =\n      getTime.minutes.toString().length === 1\n        ? \"0\" + getTime.minutes + \"мин\"\n        : getTime.minutes + \"мин\";\n    timerSeconds.textContent =\n      getTime.seconds.toString().length === 1\n        ? \"0\" + getTime.seconds + \"сек\"\n        : getTime.seconds + \"сек\";\n    return getTime.timeRemaining;\n  };\n\n  // updateClock();\n\n  if (updateClock() > 0) {\n    timerInterval = setInterval(updateClock, 1000);\n  } else {\n    clearInterval(timerInterval);\n\n    // timerDays.textContent = \"00\";\n    timerHours.textContent = \"00\";\n    timerMinutes.textContent = \"00\";\n    timerSeconds.textContent = \"00\";\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst validator = (items) => {\r\n  //\r\n  let nameInput21 = document.querySelector(\"#form1-name\");\r\n  let nameInput22 = document.querySelector(\"#form2-name\");\r\n  //\r\n  let emailInput21 = document.querySelector(\"#form1-email\");\r\n  let emailInput22 = document.querySelector(\"#form2-email\");\r\n  //\r\n  let phoneInput21 = document.querySelector(\"#form1-phone\");\r\n  let phoneInput22 = document.querySelector(\"#form2-phone\");\r\n  //\r\n  let flag = true;\r\n  //\r\n  items.forEach((item) => {\r\n    switch (true) {\r\n      case item.name === \"user_name\":\r\n        if (\r\n          !item.value.match(\r\n            /^([А-ЯA-Z]|[А-ЯA-Z][\\x27а-яa-z]{1,}|[А-ЯA-Z][\\x27а-яa-z]{1,}\\-([А-ЯA-Z][\\x27а-яa-z]{1,}|(оглы)|(кызы)))\\040[А-ЯA-Z][\\x27а-яa-z]{1,}(\\040[А-ЯA-Z][\\x27а-яa-z]{1,})?$/\r\n          )\r\n        ) {\r\n          flag = false;\r\n          item.classList.add(\"error\");\r\n        }\r\n        break;\r\n      case item.name === \"user_email\":\r\n        if (\r\n          !item.value.match(\r\n            /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/\r\n          )\r\n        ) {\r\n          flag = false;\r\n          item.classList.add(\"error\");\r\n        }\r\n        break;\r\n      case item.name === \"user_phone\":\r\n        if (\r\n          !item.value.match(\r\n            /^((\\+7|7|8)+\\(?([0-9]){3}\\)?)(\\-?([0-9]){3})(\\-?([0-9]){2}){2}$/g\r\n          )\r\n        ) {\r\n          flag = false;\r\n          item.classList.add(\"error\");\r\n        }\r\n        break;\r\n    }\r\n  });\r\n  return flag;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\r\n\n\n//# sourceURL=webpack:///./modules/validator.js?");

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