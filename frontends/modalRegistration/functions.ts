export const checkFrom = function () {
  console.log('=f99de2=', 123)
  if (this.Static.email.valid && this.Static.pass.valid && this.Static.repeatPass.valid && this.Static.check) {
    this.Static.isValid = true
  } else {
    this.Static.isValid = false
  }

  this.init()
}

export const showDropdown = function (dropdown, value) {
  dropdown.value = value;
  this.init()
}

export const clickNext = function (slidePage, indicator) {
  console.log('=088ef9=', this.Static.currentStep)
  // let widthSlide = 25
  // console.log('=6b3427=', slidePage)
  // slidePage.style.marginLeft = `-${widthSlide * this.Static.currentStep}%`
  // this.Static.currentStep = ++this.Static.currentStep;
  // indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
  this.init();
}

export const clickPrev = function () { }