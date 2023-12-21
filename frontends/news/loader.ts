import categoryNews from "@json/categoryNews"

export const loader = function () {
    this.Static.records = []
    this.Static.record = null
    this.Static.category = categoryNews
    this.Static.catActive = 0
    this.fn("addEvent")


    //Categories
    this.Static.isDrag = false;
    this.Static.startX;
    this.Static.startScrollLeft;
    this.Static.body = document.querySelector('body');
    this.Static.x1 = null;
    this.Static.y1 = null;



    //line
    //     this.Static.isDrag = false;
    //   this.Static.startX;
    //   this.Static.startScrollLeft;
    //   this.Static.body = document.querySelector('body');
    //   this.Static.x1 = null;
    //   this.Static.y1 = null;
    return
}