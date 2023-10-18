export const loader = function () {
  this.Static.passType = "password"

  this.Static.form = {
    email: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Email",
      view: false,
      disable: false
    },
    pass: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите пароль:",
      view: false,
      disable: false
    },
  }

  // ============================================

  this.Static.email = {
    value: "",
    valid: false,
    error: false,
    label: "E-mail",
    placeholder: "Введите ваш E-mail",
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
  return
}