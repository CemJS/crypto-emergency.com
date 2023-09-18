export const changeInput = function (e, list) {
  let inputValue = e.target.value.toLowerCase();
  this.Static.listCountries = list.filter((item) => item.na.toLowerCase().includes(inputValue) == true)
  this.init()
  return
}