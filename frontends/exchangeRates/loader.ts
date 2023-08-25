export const loader = function () {

  let eventSource = this.eventSource(`CoinsCourse?uuid=${this.Variable.myInfo.uuid}`)

  eventSource.addEventListener('message', ({ data }) => {
    let records = JSON.parse(data)
    this.Static.records = records
    this.init()
  });
  eventSource.addEventListener('add', ({ data }) => {
    if (!this.Static.records) {
      this.Static.records = []
    }
    let record = JSON.parse(data)
    this.Static.records.push(record)
    this.init()
  });

  eventSource.addEventListener('update', ({ data }) => {
    let record = JSON.parse(data)
    let index = this.Static.records.findIndex(item => item._id == record._id)
    if (index >= 0) {
      this.Static.records[index] = record
      this.init()
    }
  });

  this.Static.title = "Курсы валют"
}

