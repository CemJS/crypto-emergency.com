export const loader = function () {
  this.Static.showAllSpeakers = true;
  this.Static.speakersTabName = 'CryptoЮГ2023';
  this.Static.partnersTabName = 'CryptoЮГ2023';
  this.Static.partnersSlice = []
  this.Static.activeName = 'CryptoЮГ2023';
  this.Static.howMutchSpeakers = 8
  this.Static.activeIndex = 0;

 
  // slider

  this.Static.currentSlide = 0;


  this.Static.maxSlidesPerShift = 5;






  this.initAuto(["value", "value2"], (val, key) => {
    console.log('=eb7653=', 123, val, key)
    if (val > 15) {
      return false
    }
    return true
  })



  // this.initAuto("value",(val,p)=>{
  //   console.log('=eb7653=',123,val,p)
  //   if (val > 15){
  //     return false
  //   }
  //   return true
  // })
  // this.initAuto("value2")
  // let eventSource = this.eventSource(`CoinsCourse?uuid=${this.Variable.myInfo.uuid}&courseLine=true`)

  // eventSource.addEventListener('message', ({ data }) => {
  //   let records = JSON.parse(data)
  //   this.Static.records = records
  //   this.init()
  // });

  // eventSource.addEventListener('update', ({ data }) => {
  //   let record = JSON.parse(data)
  //   let index = this.Static.records.findIndex(item => item._id == record._id)
  //   if (index >= 0) {
  //     this.Static.records[index] = record
  //     this.init()
  //   }
  // });
}