import { Cemjsx } from "cemjs-all"

export default function () {

  switch (this.Static.page) {
    case "lenta":
      return (
        <div class="personal-block__container">
          <div class="personal-block__posts">
            <div class="personal-block__posts_header">
              <h2>Лента пользователя</h2>
              <ul class="personal-block__posts_toggle">
                <li>
                  <div class="personal-block__posts_list"></div>
                </li>
                <li>
                  <div class="personal-block__posts_tile"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    case "about":
      return (
        <div class="personal-block__container">
          <h2>Личная информация</h2>
        </div>
      )
    case "questions":
      return (
        <div class="personal-block__container">
          <h2>Заданные вопросы</h2>
        </div>
      )
    case "answers":
      return (
        <div class="personal-block__container">
          <h2>Предложенные ответы</h2>
        </div>
      )
    case "followers":
      return (
        <div class="personal-block__container">
          <div class="personal-block__header">
            <h2>Подписчики</h2>
          </div>
        </div>
      )
    case "friends":
      return (
        <div class="personal-block__container">
          <div class="personal-block__header">
            <h2>Мои подписки</h2>
          </div>
        </div>
      )
    case "awards":
      return (
        <div class="personal-block__container">
          <h2>Полученные награды</h2>
        </div>
      )
    case "social":
      return (
        <div class="personal-block__container">
          <div class="personal-block__header">
            <h2>Социальные сети</h2>
          </div>
        </div>
      )
    case "gallery":
      return (
        <div class="personal-block__container">
          <div class="personal-block__header">
            <h2>Галерея</h2>
          </div>
        </div>
      )
  }
}