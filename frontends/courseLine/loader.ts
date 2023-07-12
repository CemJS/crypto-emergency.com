export const loader = function () {

  // console.log('=49e798=',this)

  this.eventSource(`CoinsCourse?uuid=${this.Variable.myInfo.uuid}`, ({ data }) => {
    let records = JSON.parse(data)

    this.Static.records = records
    this.init()
  })
}