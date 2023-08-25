export const loader = function () {
  this.fn("addEvent", {})

  // this.Static.arr = [
  //   {
  //     id: 1,
  //     name: 'Keine Exchange',
  //   },
  //   {
  //     id: 2,
  //     name: 'Exhub',
  //   },
  //   {
  //     id: 3,
  //     name: '7money',
  //   },
  //   {
  //     id: 4,
  //     name: 'MultiChange',
  //   },
  //   {
  //     id: 5,
  //     name: 'NiceChange',
  //   },
  //   {
  //     id: 6,
  //     name: 'BTCSale',
  //   },
  //   {
  //     id: 7,
  //     name: '365cash',
  //   },
  //   {
  //     id: 8,
  //     name: 'Baksman',
  //   },
  //   {
  //     id: 9,
  //     name: 'Mine.Exchange',
  //   },
  //   {
  //     id: 10,
  //     name: 'WM.express',
  //   },
  //   {
  //     id: 11,
  //     name: 'EXline',
  //   },
  //   {
  //     id: 12,
  //     name: 'BlaBla',
  //   },
  //   {
  //     id: 13,
  //     name: 'Bonanza-Obmen',
  //   },
  //   {
  //     id: 14,
  //     name: 'Coco-Pay',
  //   },
  //   {
  //     id: 15,
  //     name: 'Alfabit',
  //   },
  //   {
  //     id: 16,
  //     name: 'CryptoStrike',
  //   },
  //   {
  //     id: 17,
  //     name: 'Transfer24',
  //   },
  //   {
  //     id: 18,
  //     name: 'CoolCoin',
  //   },
  //   {
  //     id: 19,
  //     name: 'CoinDrop',
  //   },
  //   {
  //     id: 20,
  //     name: 'Crypto-Market24',
  //   },
  //   {
  //     id: 21,
  //     name: 'Rapid-Obmen',
  //   },
  //   {
  //     id: 22,
  //     name: 'BelQi',
  //   },
  //   {
  //     id: 23,
  //     name: 'ChangeProject',
  //   },
  //   {
  //     id: 24,
  //     name: 'NordChange',
  //   },
  //   {
  //     id: 25,
  //     name: 'Example exchange1',
  //   },
  //   {
  //     id: 26,
  //     name: 'Example exchange2',
  //   },
  //   {
  //     id: 27,
  //     name: 'Example exchange2',
  //   },
  //   {
  //     id: 28,
  //     name: 'Example exchange3',
  //   },
  //   {
  //     id: 29,
  //     name: 'Example exchange4',
  //   },
  //   {
  //     id: 30,
  //     name: 'Example exchange5',
  //   },
  //   {
  //     id: 31,
  //     name: 'Example exchange6',
  //   },
  //   {
  //     id: 32,
  //     name: 'Example exchange7',
  //   },
  //   {
  //     id: 33,
  //     name: 'Example exchange8',
  //   },
  //   {
  //     id: 34,
  //     name: 'Example exchange9',
  //   },
  //   {
  //     id: 35,
  //     name: 'Example exchange10',
  //   },
  //   {
  //     id: 36,
  //     name: 'Example exchange11',
  //   },
  //   {
  //     id: 37,
  //     name: 'Example exchange12',
  //   },
  //   {
  //     id: 38,
  //     name: 'Example exchange13',
  //   },
  //   {
  //     id: 39,
  //     name: 'Example exchange14',
  //   },
  //   {
  //     id: 40,
  //     name: 'Example exchange15',
  //   },
  //   {
  //     id: 41,
  //     name: 'Example exchange16',
  //   },
  //   {
  //     id: 42,
  //     name: 'Example exchange17',
  //   },
  //   {
  //     id: 43,
  //     name: 'Example exchange18',
  //   },
  //   {
  //     id: 44,
  //     name: 'Example exchange19',
  //   },
  //   {
  //     id: 45,
  //     name: 'Example exchange20',
  //   },
  //   {
  //     id: 46,
  //     name: 'Example exchange21',
  //   },
  //   {
  //     id: 47,
  //     name: 'Example exchange22',
  //   },
  //   {
  //     id: 48,
  //     name: 'Example exchange23',
  //   },
  //   {
  //     id: 49,
  //     name: 'Example exchange24',
  //   },
  //   {
  //     id: 50,
  //     name: 'Example exchange25',
  //   },
  // ]

  this.Static.currentPage = 0;
  this.Static.items = 7;
  this.Static.start = this.Static.currentPage * this.Static.items;
  this.Static.end = this.Static.start + this.Static.items;

  this.Static.paginated = this.Static.arr?.slice(this.Static.start, this.Static.end);

  this.Static.points = Math.ceil(this.Static.arr?.length / this.Static.items);
  this.Static.arrPag = [];
  for (let i = 0; i < this.Static.points; i++) {
    this.Static.arrPag.push(i);
  }
}