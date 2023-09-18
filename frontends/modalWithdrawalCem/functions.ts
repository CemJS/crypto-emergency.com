export const checkForm = function () {
  if (this.Static.email.valid && this.Static.pass.valid && this.Static.repeatPass.valid && this.Static.check) {
    this.Static.isValid = true
  } else {
    this.Static.isValid = false
  }

  this.init()
  return
}

