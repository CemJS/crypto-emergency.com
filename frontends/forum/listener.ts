export const finish = function () {
  this.Static.tabWidth1 = this.Ref.tabItem1.offsetWidth;
  this.Ref.activeTab.style.width = `${this.Static.tabWidth1}px`;
  return
}
