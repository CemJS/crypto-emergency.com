export const loader = function () {
  this.Static.steps = [1, 2, 3, 4]
  this.Static.currentStep = 1;
  this.Static.widthSlide = 25;
  this.Static.waitCode = false
  this.Static.time = 60;
  this.Static.passType = "password"


  this.Static.regOneNum = /^\d{1,}$/


  this.Static.code = new Array(6).fill(null)

  //-----------------------

  this.Static.form = {
    email: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Email",
      view: false,
      disable: false
    },
    code: {
      value: "",
      valid: false,
      error: false,
      placeholder: "",
      view: false,
      disable: false
    },
    nickName: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Логин",
      view: false,
      disable: false
    },
    mainLang: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Выбрать язык",
      view: false,
      disable: false
    },
    country: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Выбрать страну",
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
    rePass: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Подтвердите пароль:",
      view: false,
      disable: false
    },
    agree: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваш E-mail",
      view: false,
      disable: false
    },
    isValid: false,
  }
}