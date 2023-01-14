"use strict";

const validator = (items) => {
  //
  let nameInput21 = document.querySelector("#form1-name");
  let nameInput22 = document.querySelector("#form2-name");
  //
  let emailInput21 = document.querySelector("#form1-email");
  let emailInput22 = document.querySelector("#form2-email");
  //
  let phoneInput21 = document.querySelector("#form1-phone");
  let phoneInput22 = document.querySelector("#form2-phone");
  //
  let flag = true;
  //
  items.forEach((item) => {
    switch (true) {
      case item.name === "user_name":
        if (!item.value.match(/[a-яA-я]{2}/gi)) {
          flag = false;
          item.classList.add("error");
        }
        break;
      case item.name === "user_email":
        if (
          !item.value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          flag = false;
          item.classList.add("error");
        }
        break;
      case item.name === "user_phone":
        if (
          !item.value.match(
            /^((\+7|7|8)+\(?([0-9]){3}\)?)(\-?([0-9]){3})(\-?([0-9]){2}){2}$/g
          )
        ) {
          flag = false;
          item.classList.add("error");
        }
        break;
    }
  });
  return flag;
};

export default validator;
