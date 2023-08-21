export const loader = function () {

  this.fn("addEvent")

  this.Static.makeFilter = {
    nickname: "",
    basic: false,
    expert: false,
    creator: false
  }
}