const categoryLine = function ({ event, name }) {
    this.Static.makeFilter.cat = name
    this.fn("addEvent", this.Static.makeFilter)
}


export const cross = [{ "front": "categoryLine", fn: categoryLine }]



export const finish = function () {
    this.Static.tabWidth = this.Ref.tabsItem.offsetWidth;
    this.Ref.tabsSlider.style.width = `${this.Static.tabWidth}px`;
    this.Static.cardHeight = this.Ref.card?.clientHeight;
    this.Static.cardWidth = this.Ref.card?.clientWidth;
    return
}