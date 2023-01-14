"use strict";

const validator = (items) => {
  let flag = true;
  items.forEach((item) => {
    switch (true) {
      case item.name === "user_name":
        if (!item.value.match(/[a-яA-я]{2}/gi)) {
          flag = false;
          item.classList.add("error");
        }
        if (item.value.match(/[a-яA-я]{2}/gi)) {
          item.classList.remove("error");
        }
        break;
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
        if (
          item.value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          item.classList.remove("error");
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
        if (
          item.value.match(
            /^((\+7|7|8)+\(?([0-9]){3}\)?)(\-?([0-9]){3})(\-?([0-9]){2}){2}$/g
          )
        ) {
          item.classList.remove("error");
        }
        break;
    }
  });
  return flag;
};

export default validator;
