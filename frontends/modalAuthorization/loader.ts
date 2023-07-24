export const loader = function () {
  this.Static.buttonActive = "email";
  this.Static.viewPassword = false;
  this.Static.email = {
    value: "",
    valid: false,
    error: false,
    label: "E-mail",
    placeholder: "Введите ваш E-mail",
    type: "text",
  }

  this.Static.phone = {
    value: "",
    code: 7,
    abbr: "ru",
    placeholder: "9990000000",
    valid: false,
    error: false,
    label: "Телефон",
  }

  this.Static.pass = {
    value: "",
    valid: false,
    error: false,
    label: "Пароль",
    placeholder: "Введите ваш пароль",
    type: `${this.Static.viewPassword ? 'text' : 'password'}`,
  }

  this.Static.isValid = false

  this.initAuto(["buttonActive", "viewPassword"]);
}