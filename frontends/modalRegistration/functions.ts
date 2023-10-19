export const show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add('activeModal');
    this.Variable.$el.body.style.overflow = 'hidden';
  }, 100);
}

export const close = function () {
  this.Ref.modalWindow.classList.remove('activeModal');
  setTimeout(() => {
    this.clearData();
    this.Variable.$el.body.style.overflow = 'auto';
  }, 500)
}

export const checkFrom = async function () {

  if (this.Static.currentStep == 1 && !this.Static.waitCode) {
    if (this.Static.form.email.valid) {
      this.Static.form.isValid = true
    } else {
      this.Static.form.isValid = false
    }
    this.init()
    return
  }

  if (this.Static.currentStep == 1 && this.Static.waitCode) {

    if (this.Static.form.code.valid && this.Static.form.email.valid) {

      let data = {
        action: "checkEmailCode",
        email: this.Static.form.email.value,
        code: this.Static.form.code.value
      }

      let answer = await this.Services.functions.sendApi(`/api/events/Users?uuid=${this.Variable.myInfo.uuid}`, data)

      if (answer.error) {
        this.Static.form.code.error = "Код указан не верно!"
        this.init()
        return
      }

      this.Static.waitCode = false
      this.Static.form.isValid = false
      if (this.Static.setInterval) {
        clearInterval(this.Static.setInterval)
      }
      this.fn("clickNext")
      return
    }
    return
  }

  if (this.Static.currentStep == 2) {
    if (this.Static.form.nickName.valid && this.Static.form.mainLang.valid && this.Static.form.country.valid) {
      this.Static.form.isValid = true
    } else {
      this.Static.form.isValid = false
    }
    this.init()
    return
  }

  if (this.Static.currentStep == 3) {
    if (this.Static.form.pass.valid && this.Static.form.rePass.valid) {
      this.Static.form.isValid = true

      let data = {
        action: "registrated",
        password: this.Static.form.pass.value
      }

      let answer = await this.Services.functions.sendApi(`/api/events/Users?uuid=${this.Variable.myInfo.uuid}`, data)

      if (answer.error) { }

      this.fn("clickNext")
      return
    } else {
      this.Static.form.isValid = false
    }
    this.init()
    return
  }
}


export const sendCode = async function () {
  let data = {
    action: "registration",
    email: this.Static.form.email.value,
    step: this.Static.currentStep,
  }

  let answer = await this.Services.functions.sendApi(`/api/events/Users?uuid=${this.Variable.myInfo.uuid}`, data)

  if (answer.error) {
    this.Static.form.email.error = "Пользователь с таким email уже существует!"
    this.Static.form.email.valid = false
    this.init()
    return
  }

  this.Static.waitCode = true
  this.Static.form.email.disable = true
  this.fn("timer", 60)
  this.init()
}

export const changeEmail = function () {
  this.Static.form.email.disable = false
  this.Static.waitCode = false
  this.Static.form.code.value = ""
  this.init()
}
export const timer = function (sec: number) {
  this.Static.time = sec
  if (this.Static.setInterval) {
    clearInterval(this.Static.setInterval)
  }
  this.Static.setInterval = setInterval(() => {
    this.Static.time = this.Static.time - 1
    this.init()
    if (this.Static.time <= 0) {
      clearInterval(this.Static.setInterval)
    }
  }, 1000)
}

export const clickNext = function () {
  this.Ref.slidePage.style.marginLeft = `-${this.Static.widthSlide * this.Static.currentStep}%`
  this.Static.currentStep++;
  this.Ref.indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
  this.init();
}

export const clickPrev = function () {
  this.Static.currentStep = --this.Static.currentStep;
  this.Ref.indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
}

