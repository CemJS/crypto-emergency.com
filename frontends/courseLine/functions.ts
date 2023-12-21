
export const makeFilters = function () {
    let url = `/api/events/CoinsCourse?uuid=${this.Variable.myInfo.uuid}`
    url += `&live=true`
    return url
}

export const addEvent = function () {
    let filters = this.fn("makeFilters")
    let Listeners = [
        {
            type: "add",
            fn: ({ data }) => {
                let record = JSON.parse(data)
                if (Object.keys(record).length) {
                    this.Static.records.push(record)
                }
                this.init()
            }
        },
        {
            type: "update",
            fn: ({ data }) => {
                let record = JSON.parse(data)
                if (Object.keys(record).length) {
                    let index = this.Static.records.findIndex(item => item._id == record._id)
                    if (index >= 0) {
                        this.Static.records[index] = record
                        this.init()
                    }
                }
            }
        }
    ]

    if (!this.Events.coins) {
        this.Events.coins = this.event(filters, Listeners)
    } else {
        this.Events.coins.change(filters, Listeners)
    }
}