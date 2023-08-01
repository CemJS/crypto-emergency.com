import languages from 'json/languages.json'

export const loader = function () {
  this.Static.listLang = languages
}