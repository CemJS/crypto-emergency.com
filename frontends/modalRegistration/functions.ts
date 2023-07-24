const fn = {
  "checkForm": function () {
    console.log('=1eb904=',this.Static.email.valid, this.Static.pass.valid, this.Static.repeatPass.valid, this.Static.check)
    if (this.Static.email.valid && this.Static.pass.valid && this.Static.repeatPass.valid && this.Static.check) {
      this.Static.isValid = true
    } else {
      this.Static.isValid = false
    }

    this.init()
  },
}

export { fn }