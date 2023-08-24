export const loader = function () {

    this.Static.text = ""

    let eventSource = this.eventSource(`Questions?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

    eventSource.addEventListener('message', ({ data }) => {
        let records = JSON.parse(data)
        console.log('=641d61=', records)
        this.Static.records = records
        this.init()
    });

}