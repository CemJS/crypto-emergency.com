export const loader = function () {
    this.Static.records = []
    this.Events.news = this.event(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

    this.Events.news.addEventListener('add', ({ data }) => {
        let record = JSON.parse(data)
        if (Object.keys(record).length) {
            this.Static.records.push(record)
        }
        this.init()
    });
}