/*jshint esversion: 6 */

import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import calcValid from "./modules/calcValid.js";
import formValid from "./modules/formValid.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js";
import sendForm from "./modules/sendForm.js";
// //
// let phoneInput1 = document
//   .querySelector("#form1-phone" || "#form2-phone")
//   .getAttribute("name");
// console.log(phoneInput1);
// //
// let nameInput21 = document.querySelector("#form1-name");
// let nameInput22 = document.querySelector("#form2-name");
// //
// let emailInput21 = document.querySelector("#form1-email");
// let emailInput22 = document.querySelector("#form2-email");
// //
// let phoneInput21 = document.querySelector("#form1-phone");
// let phoneInput22 = document.querySelector("#form2-phone");
// //
// console.log(nameInput21);
// console.log(emailInput21);
// console.log(phoneInput21);

// //
// console.log(nameInput22);
// console.log(emailInput22);
// console.log(phoneInput22);
// //
timer("24 january 2023");
menu();
modal();
calcValid();
formValid();
tabs();
slider(
  "portfolio-content",
  "portfolio-item",
  "portfolio-dots",
  "dot",
  "portfolio-btn",
  "portfolio-item-active",
  "dot-active"
);
calc(100);
sendForm({
  formId: "form1",
  someElement: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElement: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElement: [
    {
      type: "block",
      id: "total",
    },
  ],
});
