const listener = {
  "cross": [{
    "front": "changeLanguage",
    "fn": function ({ name, nameOrig, code }) {
      this.Static.lang.eng_name = name
      this.Static.lang.orig_name = nameOrig
      this.Static.lang.code = code
      this.Static.langValue = `${name} (${nameOrig})`
      this.init()
    }
  },
  ]
}

export { listener }