export const addEvent = function ({ cat }) {
    let url = `Startaps?uuid=${this.Variable.myInfo.uuid}`
    if (cat) {
        url += `&cat=${cat}`
    }
    let eventSource

    if (this.Ref.startapsList) {
        this.Ref.startapsList.classList.add('animated');
        setTimeout(() => {
            this.Ref.startapsList.classList.remove('animated');
        }, 500)
    }

    if (this._ListsEventSource.length) {
        eventSource = this.eventSourceChange(url)
    } else {
        eventSource = this.eventSource(url)
    }
    eventSource.addEventListener('add', ({ data }) => {
        if (!this.Static.records) {
            this.Static.records = []
        }
        let record = JSON.parse(data)
        this.Static.records.push(record)
        this.init()
    });
    return
}
