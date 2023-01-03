/*jshint esversion: 6 */

"use strict";

const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const mouseScroll = document.querySelector("main>a");

  const smoothScroll = (e, item) => {
    e.preventDefault();
    const blockID = item.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  menuItems.forEach((item) =>
    item.addEventListener("click", (event) => {
      handleMenu();
      smoothScroll(event);
    })
  );

  mouseScroll.addEventListener("click", (event) => {
    smoothScroll(event);
  });
};

export default menu;
