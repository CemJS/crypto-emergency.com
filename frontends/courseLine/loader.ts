export const loader = function () {

  this.eventSource(`/api/events/CoinsCourse?uuid=${this.Variable.myInfo?.uuid}`, ({ data }) => {
    let records = JSON.parse(data)

    this.Static.records = records
    this.init()
  })
}