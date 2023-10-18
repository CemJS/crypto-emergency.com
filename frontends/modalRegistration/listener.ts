const changeLanguage = function ({ name, nameOrig, code }) {
  // console.log('=4c047c=', name, nameOrig, code)
  this.Static.form.mainLang.value = name
  this.Static.form.mainLang.valid = true
  this.Services.functions.formMainLang(this.Static.form.mainLang)
  this.fn("checkFrom")
  this.init()
}

const changeCountry = function ({ co, ph, na }) {
  // console.log('=4c047c=', name, nameOrig, code)
  this.Static.form.country.value = na
  this.Static.form.country.valid = true
  this.Services.functions.formCountry(this.Static.form.country)
  this.fn("checkFrom")
  this.init()
}

export const cross = [
  { "front": "modalSelectLanguage", fn: changeLanguage },
  { "front": "modalSelectCountry", fn: changeCountry }
]