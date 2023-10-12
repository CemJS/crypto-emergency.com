export const loader = function () {
    this.Static.records = []

    if (this.Variable.DataUrl[1] == "show") {
        this.Events.show = this.event(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&id=${this.Variable.DataUrl[2]}`)

        this.Events.show.addEventListener('update', ({ data }) => {
            let record = JSON.parse(data)
            if (Object.keys(record).length) {
                this.Static.record = record
            }
            this.init()
        });
    }

    this.Events.news = this.event(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

    this.Events.news.addEventListener('add', ({ data }) => {
        let record = JSON.parse(data)
        if (Object.keys(record).length) {
            this.Static.records.push(record)
        }
        this.init()
    });
}