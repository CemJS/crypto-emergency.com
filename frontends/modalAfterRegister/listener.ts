const listener = {
  "cross": [{
    "front": "changeLanguage",
    "fn": function ({ name, nameOrig, code }) {
      this.Static.lang.name = name
      this.Static.lang.orig = nameOrig
      this.Static.lang.code = code
      this.Static.lang.value = `${name} (${nameOrig})`
      this.fn("checkForm")
      this.init()
    }
  },
  {
    "front": "modalSelectCountry",
    "fn": function ({ name, code }) {
      let splitName = name.split(" (")

      this.Static.country.name = splitName[0]
      this.Static.country.orig = splitName[1].replace(/[{()}]/g, '')
      this.Static.country.code = code
      this.Static.country.value = name
      this.fn("checkForm")
      this.init()
    }
  }
  ]
}

export { listener }