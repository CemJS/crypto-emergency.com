export const loader = function () {


  let eventSource = this.eventSource(`Startaps?uuid=${this.Variable.myInfo.uuid}`)

  eventSource.addEventListener('message', ({ data }) => {
    console.log('=f2b383=', data)
    let records = JSON.parse(data)
    this.Static.records = records
    this.init()
  });
}