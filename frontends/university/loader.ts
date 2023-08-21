export const loader = function () {

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

  this.Static.Accordeon = [
    {
      title: "Подойдёт ли мне эта профессия?",
      description: "Для тех, кто сомневается, мы спроектировали бесплатную часть, которая поможет получить ответ на этот вопрос. Если вы убедитесь, что выбранная профессия вам не подходит, — это тоже положительный результат.",
      hidden: true,
    },
    {
      title: "Можно ли обучиться профессии за 5 месяцев?",
      description: "Да, программа рассчитана на это. Но многое зависит и от вас — чтобы пройти курс до конца, нужно уделять учёбе достаточно времени: читать теорию, практиковаться в тренажёре и делать учебные проекты.",
      hidden: true,
    },
    {
      title: "Что делать, если я не справлюсь с нагрузкой?",
      description: "Если вам понадобится сделать паузу в учёбе или уделить больше времени закреплению материала, напишите своему куратору.",
      hidden: true,
    },
    {
      title: "Смогу ли я найти работу после обучения?",
      description: "Гарантий нет, но мы верим, что сможете. Мы составляли программу курса, отталкиваясь от современных требований работодателей и обязанностей, которые указаны в вакансиях продакт-менеджеров. Рынок требует, чтобы вы умели делать что-то на практике, а не просто обладали набором знаний. Поэтому мы научим вас не только владеть всеми необходимыми инструментами по управлению продуктами, но и применять их на практике.",
      hidden: true,
    },
    {
      title: "Если не понравится, я могу вернуть деньги?",
      description: "Да, причём в любой момент. Если обучение в потоке уже началось, придётся оплатить прошедшие дни — но мы вернём деньги за оставшееся время обучения.",
      hidden: true,
    },
  ];

  this.Static.categoryCurrent = "Все"
  this.Static.costCurrent = "Стоимость"

  this.Static.categoryStatus = "close"
  this.Static.costStatus = "close"

  this.Static.makeFilter = {
    cat: "",
    cost: "",
    id: ""
  }

  if (this.Variable.DataUrl[2]) {
    this.Static.makeFilter.id = this.Variable.DataUrl[2]
  }
  this.fn("addEvent", this.Static.makeFilter)

  // this.fn("addEvent", {})

  let eventSource = this.eventSource(`UniverCategories?uuid=${this.Variable.myInfo.uuid}`)

  eventSource.addEventListener('message', ({ data }) => {
    let records = JSON.parse(data)
    this.Static.records = records
    this.init()
  });
}