export const addFilter = function ({ cat, active }) {
    let url = `/api/events/Ico?uuid=${this.Variable.myInfo.uuid}`

    if (cat && active) {
        url += `&cat=${cat}`
        url += `&active=${active}`
    }

    if (cat && cat != "Все") {
        url += `&cat=${cat}`
    }

    if (active) {
        url += `&active=${active}`
    }
    return url





    // let eventSource

    // // if (this.Ref.icoList) {
    // //     this.Ref.icoList.classList.add('animated');
    // //     setTimeout(() => {
    // //         this.Ref.icoList.classList.remove('animated');
    // //     }, 500)
    // // }

    // if (this._ListsEventSource.length) {
    //     eventSource = this.eventSourceChange(url)
    // } else {
    //     eventSource = this.eventSource(url)
    // }
    // eventSource.addEventListener('add', ({ data }) => {
    //     if (!this.Static.records) {
    //         this.Static.records = []
    //     }
    //     let record = JSON.parse(data)
    //     this.Static.records.push(record)
    //     this.init()
    // });
    // return
}