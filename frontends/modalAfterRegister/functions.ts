export const checkForm = function () {
  if (!this.Static.nickname.valid) {
    this.Static.isValid = false
    return
  }

  if (this.Static.lang.name && this.Static.lang.code && this.Static.lang.orig) {
    this.Static.lang.valid = true
  } else {
    this.Static.isValid = false
    return
  }

  if (this.Static.country.name && this.Static.country.code && this.Static.country.orig) {
    this.Static.country.valid = true
  } else {
    this.Static.isValid = false
    return
  }

  this.Static.isValid = true
  this.init()
  return
}

export const addEvent = function ({ lang, langOrig }) {
  if (lang && langOrig) {
    this.Static.lang.name = lang
    this.Static.lang.orig = langOrig
    this.Static.lang.value = `${lang} (${langOrig})`
    this.init()
  }
  return
}