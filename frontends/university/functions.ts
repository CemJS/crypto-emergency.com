const fn = {
  "addEvent": function ({ cat, cost, id }) {
    let url = `UniverCourses?uuid=${this.Variable.myInfo.uuid}`

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

    if(id) {
      url += `&id=${id}`
    }

    let eventSourceCourses

    if (this._ListsEventSource.length) {
      eventSourceCourses = this.eventSourceChange(url)
    } else {
      eventSourceCourses = this.eventSource(url)
    }
    eventSourceCourses.addEventListener('message', ({ data }) => {
      let records = JSON.parse(data)
      this.Static.recordsCourses = records
      this.init()
    });
  }
}

export { fn }