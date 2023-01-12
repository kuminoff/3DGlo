"use strict";

const inputValid = (item) => {
  switch (true) {
    case item.matches("form input[type=text]"):
      if (item.value.match(/[a-яA-я]{2}/gi)) {
        item.classList.remove("error");
      }
      break;
    case item.matches("form input[type=email]"):
      if (item.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gi)) {
        item.classList.remove("error");
      }
      break;
    case item.matches("form input[type=tel]"):
      if (
        item.value.match(
          /^((\+7|7|8)+\(?([0-9]){3}\)?)(\-?([0-9]){3})(\-?([0-9]){2}){2}$/g
        )
      ) {
        item.classList.remove("error");
      }
      break;
  }
};

export default inputValid;
