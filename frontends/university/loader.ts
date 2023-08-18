export const loader = function () {

  // this.Static.

  this.Static.category = [
    {
      name: "Все",
    },
    {
      name: "NFT",
    },
    {
      name: "Crypto",
    },
    {
      name: "Finance",
    },
    {
      name: "Programming",
    },
    {
      name: "Design",
    },
    {
      name: "Crypto Jobs",
    },
    {
      name: "Languages",
    },
  ]

  this.Static.costCourses = [
    {
      cost: "Все",
      name: "all"
    },
    {
      cost: "До 30 000 ₽",
      name: "junior"
    },
    {
      cost: "От 30 000 ₽ до 60 000 ₽",
      name: "middle"
    },
    {
      cost: "От 60 000 ₽ до 100 000 ₽",
      name: "senior"
    },
    {
      cost: "Больше 100 000 ₽",
      name: "lead"
    },
  ]

  this.Static.categoryCurrent = "Все"
  this.Static.costCurrent = "Стоимость"

  this.Static.categoryStatus = "close"
  this.Static.costStatus = "close"

  this.Static.makeFilter = {
    cat: "",
    cost: "",
    search: ""
  }

  this.fn("addEvent", {})

  let eventSource = this.eventSource(`UniverCategories?uuid=${this.Variable.myInfo.uuid}`)

  eventSource.addEventListener('message', ({ data }) => {
    let records = JSON.parse(data)
    this.Static.records = records
    this.init()
  });

  // let eventSourceCourses = this.eventSource(`UniverCourses?uuid=${this.Variable.myInfo.uuid}`)

  // eventSourceCourses.addEventListener('message', ({ data }) => {
  //   let records = JSON.parse(data)
  //   this.Static.recordsCourses = records
  //   this.Static.listCourses = this.Static.recordsCourses

  //   this.init()
  // });

}