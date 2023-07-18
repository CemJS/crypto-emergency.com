export const loader = function () {


  let eventSource = this.eventSource(`Banners?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

  eventSource.addEventListener('message', ({ data }) => {
    let records = JSON.parse(data)
    this.Static.records = records
    this.init()
  });
}