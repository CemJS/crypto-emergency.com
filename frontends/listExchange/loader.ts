export const loader = function () {
  this.fn("addEvent", {})

  this.Static.activeIndex = 0
  this.Static.activeTab = 'Active';
  this.Static.icoList = document.querySelector('ico_list');
  // let eventSource = this.eventSource(`Startaps?uuid=${this.Variable.myInfo.uuid}&cat=NFT`)

  // eventSource.addEventListener('message', ({ data }) => {
  //   console.log('=f2b383=', data)
  //   let records = JSON.parse(data)
  //   this.Static.records = records
  //   this.init()
  // });
}