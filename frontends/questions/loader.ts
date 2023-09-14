export const loader = function () {

    this.Static.text = ""
    this.Static.textCom = ""
    this.Static.recordsComments = []
    this.Static.recordsAnswer = []
    this.Static.eventLength = 0
    this.Static.showComments = "Показать комментарии"

    let eventSource = this.eventSource(`Questions?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

    eventSource.addEventListener('add', ({ data }) => {
        if (!this.Static.records) {
            this.Static.records = []
        }
        let record = JSON.parse(data)
        this.Static.records.push(record)
        this.init()
    });

}