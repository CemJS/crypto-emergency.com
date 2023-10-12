export const loader = function () {
    this.Events.news = this.event(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

    this.Events.news.addEventListener('add', ({ data }) => {
        if (!this.Static.records) {
            this.Static.records = []
        }
        let record = JSON.parse(data)
        this.Static.records.push(record)
        this.init()
    });

    this.Static.text = ""
    this.Static.textCom = ""
    this.Static.recordsCommentsInner = []
}