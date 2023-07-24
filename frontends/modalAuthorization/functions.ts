const fn = {
  "checkForm": function () {

    if (this.Static.pass.valid) {
      if (this.Static.email.valid || this.Static.phone.valid) {
        this.Static.isValid = true
      } else {
        this.Static.isValid = false
      }
    }
    
    this.init()
  },
  "resetField": function (active: string) {
    this.Static.email.value = ""
    this.Static.email.valid = false
    this.Static.phone.value = ""
    this.Static.phone.valid = false
    this.fn("checkForm")
    this.Static.buttonActive = active
  }
}

export { fn }