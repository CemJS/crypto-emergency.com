export const loader = function () {
  this.Static.category = "security"
  this.Static.burger = true

  this.Static.pass = {
    value: "",
    valid: false,
    error: true,
    view: false,
    placeholder: "Введите ваш пароль",
  }

  this.Static.repeatPass = {
    value: "",
    valid: false,
    error: true,
    view: false,
    placeholder: "Введите ваш пароль",
  }

  this.initAuto(['burger', 'category'])
}