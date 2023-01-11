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

// let nameInput = document
//   .querySelector('form input[name="user_name"]')
//   .getAttribute("name");
// let emailInput = document
//   .querySelector('form input[name="user_email"]')
//   .getAttribute("name");
// let phoneInput = document
//   .querySelector('form input[name="user_phone"]')
//   .getAttribute("name");

// console.log("name   " + nameInput);
// console.log("mail     " + emailInput);
// console.log(phoneInput);

let phoneInput = document
  .querySelector('input[name="user_phone"]')
  .getAttribute("name");
console.log("inp " + phoneInput);
phoneInput = "user_phone" ? console.log("1") : console.log("2");

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
