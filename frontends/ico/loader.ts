export const loader = function () {
    this.Static.records = []
    this.Static.record = null
    this.Static.catActive = 0

    this.Static.categories = [
        {
            name: 'Все',
        },
        {
            name: 'ICO',
        },
        {
            name: 'IDO',
        },
        {
            name: 'IEO',
        },
        {
            name: 'IGO',
        },
        {
            name: 'IFO'
        }
    ]
    this.Static.makeFilter = {
        cat: 0,
        active: "Active"
    }
    this.fn("addEvent")
    this.Static.activeIndex = 0


     //Categories
     this.Static.isDrag = false;
     this.Static.startX;
     this.Static.startScrollLeft;
     this.Static.body = document.querySelector('body');
     this.Static.x1 = null;
     this.Static.y1 = null;
     return
}
