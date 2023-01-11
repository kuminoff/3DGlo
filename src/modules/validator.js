"use strict";

const validator = (items) => {
  let phoneInput = document
    .querySelector('input[name="user_phone"]')
    .getAttribute("name");
  console.log("val " + phoneInput);
  let flag = true;
  items.forEach((item) => {
    switch (true) {
      case item.matches("form input[type=text]"):
        if (!item.value.match(/[a-яA-я]{2}/gi)) {
          flag = false;
          item.classList.add("error");
        }
        break;
      case item.matches("form input[type=email]"):
        if (!item.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gi)) {
          flag = false;
          item.classList.add("error");
        }
        break;
      case phoneInput:
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
