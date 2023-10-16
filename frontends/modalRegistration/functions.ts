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
  }

  if (this.Static.currentStep == 1 && this.Static.waitCode) {

    if (this.Static.form.code.valid && this.Static.form.email.valid) {

      let data = {
        action: "checkEmailCode",
        email: this.Static.form.email.value,
        code: this.Static.form.code.value
      }

      let answer = await this.Services.functions.sendApi(`/api/events/Users?uuid=${this.Variable.myInfo.uuid}`, data)

      console.log('=cf5976=', answer)
      if (answer.error) {
        this.Static.form.code.error = "Код указан не верно!"
        this.init()
        return
      }

      this.Static.waitCode = false
      this.Static.form.isValid = false
      this.fn("clickNext")
      return
    }
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
    this.init()
    return
  }

  this.Static.waitCode = true
  this.Static.form.email.disable = true
  this.fn("timer", 60)
  this.init()

}

// export const handleKeyUp = function (e, index) {
//   let arrElements = e.target.parentElement.children;
//   if (e.key === "Backspace" && this.Static.code[index] !== "") {
//     this.Static.code[index] = "";
//     arrElements[index].focus();
//   } else if (e.key === "Backspace" && this.Static.code[index] == "" && index !== 0) {
//     this.Static.code[index - 1] = "";
//     arrElements[index - 1].value = ""
//     arrElements[index - 1].focus();
//   }
//   if (e.key === "ArrowLeft" && index > 0) {
//     arrElements[index - 1].focus();
//   }
//   if (e.key === "ArrowRight" && index < arrElements.length - 1) {
//     arrElements[index + 1].focus();
//   }
// }

export const timer = function (sec: number) {
  this.Static.time = sec
  const timer = setInterval(() => {
    this.Static.time = this.Static.time - 1
    this.init()
    if (this.Static.time <= 0) {
      clearInterval(timer)
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

