export const loader = function () {
  this.fn("addEvent", {})

  this.Static.activeCategoryTrade = 'CEX';

  this.Static.cex = 'CEX';
  this.Static.dex = 'DEX';


  let eventSource = this.eventSource(`Trades?uuid=${this.Variable.myInfo.uuid}&courseLine=true`)

  eventSource.addEventListener('message', ({ data }) => {
    let records = JSON.parse(data)
    this.Static.records = records
    // console.log('=f63a78=', this.Static.arr)
    this.init()
  });

  // const function  = ()

  // this.Static.arr = [
  //   {
  //     name: 'Keine Exchange',
  //   },
  //   {
  //     name: 'Exhub',
  //   },
  //   {
  //     name: '7money',
  //   },
  //   {
  //     name: 'MultiChange',
  //   },
  //   {
  //     name: 'NiceChange',
  //   },
  //   {
  //     name: 'BTCSale',
  //   },
  //   {
  //     name: '365cash',
  //   },
  //   {
  //     name: 'Baksman',
  //   },
  //   {
  //     name: 'Mine.Exchange',
  //   },
  //   {
  //     name: 'WM.express',
  //   },
  //   {
  //     name: 'EXline',
  //   },
  //   {
  //     name: 'BlaBla',
  //   },
  //   {
  //     name: 'Bonanza-Obmen',
  //   },
  //   {
  //     name: 'Coco-Pay',
  //   },
  //   {
  //     name: 'Alfabit',
  //   },
  //   {
  //     name: 'CryptoStrike',
  //   },
  //   {
  //     name: 'Transfer24',
  //   },
  //   {
  //     name: 'CoolCoin',
  //   },
  //   {
  //     name: 'CoinDrop',
  //   },
  //   {
  //     name: 'Crypto-Market24',
  //   },
  //   {
  //     name: 'Rapid-Obmen',
  //   },
  //   {
  //     name: 'BelQi',
  //   },
  //   {
  //     name: 'ChangeProject',
  //   },
  //   {
  //     name: 'NordChange',
  //   },
  // ]

  // this.Static.currentPage = 0;
  // this.Static.items = 10;
  // this.Static.start = this.Static.currentPage * this.Static.items;
  // this.Static.end = this.Static.start + this.Static.items;

  // this.Static.paginated = this.Static.arr.slice(this.Static.start, this.Static.end);


  // this.Static.points = Math.ceil(this.Static.arr.length / this.Static.items);


  // this.Static.arrPag = [];

  // for (let i = 0; i < this.Static.points; i++) {
  //   this.Static.arrPag.push(i);
  // }
  // let eventSource = this.eventSource(`Startaps?uuid=${this.Variable.myInfo.uuid}&cat=NFT`)

  // eventSource.addEventListener('message', ({ data }) => {
  //   console.log('=f2b383=', data)
  //   let records = JSON.parse(data)
  //   this.Static.records = records
  //   this.init()
  // });
}