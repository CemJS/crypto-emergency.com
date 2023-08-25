const fn = {
  "addEvent": function ({ nickname, basic, creator, expert }) {
    let url = `Users?uuid=${this.Variable.myInfo.uuid}`

    if (nickname) {
      url += `&nickname=${nickname}`
    }

    if (basic) {
      url += `&basic=${basic}`
    }

    if (creator) {
      url += `&creator=${creator}`
    }

    if (expert) {
      url += `&expert=${expert}`
    }

    let eventSource

    if (this._ListsEventSource.length) {
      eventSource = this.eventSourceChange(url)
    } else {
      eventSource = this.eventSource(url)
    }

    eventSource.addEventListener('add', ({ data }) => {
      console.log('=d691ec=',data)
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