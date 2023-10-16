export const loader = function () {


  this.Static.records = []

  if (this.Variable.DataUrl[1] == "show") {
      this.Events.show = this.event(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&id=${this.Variable.DataUrl[2]}`)

      this.Events.show.addEventListener('update', ({ data }) => {
          let record = JSON.parse(data)
          if (Object.keys(record).length) {
              this.Static.record = record
          }
          this.init()
      });
  }

  this.Events.ico = this.event(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

  this.Events.ico.addEventListener('add', ({ data }) => {

    
      let record = JSON.parse(data)
      if (Object.keys(record).length) {
          this.Static.records.push(record)
      }
      this.init()
  });

  this.Static.makeFilter = {
    cat: "",
    active: "Active"
  }

  this.fn("addEvent", this.Static.makeFilter)

  this.Static.activeIndex = 0
  this.Static.activeTab = 'Active';
  this.Static.icoList = document.querySelector('ico_list');
}