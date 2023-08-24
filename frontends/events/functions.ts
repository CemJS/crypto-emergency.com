

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
            // console.log('=records=', records)
            this.Static.records = records
            this.Static.filtredRecords = this.Static.records        
    this.Static.uniqueCountries =  this.Static.classObject.getUniqueArrayByField('country')
    this.Static.uniqueCategories = this.Static.classObject.getUniqueArrayByField('category')
    this.Static.filtredRecords = this.Static.records
            this.init()
        });
    }
}

export { fn }