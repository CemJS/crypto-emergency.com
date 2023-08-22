export const loader = function () {
  this.fn("addEvent", {})

  this.Static.makeFilter = {
    cat: "",
    active: "Active"
  }

  this.Static.activeIndex = 0
  this.Static.activeTab = 'Active';
  this.Static.icoList = document.querySelector('ico_list');

}