/*jshint esversion: 6 */

"use strict";

const menu = () => {
  const menu = document.querySelector("menu");

  const smoothScroll = (e) => {
    e.preventDefault();
    const blockID = this.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    switch (true) {
      case !!e.target.closest(".close-btn"):
      case !!e.target.closest(".menu"):
        handleMenu(); //
        break;
      case !!e.target.matches("menu>ul>li>a"):
        handleMenu(); //
        smoothScroll(e);
        break;
      case !!e.target.closest("main>a"):
        smoothScroll(e);
        if (menu.classList.contains("active-menu")) {
          handleMenu(); //
        }
        break;
      case !e.target.closest("menu"):
        if (menu.classList.contains("active-menu")) {
          handleMenu();
        }
        break;
    }
  });
};

export default menu;
