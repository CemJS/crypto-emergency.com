export const loader = function () {
  this.Static.passType = false

  // ============================================

  this.Static.form = {
    login: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Логин",
      view: false,
      disable: false
    },

    pass: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Пароль:",
      view: false,
      disable: false,
    },

    isValid: false,
    error: false
  }


  // this.Static.pass = {
  //   value: "",
  //   valid: false,
  //   error: false,
  //   label: "Пароль",
  //   placeholder: "Введите ваш пароль",
  //   type: `${this.Static.viewPassword ? 'text' : 'password'}`,
  // }

  // this.Static.isValid = false

  this.initAuto(["buttonActive", "viewPassword"]);
  return
}