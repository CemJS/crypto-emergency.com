export const loader = function () {

  let eventSource = this.eventSource(`CoinsCourse?uuid=${this.Variable.myInfo.uuid}&courseLine=true`)
  eventSource.addEventListener('message', ({ data }) => {
    let records = JSON.parse(data)
    this.Static.records = records
    this.init()
  });
}