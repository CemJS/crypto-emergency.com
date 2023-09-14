

const fn = {
    "addEvent": function ({ cat }) {
        let url = `Trades?uuid=${this.Variable.myInfo.uuid}`
        if (cat) {
            url += `&cat=${cat}`
        }
        let eventSource

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
    }
}

export { fn }