const fn = {
  "addEvent": function ({ nickname, basic, creator, expert }) {
    console.log('=9862f1=',basic, creator, expert)
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

    eventSource.addEventListener('message', ({ data }) => {
      let records = JSON.parse(data)
      console.log('=a22d36=',records)
      this.Static.records = records
      this.init()
    });
  }
}

export { fn }