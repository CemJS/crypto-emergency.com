const changeLanguage = function ({ name, nameOrig, code }) {
  this.Static.form.mainLang.value = code
  this.Static.form.mainLang.nameOrig = nameOrig
  this.Services.functions.formLang(this.Static.form.mainLang)
  this.fn("checkFrom")
}

const changeCountry = function ({ co, ph, na }) {
  this.Static.form.country.value = co
  this.Static.form.country.nameOrig = na
  this.Services.functions.formCountry(this.Static.form.country)
  this.fn("checkFrom")
}

export const cross = [
  { "front": "modalSelectLanguage", fn: changeLanguage },
  { "front": "modalSelectCountry", fn: changeCountry }
]