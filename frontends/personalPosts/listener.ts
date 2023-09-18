const changeLanguage = function ({ name, nameOrig, code }) {
  this.Static.data.lang = name
  // this.Static.lang.name = name
  // this.Static.lang.orig = nameOrig
  // this.Static.lang.code = code
  this.init()
}

export const cross = [{ front: "changeLanguage", fn: changeLanguage }]
