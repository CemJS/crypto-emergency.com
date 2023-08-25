const fn = {
  "addEvent": function ({ cat, cost, id }) {
    let url = `UniverCourses?uuid=${this.Variable.myInfo.uuid}`

    console.log('=9835cc=', cat, cost, id)

    if (cat && cost) {
      url += `&cat=${cat}`
      url += `&cost=${cost}`
    }

    if (cat) {
      url += `&cat=${cat}`
    }
    if (cost) {
      url += `&cost=${cost}`
    }

    if (id) {
      url += `&id=${id}`
    }

    let eventSourceCourses

    if (this._ListsEventSource.length) {
      eventSourceCourses = this.eventSourceChange(url)
    } else {
      eventSourceCourses = this.eventSource(url)
    }

    eventSourceCourses.addEventListener('add', ({ data }) => {
      console.log('=1562ce=',data)
      if (!this.Static.recordsCourses) {
        this.Static.recordsCourses = []
      }
      let record = JSON.parse(data)
      this.Static.recordsCourses.push(record)
      this.Static.listCourses = this.Static.recordsCourses
      this.init()
    });
  }
}

export { fn }