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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calcValid.js */ \"./modules/calcValid.js\");\n/* harmony import */ var _modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValid.js */ \"./modules/formValid.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs.js */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider.js */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc.js */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./modules/sendForm.js\");\n/*jshint esversion: 6 */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"24 january 2023\");\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\r\n  \"portfolio-content\",\r\n  \"portfolio-item\",\r\n  \"portfolio-dots\",\r\n  \"dot\",\r\n  \"portfolio-btn\",\r\n  \"portfolio-item-active\",\r\n  \"dot-active\"\r\n);\r\n(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form1\",\r\n  someElement: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form2\",\r\n  someElement: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form3\",\r\n  someElement: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _inputValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputValid */ \"./modules/inputValid.js\");\n\n\n\n\nconst formValid = () => {\n  const formItemsText = document.querySelectorAll(\"form input[type=text]\");\n  const formItemsEmail = document.querySelectorAll(\"form input[type=email]\");\n  const formItemsTel = document.querySelectorAll(\"form input[type=tel]\");\n  const formBtn = document.querySelectorAll(\".form-btn\");\n  const formItemsMes = document.querySelectorAll(\n    \"form input[name='user_message']\"\n  );\n  const formItems = document.querySelectorAll(\"form input\");\n\n  formItemsText.forEach((formItemText) => {\n    formItemText.addEventListener(\"input\", () => {\n      formItemText.value = formItemText.value.replace(/[^а-яА-Я\\s\\-]+/g, \"\");\n      if (formItemText.classList.contains(\"error\")) (0,_inputValid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formItemText);\n    });\n  });\n\n  formItemsMes.forEach((formItemMes) => {\n    formItemMes.addEventListener(\"input\", () => {\n      formItemMes.value = formItemMes.value.replace(\n        /[^а-яА-Я0-9\\s\\-\\,\\.\\:\\;]+/g,\n        \"\"\n      );\n    });\n  });\n\n  formItemsEmail.forEach((formItemEmail) => {\n    formItemEmail.addEventListener(\"input\", () => {\n      formItemEmail.value = formItemEmail.value.replace(\n        /[^a-zA-Z\\d\\@\\-\\_\\.\\!\\~\\*\\']+/g,\n        \"\"\n      );\n      if (formItemEmail.classList.contains(\"error\")) (0,_inputValid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formItemEmail);\n    });\n  });\n\n  formItemsTel.forEach((formItemTel) => {\n    formItemTel.addEventListener(\"input\", () => {\n      formItemTel.value = formItemTel.value.replace(/[^\\d\\\\(\\\\)\\-\\+]+/g, \"\");\n      if (formItemTel.classList.contains(\"error\")) (0,_inputValid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formItemTel);\n    });\n  });\n\n  formItemsText.forEach((formItemText) => {\n    formItemText.addEventListener(\"blur\", () => {\n      formItemText.value = formItemText.value.replace(/[\\s]+/g, \" \");\n      formItemText.value = formItemText.value.replace(/[\\-]+/g, \"-\");\n      formItemText.value = formItemText.value.replace(/[\\s\\-]+/g, \"-\");\n      formItemText.value = formItemText.value.replace(/^[\\s\\-]+/g, \"\");\n      formItemText.value = formItemText.value.replace(/[\\s\\-]+$/g, \"\");\n      formItemText.value = formItemText.value.replace(\n        /( |^)[а-яА-Я]/g,\n        function (x) {\n          return x.toUpperCase();\n        }\n      );\n    });\n  });\n\n  formItemsMes.forEach((formItemMes) => {\n    formItemMes.addEventListener(\"blur\", () => {\n      formItemMes.value = formItemMes.value.replace(/[\\s]+/g, \" \");\n      formItemMes.value = formItemMes.value.replace(/[\\-]+/g, \"-\");\n      formItemMes.value = formItemMes.value.replace(/[\\s\\-]+/g, \"-\");\n      formItemMes.value = formItemMes.value.replace(/^[\\s\\-]+/g, \"\");\n      formItemMes.value = formItemMes.value.replace(/[\\s\\-]+$/g, \"\");\n    });\n  });\n\n  formItemsEmail.forEach((formItemEmail) => {\n    formItemEmail.addEventListener(\"blur\", () => {\n      formItemEmail.value = formItemEmail.value.replace(/[\\-]+/g, \"-\");\n      formItemEmail.value = formItemEmail.value.replace(/[\\s\\-]+/g, \"-\");\n      formItemEmail.value = formItemEmail.value.replace(/^[\\s\\-]+/g, \"\");\n      formItemEmail.value = formItemEmail.value.replace(/[\\s\\-]+$/g, \"\");\n    });\n  });\n\n  formItemsTel.forEach((formItemTel) => {\n    formItemTel.addEventListener(\"blur\", () => {\n      formItemTel.value = formItemTel.value.replace(/[\\-]+/g, \"-\");\n      formItemTel.value = formItemTel.value.replace(/^[\\s\\-]+[\\s\\-]+/g, \"\");\n      formItemTel.value = formItemTel.value.replace(/[\\s\\-]+$/g, \"\");\n      formItemTel.value = formItemTel.value.replace(/[\\s\\-]+/g, \"-\");\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValid);\n\n\n//# sourceURL=webpack:///./modules/formValid.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst inputValid = (item) => {\r\n  switch (true) {\r\n    case item.matches(\"form input[type=text]\"):\r\n      if (item.value.match(/[a-яA-я]{2}/gi)) {\r\n        item.classList.remove(\"error\");\r\n      }\r\n      break;\r\n    case item.matches(\"form input[type=email]\"):\r\n      if (item.value.match(/^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$/gi)) {\r\n        item.classList.remove(\"error\");\r\n      }\r\n      break;\r\n    case item.matches(\"form input[type=tel]\"):\r\n      if (\r\n        item.value.match(\r\n          /^((\\+7|7|8)+\\(?([0-9]){3}\\)?)(\\-?([0-9]){3})(\\-?([0-9]){2}){2}$/g\r\n        )\r\n      ) {\r\n        item.classList.remove(\"error\");\r\n      }\r\n      break;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValid);\r\n\n\n//# sourceURL=webpack:///./modules/inputValid.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst menu = () => {\n  const menu = document.querySelector(\"menu\");\n\n  const smoothScroll = (e, item) => {\n    e.preventDefault(); //отключяем стандартную прокрутку якоря\n    const blockID = item.getAttribute(\"href\").substr(1); //получаем id элемента, к которому нужно прокрутить\n\n    document.getElementById(blockID).scrollIntoView({\n      //получаем элемент по id, затем совершается прокрутка с заданными параметрами\n      behavior: \"smooth\",\n      block: \"start\",\n    });\n  };\n\n  const handleMenu = () => {\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  document.addEventListener(\"click\", (e) => {\n    switch (true) {\n      case !!e.target.closest(\".close-btn\"):\n      case !!e.target.closest(\".menu\"):\n        handleMenu();\n        break;\n      case !!e.target.matches(\"menu>ul>li>a\"):\n        handleMenu();\n        smoothScroll(e, e.target);\n        break;\n      case !!e.target.closest(\"main>a\"):\n        smoothScroll(e, e.target.closest(\"main>a\"));\n        if (menu.classList.contains(\"active-menu\")) {\n          handleMenu();\n        }\n        break;\n      case !e.target.closest(\"menu\"):\n        if (menu.classList.contains(\"active-menu\")) {\n          handleMenu();\n        }\n        break;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./modules/validator.js\");\n\n\n\n\nconst sendForm = ({ formId, someElement = [] }) => {\n  const form = document.getElementById(formId);\n  const statusBlock = document.createElement(\"img\");\n  statusBlock.classList.add(\"load-img\");\n  const loadUrl = \"../images/loading-svgrepo-com.svg\";\n  const successUrl = \"../images/success-svgrepo-com.svg\";\n  const errorUrl = \"../images/error-svgrepo-com.svg\";\n\n  statusBlock.style.width = \"50px\";\n\n  const validate = (list) => {\n    let success = true;\n\n    (0,_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list);\n\n    list.forEach((input) => {\n      if (input.classList.contains(\"error\")) success = false;\n    });\n\n    return success;\n  };\n\n  const sendData = (data) => {\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n      method: \"POST\",\n      body: JSON.stringify(data),\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n    }).then((res) => res.json());\n  };\n\n  const submitForm = () => {\n    const formData = new FormData(form);\n    const formBody = {};\n    const formElements = form.querySelectorAll(\"input\");\n\n    form.append(statusBlock);\n\n    formData.forEach((val, key) => {\n      if (key === \"user_message\" && val === \"\") {\n        return;\n      }\n      formBody[key] = val;\n    });\n\n    someElement.forEach((elem) => {\n      const element = document.getElementById(elem.id);\n      if (elem.type === \"block\" && element.textContent != 0) {\n        formBody[elem.id] = element.textContent;\n      } else if (elem.type === \"input\" && element.value != \"\") {\n        formBody[elem.id] = element.value;\n      }\n    });\n\n    if (validate(formElements)) {\n      statusBlock.src = loadUrl;\n      sendData(formBody)\n        .then((data) => {\n          formElements.forEach((input) => {\n            statusBlock.src = successUrl;\n            statusBlock.classList.add(\"active\");\n            input.value = \"\";\n          });\n        })\n        .then((data) => {\n          setTimeout(() => {\n            statusBlock.remove();\n            statusBlock.classList.remove(\"active\");\n          }, 2000);\n        })\n        .catch((error) => {\n          statusBlock.src = errorUrl;\n        });\n    } else {\n      statusBlock.src = errorUrl;\n      setTimeout(() => {\n        statusBlock.remove();\n      }, 2000);\n    }\n  };\n  try {\n    if (!form) {\n      throw new Error(\"Верните форму на место\");\n    }\n\n    form.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      submitForm();\n    });\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst validator = (items) => {\n  let flag = true;\n  items.forEach((item) => {\n    switch (true) {\n      case item.matches(\"form input[type=text]\"):\n        if (!item.value.match(/[a-яA-я]{2}/gi)) {\n          flag = false;\n          item.classList.add(\"error\");\n        }\n        break;\n      case item.matches(\"form input[type=email]\"):\n        if (!item.value.match(/^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$/gi)) {\n          flag = false;\n          item.classList.add(\"error\");\n        }\n        break;\n      case item.matches(\"form input[type=tel]\"):\n        if (\n          !item.value.match(\n            /^((\\+7|7|8)+\\(?([0-9]){3}\\)?)(\\-?([0-9]){3})(\\-?([0-9]){2}){2}$/g\n          )\n        ) {\n          flag = false;\n          item.classList.add(\"error\");\n        }\n        break;\n    }\n  });\n  return flag;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n\n//# sourceURL=webpack:///./modules/validator.js?");

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