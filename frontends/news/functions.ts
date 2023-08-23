const fn = {
  "addEvent": function ({ cat }) {
    let url = `News?uuid=${this.Variable.myInfo.uuid}&lang=ru`
    if (cat && cat != "Все") {
      url += `&cat=${cat}`
    }
    let eventSource

    if (this._ListsEventSource.length) {
      eventSource = this.eventSourceChange(url)
    } else {
      eventSource = this.eventSource(url)
    }
    eventSource.addEventListener('message', ({ data }) => {
      let records = JSON.parse(data)
      this.Static.records = records
      console.log('=57054c=', this.Static.records)
      this.init()
    });

    eventSource.addEventListener('update', ({ data }) => {
      let records = JSON.parse(data)
      this.Static.recordsUpdate = records
      console.log('=57054c=', this.Static.recordsUpdate)
      this.init()
    });

    eventSource.addEventListener('insert', ({ data }) => {
      // let records = JSON.parse(data)
      // this.Static.recordsUpdate = records
      console.log('=57054c=', data)
      this.init()
    });
  }
}

export { fn }