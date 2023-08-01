export const loader = function () {
  this.Static.isValid = false
  this.Static.nickname = {
    value: "",
    valid: false,
    error: "",
    placeholder: "Nickname"
  }

  this.Static.lang = {
    value: "",
    valid: false,
    placeholder: "Выберите из списка",
    name: "",
    code: "",
    orig: "",
  }

  this.Static.country = {
    value: "",
    valid: false,
    placeholder: "Выберите из списка",
    name: "",
    code: "",
    orig: ""
  }
}