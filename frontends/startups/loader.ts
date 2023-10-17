export const loader = function () {

  this.Static.records = []
  this.Static.categories = [
    {
      name: "Все",
    },
    {
      name: "DeFi",
    },
    {
      name: "Web3",
    },
    {
      name: "IT",
    },
    {
      name: "Games",
    },
    {
      name: "NFT",
    },
    {
      name: "Blockchain",
    },
    {
      name: "Bridge",
    },
    {
      name: "Wallet",
    },
    {
      name: "Cloud",
    },
    {
      name: "Services",
    },
  ]

  this.Static.catActive = 0
  this.fn("addEvent")
  // let eventSource = this.eventSource(`Startaps?uuid=${this.Variable.myInfo.uuid}&cat=NFT`)

  // eventSource.addEventListener('message', ({ data }) => {
  //   console.log('=f2b383=', data)
  //   let records = JSON.parse(data)
  //   this.Static.records = records
  //   this.init()
  // });
}