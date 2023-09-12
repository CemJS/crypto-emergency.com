export const loader = function () {
  this.Static.notify = "questions"

  this.Static.questionsList = [
    {
      title: "Задан новый вопрос!",
      description: "Задан новый вопрос на ваших языках",
      date: "час назад"
    },
    {
      title: "Новый лайк!",
      description: "Вам поставили лайк. Рейтинг увеличен",
      nickname: "UserName",
      date: "5 сентября 2023"
    },
    {
      title: "Задан новый вопрос!",
      description: "Задан новый вопрос на ваших языках",
      date: "28 августа 2023"
    },
    {
      title: "Новый лайк!",
      description: "Вам поставили лайк. Рейтинг увеличен",
      nickname: "UserName",
      date: "23 августа 2023"
    },
    {
      title: "Задан новый вопрос!",
      description: "Задан новый вопрос на ваших языках",
      date: "17 августа 2023"
    },
  ]

  this.Static.awardsList = [
    {
      title: "Получена награда!",
      description: "За первый заданный вопрос на сайте",
      date: "2 часа назад"
    },
    {
      title: "Получена награда!",
      description: "За первого подписчика",
      date: "6 сентября 2023"
    },
    {
      title: "Получена награда!",
      description: "За первый пост на сайте",
      date: "4 сентября 2023"
    },
    {
      title: "Получена награда!",
      description: "За первый ответ на сайте",
      date: "1 сентября 2023"
    },
  ]

  this.Static.actualNotify = this.Static.questionsList

  this.initAuto(['actualNotify', 'notify'])

}