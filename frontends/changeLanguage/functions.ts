export const changeInput = function (e, list) {
  let inputValue = e.target.value.toLowerCase();
  this.Static.listLang = list.filter((item) => `${item.eng_name} (${item.orig_name})`.toLowerCase().includes(inputValue) == true)
  this.init()
  return
}