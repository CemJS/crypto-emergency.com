import { Cemjsx } from "cemjs-all"

const services = [
  {
    image: "lenta_white",
    title: "Лента пользователей"
  },
  {
    image: "question_white",
    title: "Вопросы и ответы"
  },
  {
    image: "main_menu_contentmaker",
    title: "Создатели контента"
  },
  {
    image: "main_menu_expert",
    title: "Эксперты"
  },
  {
    image: "main_menu_users",
    title: "Пользователи"
  },
  {
    image: "exchange_white",
    title: "Биржи"
  },
  {
    image: "main_menu_exchanges",
    title: "Обменники"
  },
  {
    image: "rates_white",
    title: "Курсы валют"
  },
  {
    image: "main_menu_ico",
    title: "ICO рейтинг"
  },
  {
    image: "main_menu_startaps",
    title: "Стартапы"
  },
  {
    image: "main_menu_news",
    title: "Новости"
  },
  {
    image: "career",
    title: "Карьера с нами"
  },
  {
    image: "main_menu_univercsity",
    title: "Крипто университет"
  },
]

export const display = function () {
  return (
    <div class="modal modal_open">
      <div class="modal__black" />
      <div class="services">
        <div class="modal__body services__container">
          <header class="services__header">
            <h2>Сервисы</h2>
            <button
              class="modal__close services__close"
              type="button"
              onclick={() => {
                setTimeout(() => {
                  this.clearData()
                }, 5);
              }}
            />
          </header>
          <main class="services__main">
            <div class="services__wrap">
              {
                services.map((item) => {
                  return (
                    <a href="" class="services__link">
                      <div class="services__image">
                        <img src={`/assets/svg/${item.image}.svg`} />
                      </div>
                      <p>{item.title}</p>
                    </a>
                  )
                })
              }
            </div>
          </main>
        </div>
      </div>
    </div>
  )

}