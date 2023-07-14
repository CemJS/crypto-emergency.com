export const loader = function () {
  this.eventSource(`Banners?uuid=${this.Variable.myInfo.uuid}&lang=en`, ({ data }) => {
    let records = JSON.parse(data)

    this.Static.records = records
    this.init()
  })
}