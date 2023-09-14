export const loader = function () {
  this.Static.awards = [
    {
      title: "Добро пожаловать",
      text: "За регистрацию на сайте",
      reward: "CEMD",
      exp: 0.5,
      received: true,
      image: 0
    },
    {
      title: "Любопытство",
      text: "1 вопросов задано на платформе",
      reward: "exp",
      exp: 10,
      received: true,
      image: 1
    },
    {
      title: "Ответчик",
      text: "1 ответов на вопрос предложено на платформе",
      reward: "exp",
      exp: 10,
      received: true,
      image: 2
    },
    {
      title: "Отличник",
      text: "1 ответов выбраны лучшими",
      reward: "CEMD",
      exp: 0.5,
      received: true,
      image: 3
    },
    {
      title: "Вот она слава",
      text: "250 подписчиков на Ваш профиль",
      reward: "CEMD",
      exp: 7,
      progress: 32,
      result: 250,
      received: false,
      image: 4
    },
    {
      title: "Автор",
      text: "1 постов опубликовано на платформе",
      reward: "CEMD",
      exp: 0.5,
      received: true,
      image: 5
    },
    {
      title: "Ботовод",
      text: "1 активных приглашенных пользователей",
      reward: "exp",
      exp: 10,
      progress: 0,
      result: 1,
      received: false,
      image: 6
    },
    {
      title: "Вас оценили",
      text: "100 рейтинга получено на платформе",
      reward: "CEMD",
      exp: 0.5,
      progress: 75,
      result: 100,
      received: false,
      image: 7
    },
  ]
}