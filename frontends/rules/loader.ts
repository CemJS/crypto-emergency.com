export const loader = function () {

  let eventSource = this.eventSource(`Users?uuid=${this.Variable.myInfo.uuid}`)
  eventSource.addEventListener('add', ({ data }) => {
    if (!this.Static.records) {
      this.Static.records = []
    }
    let record = JSON.parse(data)
    this.Static.records.push(record)
    console.log('=a0c1c2=', this.Static.records)
    this.init()
  });

  this.Static.page = "about";
  this.Static.postGrid = "tile"
  this.Static.galleryList = "all"

  this.Static.arrQuestions = [
    {
      title: "Что такое биткоин?",
      answers: 3,
      views: 14,
      date: "2023-09-08 14:47"
    },
    {
      title: "Какие стейблкоины самые надёжные?",
      answers: 1,
      views: 4,
      date: "2023-09-05 10:22"
    },
    {
      title: "Какие монеты лучше купить если бюджет 100$?",
      answers: 5,
      views: 23,
      date: "2023-09-03 23:18"
    },
    {
      title: "Что такое биткоин?",
      answers: 3,
      views: 14,
      date: "2023-09-08 14:47"
    },
    {
      title: "Какие стейблкоины самые надёжные?",
      answers: 1,
      views: 4,
      date: "2023-09-05 10:22"
    }
  ]

  this.Static.arrAnswers = [
    {
      question: "Что такое биткоин?",
      answer: "Точно предсказать стоимость биткоина в будущем невозможно, так как она зависит от множества факторов, включая спрос и предложение, регулирование, технологические инновации и глобальные экономические события.",
      comments: 3,
      rating: 1,
      date: "2023-09-08 14:47"
    },
    {
      question: "Какие стейблкоины самые надёжные?",
      answer: "Точно предсказать стоимость биткоина в будущем невозможно.",
      comments: 1,
      rating: 0,
      date: "2023-09-05 10:22"
    },
    {
      question: "Какие монеты лучше купить если бюджет 100$?",
      answer: "Точно предсказать стоимость биткоина в будущем невозможно, так как она зависит от множества факторов.",
      comments: 5,
      rating: 0,
      date: "2023-09-03 23:18"
    },
  ]

  this.initAuto(["page", "postGrid", "galleryList"])
}