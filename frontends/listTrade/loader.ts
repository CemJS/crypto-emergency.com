export const loader = function () {
  this.fn("addEvent", {})

  this.Static.catActive = ""

  this.Static.category = ['CEX', 'DEX'];

  // let eventSource = this.eventSource(`Trades?uuid=${this.Variable.myInfo.uuid}&courseLine=true`)

  // eventSource.addEventListener('message', ({ data }) => {
  //   let records = JSON.parse(data)
  //   this.Static.records = records
  //   this.init()
  // });
}