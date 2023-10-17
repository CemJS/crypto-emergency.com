export const makeFilters = function () {
    let url = `/api/events/Startups?uuid=${this.Variable.myInfo.uuid}`
    url += `&lang=ru`
    if (this.Static.catActive != 0) {
        url += `&cat=${this.Static.categories[this.Static.catActive].name}`
    }

    // if (this.Static.moreid) {
    //     url += `&moreid=${this.Static.moreid}`
    //     this.Static.moreid = null
    // } else {
    //     this.Static.records = []
    // }
    return url
}

export const addEvent = function () {
    let filters = this.fn("makeFilters")
    let startupsListeners = [
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
                    console.log('=update=',this.Static.record)
                }
                this.init()
            }
        }
    ]
    console.log('=this.Static.records=',this.Static.records)
    if (!this.Events.startups) {
        this.Events.startups = this.event(filters, startupsListeners)
    } else {
        this.Events.startups.change(filters, startupsListeners)
    }


    if (this.Variable.DataUrl[1] == "show") {
        if (!this.Events.show) {
            this.Events.show = this.event(filters, showListeners)
        } else {
            this.Events.show.change(filters, showListeners)
        }
    }
}


// export const addEvent = function ({ cat }) {
//     let url = `Startaps?uuid=${this.Variable.myInfo.uuid}`
//     if (cat) {
//         url += `&cat=${cat}`
//     }
//     let eventSource

//     if (this.Ref.startapsList) {
//         this.Ref.startapsList.classList.add('animated');
//         setTimeout(() => {
//             this.Ref.startapsList.classList.remove('animated');
//         }, 500)
//     }

//     if (this._ListsEventSource.length) {
//         eventSource = this.eventSourceChange(url)
//     } else {
//         eventSource = this.eventSource(url)
//     }
//     eventSource.addEventListener('add', ({ data }) => {
//         if (!this.Static.records) {
//             this.Static.records = []
//         }
//         let record = JSON.parse(data)
//         this.Static.records.push(record)
//         this.init()
//     });
//     return
// }
