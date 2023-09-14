export const loader = function () {
  this.Static.body = document.querySelector('body');
  this.Static.check = false
  this.Static.isValid = false
  this.Static.email = {
    value: "",
    valid: false,
    error: false,
    placeholder: "Введите ваш E-mail",
  }

  this.Static.pass = {
    value: "",
    valid: false,
    error: true,
    view: false
  }

  this.Static.repeatPass = {
    value: "",
    valid: false,
    error: true,
    view: false
  }
}