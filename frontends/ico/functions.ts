export const makeFilters = function (show = false) {
    let url = `/api/events/Ico?uuid=${this.Variable.myInfo.uuid}`
    if (show) {
        url += `&id=${this.Variable.DataUrl[2]}`
        return url
    }

    if (this.Static.makeFilter.cat != 0) {
        url += `&cat=${this.Static.categories[this.Static.makeFilter.cat].name}`
    }
    if (this.Static.makeFilter.active) {
        url += `&active=${this.Static.makeFilter.active}`
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
    let icoListeners = [
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
    if (!this.Events.ico) {
        this.Events.ico = this.event(filters, icoListeners)
    } else {
        this.Events.ico.change(filters, icoListeners)
    }

    if (this.Variable.DataUrl[1] == "show") {
        filters = this.fn("makeFilters", true)
        if (!this.Events.show) {
            this.Events.show = this.event(filters, showListeners)
        } else {
            this.Events.show.change(filters, showListeners)
        }
    }
}


