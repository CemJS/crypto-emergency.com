export const close = function (e) {
  this.Ref.modalWindow.classList.remove('activeModal');
  setTimeout(() => { this.clearData() }, 500)
  this.Variable.$el.body.style.overflow = 'auto';
}

export const checkFrom = function () {
  console.log('=f99de2=', 123)
  if (this.Static.email.valid && this.Static.pass.valid && this.Static.repeatPass.valid && this.Static.check) {
    this.Static.isValid = true
  } else {
    this.Static.isValid = false
  }

  this.init()
}

export const handleKeyUp = function (e, index) {
  let arrElements = e.target.parentElement.children;
  if (e.key === "Backspace" && this.Static.code[index] !== "") {
    this.Static.code[index] = "";
    arrElements[index].focus();
  } else if (e.key === "Backspace" && this.Static.code[index] == "" && index !== 0) {
    this.Static.code[index - 1] = "";
    arrElements[index - 1].value = ""
    arrElements[index - 1].focus();
  }
  if (e.key === "ArrowLeft" && index > 0) {
    arrElements[index - 1].focus();
  }
  if (e.key === "ArrowRight" && index < arrElements.length - 1) {
    arrElements[index + 1].focus();
  }
}

export const timer = function () {
  const timer = setInterval(() => {
    this.Static.time = this.Static.time - 1
    this.init()
    if (this.Static.time <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}

export const resetTimer = function () {
  this.Static.time = 60
  this.init()
}

export const validEmail = function (email: string) {
  if (!this.Static.regEmail.test(email)) {
    this.Ref.statusEmail.style.color = "#E84142"
    this.Ref.statusEmail.innerText = "Неправильно введён email!"
    this.Ref.emailField.classList.add("modalWindow_field__error")
    return false
  } else {
    this.Ref.statusEmail.style.color = "#5FAC09";
    this.Ref.statusEmail.innerText = "Email введён корректно!"
    this.Ref.emailField.classList.remove("modalWindow_field__error")
    setTimeout(() => {
      this.Ref.statusEmail.innerText = ""
    }, 2000)
    // this.Ref.confirmCode.classList.add("modalReg-confirmCode__active")
    // this.fn("timer")
    this.Ref.regBtnEmail.classList.remove("btn_passive")
    return true
  }
}

export const isEmailPlatform = function (answer) {
  console.log('=37a859=', answer.error)
  console.log('=37a855=', answer.result)

  if (answer.result) {

    return true
  }
  if (answer.error) {
    return false
  }
}

export const clickNext = function (slidePage, indicator) {
  slidePage.style.marginLeft = `-${this.Static.widthSlide * this.Static.currentStep}%`
  this.Static.currentStep++;
  indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
  this.init();
}

export const clickPrev = function (indicator) {
  this.Static.currentStep = --this.Static.currentStep;
  indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
}

