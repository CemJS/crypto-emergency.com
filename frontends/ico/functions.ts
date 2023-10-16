export const addEvent = function () {
    this.Static.url = `/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&cat=${this.Static.makeFilter.cat}&active=${this.Static.makeFilter.active}`

    // if (cat && active) {
    //     this.Static.url += `&cat=${cat}`
    //     this.Static.url += `&active=${active}`
    // }

    // if (cat) {
    //     this.Static.url += `&cat=${cat}`
    // }

    // if (active) {
    //     this.Static.url += `&active=${active}`
    // }

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

    export const change = function () {
        this.Static.records = []
        if (this.Static.makeFilter.cat == 0) {
            this.Events.ico.change(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&lang=ru&active=${this.Static.makeFilter.active}`, [
                {
                    type: "add",
                    fn: ({ data }) => {
                        let record = JSON.parse(data)
                        if (Object.keys(record).length) {
                            this.Static.records.push(record)
                        }
                        this.init()
                    }
                }
            ])
        } else {
            console.log('=dcbe86=',this.Static.makeFilter.cat)
            this.Events.ico.change(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&cat=${this.Static.categories[this.Static.makeFilter.cat].name}&active=${this.Static.makeFilter.active}`, [
                {
                    type: "add",
                    fn: ({ data }) => {
                        let record = JSON.parse(data)
                        if (Object.keys(record).length) {
                            this.Static.records.push(record)
                        }
                        this.init()
                    }
                }
            ])



        }
    }

