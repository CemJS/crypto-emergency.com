export const loader = function () {

  this.Static.records = []
  this.Static.catActive = 0
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
  
  this.fn("addEvent")

  //Categories
  this.Static.isDrag = false;
  this.Static.startX;
  this.Static.startScrollLeft;
  this.Static.body = document.querySelector('body');
  this.Static.x1 = null;
  this.Static.y1 = null;
  return
}