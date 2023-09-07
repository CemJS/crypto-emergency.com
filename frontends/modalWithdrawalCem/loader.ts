export const loader = function () {
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

}