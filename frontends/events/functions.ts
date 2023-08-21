

const fn = {
    
    "getUniqueArray": function (Array, field) {
        const uniqueArray = new Set();
        Array.forEach(item => {
            uniqueArray.add(item[field])
        });
        
        return Array.from(uniqueArray);
        },

    "addEvent": function ({ cat, country }) {
        let url = `Events?uuid=${this.Variable.myInfo.uuid}`
        console.log('=2b56ba=',cat, country)

        if (cat && country) {
            url += `&cat=${cat}`
            url += `&country=${country}`
          }
      
          if (cat) {
            url += `&cat=${cat}`
          }
          if (country) {
            url += `&country=${country}`
          }

          let eventSource

        if (this._ListsEventSource.length) {
          eventSource = this.eventSourceChange(url)
        } else {
          eventSource = this.eventSource(url)
        }

        eventSource.addEventListener('message', ({ data }) => {
            let records = JSON.parse(data)
            console.log('=641d61=', records)
            this.Static.records = records
            this.init()
        });
    }
}

export { fn }