export const loader = function () {

  this.Static.body = document.querySelector('body');
  this.Static.steps = [1, 2, 3, 4]
  this.Static.currentStep = 1;
  this.Static.widthSlide = 25;


  this.Static.lang = [
    {
      name: "Русский",
    },
    {
      name: "Английский",
    },
    {
      name: "Немецкий",
    },
    {
      name: "Китайский",
    },
    {
      name: "Армянский",
    },
  ]

  this.Static.countries = [
    {
      name: "Россия"
    },
    {
      name: "Китай"
    },
    {
      name: "Германия"
    },
    {
      name: "Армения"
    },
    {
      name: "Америка"
    }
  ]

  this.Static.email;
  this.Static.regEmail = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$/
  this.Static.regOneNum = /^\d{1,}$/

  this.Static.time = 60;

  this.Static.code = new Array(6).fill("")

  //-----------------------

  this.Static.form = {
    email: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваш E-mail",
      view: false,
      disable: false
    },
    code: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваш E-mail",
      view: false,
      disable: false
    },
    nickName: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваш E-mail",
      view: false,
      disable: false
    },
    mainLang: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваш E-mail",
      view: false,
      disable: false
    },
    country: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваш E-mail",
      view: false,
      disable: false
    },
    pass: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваш E-mail",
      view: false,
      disable: false
    },
    rePass: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваш E-mail",
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
    view: false,
  }

  this.Static.repeatPass = {
    value: "",
    valid: false,
    error: true,
    view: false,
  }
}