export const loader = function () {
  this.Variable.$el.body.style.overflow = 'hidden';

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
    view: false
  }

  this.Static.repeatPass = {
    value: "",
    valid: false,
    error: true,
    view: false
  }
}