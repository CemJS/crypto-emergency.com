export const loader = function () {

  new EventSource('/api/events/CoinsCourse').addEventListener('message', ({ data }) => {
    let records = JSON.parse(data)

    this.Static.records = records
    this.init()
  })
}