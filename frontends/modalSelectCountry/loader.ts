import allCountries from "json/allCountries.json"

export const loader = function () {
  this.Static.listCountries = allCountries
  this.Static.search = ""
}