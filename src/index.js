/*jshint esversion: 6 */

import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import calcValid from "./modules/calcValid.js";
import formValid from "./modules/formValid.js";
import tabs from "./modules/tabs";
import slider from "./modules/slider.js";

timer("25 january 2023");
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
