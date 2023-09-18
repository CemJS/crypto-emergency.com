export const resetField = function (active: string) {
  this.Static.email.value = ""
  this.Static.email.valid = false
  this.Static.phone.value = ""
  this.Static.phone.valid = false
  this.fn("checkForm")
  this.Static.buttonActive = active
}

export const checkForm = function () {
  if (this.Static.pass.valid) {
    if (this.Static.email.valid || this.Static.phone.valid) {
      this.Static.isValid = true
    } else {
      this.Static.isValid = false
    }
  }

  this.init()
  return
}