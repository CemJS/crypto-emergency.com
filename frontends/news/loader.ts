import categoryNews from "@json/categoryNews"

export const loader = function () {
    this.Static.records = []
    this.Static.record = null
    this.Static.category = categoryNews
    this.Static.catActive = 0
    this.fn("addEvent")
    return
}