export const loader = function () {

  this.Static.makeFilter = {
    cat: "",
    active: "Active"
  }

  this.fn("addEvent", this.Static.makeFilter)

  this.Static.activeIndex = 0
  this.Static.activeTab = 'Active';
  this.Static.icoList = document.querySelector('ico_list');
}