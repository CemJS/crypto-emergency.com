const changeLanguage = function ({ name, nameOrig, code }) {
  this.Static.lang.name = name
  this.Static.lang.orig = nameOrig
  this.Static.lang.code = code
  this.Static.lang.value = `${name} (${nameOrig})`
  this.fn("checkForm")
  this.init()
}

const modalSelectCountry = function ({ name, code }) {
  let splitName = name.split(" (")

  this.Static.country.name = splitName[0]
  this.Static.country.orig = splitName[1].replace(/[{()}]/g, '')
  this.Static.country.code = code
  this.Static.country.value = name
  this.fn("checkForm")
  this.init()
}

export const cross = [{ "front": "changeLanguage", fn: changeLanguage }, { "front": "modalSelectCountry", fn: modalSelectCountry }]



export const finish = function () {
  this.Static.tabWidth = this.Ref.tabsItem.offsetWidth;
  this.Ref.tabsSlider.style.width = `${this.Static.tabWidth}px`;
  this.Static.cardHeight = this.Ref.card?.clientHeight;
  this.Static.cardWidth = this.Ref.card?.clientWidth;
  return
}