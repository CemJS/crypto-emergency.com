export const loader = function () {

  this.fn("addEvent", {})

  this.Static.lang = {
    value: "",
    name: "",
    code: "",
    orig: "",
  }

  this.Static.country = {
    value: "",
    name: "",
    code: "",
    orig: ""
  }

  this.Static.makeFilter = {
    nickname: "",
    basic: false,
    creator: false,
    expert: false
  }
}