export const loader = function () {
    let eventSource = this.eventSource(`Posts?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

    eventSource.addEventListener('message', ({ data }) => {
        let records = JSON.parse(data)
        this.Static.records = records
        this.init()
    });

    eventSource.addEventListener('add', ({ data }) => {
        let records = JSON.parse(data)
        this.Static.records.push(...records)
        this.init()
    });
}