
export const makeFilters = function () {
    let url = `/api/events/News?uuid=${this.Variable.myInfo.uuid}`
    if (this.Variable.DataUrl[1] == "show"){
        url += `&id=${this.Variable.DataUrl[2]}`
        return url
    }

    url += `&lang=ru`
    if (this.Static.catActive != 0) {
        url += `&cat=${this.Static.category[this.Static.catActive].name}`
    }

    if (this.Static.moreid) {
        url += `&moreid=${this.Static.moreid}`
        this.Static.moreid = null
    } else {
        this.Static.records = []
    }
    return url
}

export const addEvent = function () {
    let filters = this.fn("makeFilters")
    let newsListeners = [
        {
            type: "add",
            fn: ({ data }) => {
                let record = JSON.parse(data)
                if (Object.keys(record).length) {
                    this.Static.records.push(record)
                }
                this.init()
            }
        }
    ]
    let showListeners = [
        {
            type: "update",
            fn: ({ data }) => {
                let record = JSON.parse(data)
                if (Object.keys(record).length) {
                    this.Static.record = record
                }
                this.init()
            }
        }
    ]

    if (!this.Events.news) {
        this.Events.news = this.event(filters, newsListeners)
    } else {
        this.Events.news.change(filters, newsListeners)
    }


    if (this.Variable.DataUrl[1] == "show") {
        if (!this.Events.show) {
            this.Events.show = this.event(filters, showListeners)
        } else {
            this.Events.show.change(filters, showListeners)
        }
    }
}