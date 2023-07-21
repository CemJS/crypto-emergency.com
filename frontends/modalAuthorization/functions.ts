const fn = {
  "checkForm": function () {
    
    if (!this.Static.email.valid) {
      this.Static.isValid = false
      return
    }
    if (!this.Static.pass.valid) {
      this.Static.isValid = false
      return
    }

    this.Static.isValid = true
    
    this.init()
    return this.Static.isValid
  }
}

export { fn }