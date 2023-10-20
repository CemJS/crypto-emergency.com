import { Gallery, Display, init } from '@elements/Gallery'


export const makeFilters = function () {
    let url = `/api/events/Banners?uuid=${this.Variable.myInfo.uuid}`
    url += `&lang=ru`
    this.Static.records = []
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
        }
    ]

    if (!this.Events.banners) {
        this.Events.banners = this.event(filters, Listeners)
    } else {
        this.Events.banners.change(filters, Listeners)
    }
}

// export const slider = function () {
//     console.log('=a9ec2c=', 123)
//     // Slider()
// }