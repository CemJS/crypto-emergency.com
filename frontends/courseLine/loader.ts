export const loader = function () {

  let eventSource = this.eventSource(`CoinsCourse?uuid=${this.Variable.myInfo.uuid}&courseLine=true`)
  eventSource.addEventListener('message', ({ data }) => {
    console.log('=6269c2=', data)
    let records = JSON.parse(data)
    this.Static.records = records
    this.init()
  });
}