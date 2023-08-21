const fn = {
  "addEvent": function ({ nickname, basic, expert, creator }) {
    let url = `Users?uuid=${this.Variable.myInfo.uuid}`

    if (nickname) {
      url += `&nickname=${nickname}`
    }

    if (basic) {
      url += `&basic=${basic}`
    }

    if (expert) {
      url += `&expert=${expert}`
    }

    if (creator) {
      url += `&creator=${creator}`
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
      this.init()
    });
  }
}

export { fn }