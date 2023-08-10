export const loader = function () {

    let eventSource = this.eventSource(`Questions?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

    eventSource.addEventListener('message', ({ data }) => {
        let records = JSON.parse(data)
        console.log('=641d61=', records)
        this.Static.records = records
        this.init()
    });

    // console.log('=d1dfc7=', this)
    // let eventSource1 = this.eventSource(`Answers?uuid=${this.Variable.myInfo.uuid}&id=1`)

    // eventSource1.addEventListener('message', ({ data }) => {
    //     let records = JSON.parse(data)
    //     console.log('=641d61=', records)
    //     this.Static.records1 = records
    //     this.init()
    // });

}