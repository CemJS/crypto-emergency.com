
export const makeFilters = function () {
    let url = `?uuid=${this.Variable.myInfo.uuid}`
    url += `&lang=ru`
    if (this.Static.catActive != 0) {
        url += `&cat=${this.Static.category[this.Static.catActive].name}`
    }
    return url
}

export const addEvent = function () {
    let filters = this.fn("makeFilters")
    this.Events.news = this.event(`/api/events/News${filters}`, [
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
    ])

    if (this.Variable.DataUrl[1] == "show") {
        this.Events.show = this.event(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&id=${this.Variable.DataUrl[2]}`, [
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
        ])
    }
}


export const changeEvent = function () {
    let filters = this.fn("makeFilters")
    this.Events.news.change(`/api/events/News${filters}`, [
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
    ])
}