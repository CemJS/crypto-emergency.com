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
    console.log('=2dd6b9=',url)

    let eventSource

    if (this._ListsEventSource.length) {
      eventSource = this.eventSourceChange(url)
    } else {
      eventSource = this.eventSource(url)
    }

    eventSource.addEventListener('add', ({ data }) => {
      if (!this.Static.records) {
        this.Static.records = []
      }
      let record = JSON.parse(data)
      this.Static.records.push(record)
      console.log('=a0c1c2=', this.Static.records)
      this.init()
    });
  }
}

export { fn }