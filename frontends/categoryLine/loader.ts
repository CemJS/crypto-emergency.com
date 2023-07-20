export const loader = function () {
  this.Static.isDrag = false;
  this.Static.startX;
  this.Static.startScrollLeft;
  this.Static.body = document.querySelector('body');
  this.Static.x1 = null;
  this.Static.y1 = null;
}