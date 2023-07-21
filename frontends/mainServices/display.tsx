import { Cemjsx } from "cemjs-all"

const services = [
  {
    image: "lenta",
    title: "Лента пользователей"
  },
  {
    image: "question",
    title: "Вопросы и ответы"
  },
  {
    image: "contentmaker",
    title: "Создатели контента"
  },
  {
    image: "expert",
    title: "Эксперты"
  },
  {
    image: "users",
    title: "Пользователи"
  },
  {
    image: "exchange",
    title: "Биржи"
  },
  {
    image: "exchanges",
    title: "Обменники"
  },
  {
    image: "rates",
    title: "Курсы валют"
  },
  {
    image: "ico",
    title: "ICO рейтинг"
  },
  {
    image: "startaps",
    title: "Стартапы",
    url: "/list-startaps",
  },
  {
    image: "news",
    title: "Новости",
    url: "/news"
  },
  {
    image: "career",
    title: "Карьера с нами"
  },
  {
    image: "university",
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
                    <a href={item.url} class="services__link"
                    onclick={this.Fn.link}
                    >
                      <div class="services__image">
                        <img src={`/assets/svg/mainServices/${item.image}.svg`} />
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