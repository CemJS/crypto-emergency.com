const fn = {
  "addEvent": function ({ cat, cost }) {
    let url = `UniverCourses?uuid=${this.Variable.myInfo.uuid}`
    if (cat) {
      url += `&cat=${cat}`
    }
    if (cost) {
      url += `&cost=${cost}`
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
      this.Static.listCourses = this.Static.recordsCourses
      console.log('=1d7656=',this.Static.recordsCourses)
      this.init()
    });
  }
}

export { fn }