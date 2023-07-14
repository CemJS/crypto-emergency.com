import { Cemjsx } from "cemjs-all"

const arrBlockCard = [
  {
    img: "goal_1",
    // altImg: Variable.lang.p.goalOne,
    title: "Поднять крипто грамотность населения",
    description: "Мы создали платформу, где любой желающий может найти ответ на свой вопрос, и обрести навыки инвестирования в криптовалюту.",
    classItem: "crypto",
  },
  {
    img: "goal_2",
    // altImg: Variable.lang.p.goalTwo,
    title: "Объединить людей",
    description: "Создать мульти интернациональное комьюнити по всему миру.",
    classItem: "unite",
  },
  {
    img: "goal_3",
    // altImg: Variable.lang.p.goalThree,
    title: "Бесплатный доступ",
    description: "Весь функционал на сайте не потребует от вас никаких вложений!",
    classItem: "access",
  },
  {
    img: "goal_4",
    // altImg: Variable.lang.p.goalFour,
    title: "Создание метавселенной",
    description: "Объединение всех продуктов компании в одной метавселенной.",
    classItem: "meta",
  },
];

const arrAccordeon = [
  {
    title: "Цель Crypto Emergency?",
    description: "Объединить криптоэнтузиастов со всего мира на многофункциональной платформе, где собраны все необходимые инструменты для общения, обучения, заработка и создания собственного контента.",
    hidden: false,
  },
  {
    title: "Как заработать или купить токены CEM?",
    description: "Купить CEM можно официально на бирже Bitmart. Также можно вести активную деятельность на платформе и получать новый уровень за действия на платформе и с новым уровнем получать в награду CEM. Следите за новостями в телеграме, могут появляться разные конкурсы где в награду можно получить монету CEM.",
    hidden: true,
  },
  {
    title: "Как вывести заработанные CEM с платформы?",
    description: "Вывести заработанные CEM на нашей платформе за проявленную активность вы можете на свой счет в любое время. На данный момент вывод средств осуществляется путем подачи заявки через администратора.",
    hidden: true,
  },
  {
    title: "Проект доступен лишь в России?",
    description: "У нас огромная экосистема которая на данный момент полностью переведена на 16 языков по всему миру, а основными разделами платформы уже сейчас можно пользоваться на 60 языках. Платформа доступна на всех рынках включая Китай.",
    hidden: true,
  },
  {
    title: "Можно ли скачать приложение на телефон?",
    description: "Да! Все проекты нашей экосистемы доступны как на Android так и на iPhone. Найти ссылочки для скачивания можно внизу страницы, либо просто через поиск в маркетах.",
    hidden: true,
  },
];

const arrTeam = [
  {
    name: "Ян Кривоносов",
    foto: "team1",
    position: "CEO проекта Crypto Emergency",
  },
  {
    name: "Игорь Еньшин",
    foto: "team4",
    position: "Руководитель IT направления",
  },
  {
    name: "Анна Рыжкова",
    foto: "team2",
    position: "Руководитель отдела по работе с дизайнерами",
  },
  {
    name: "Дмитрий Белов",
    foto: "team3",
    position: "Управляющий директор проекта",
  },
];

const roadmap = [
  {
    date: "15 Июня 2021г.",
    description: "Старт проекта",
    src: "turn-left_1",
  },
  {
    date: "19 Мая 2022г.",
    description: "Собственный Блокчейн CEM",
    src: "turn-right_2",
  },
  {
    date: "Сентябрь 2022г.",
    description: "Кошелек Cem Wallet",
    src: "turn-left_3",
  },
  {
    date: "Лето 2023г.",
    description: "Сообщества DAO",
    src: "turn-right_4",
  },
  {
    date: "Осень 2023г.",
    description: "Крипто Университет",
    src: "turn-left_5",
  },
  {
    date: "Начало 2024г.",
    description: "Собственная биржа",
    src: "turn-right_6",
  },
  {
    date: "Конец 2024г.",
    description: "Новостная нейросеть",
    src: "turn-left_7",
  },
];

export const display = function () {
  return (
    <div class="page page__container">
      <div class="about">
        <div class="about__whome whome">
          <div class="whome__inner">
            <img class="whome__img" src={`/assets/svg/about/vector_1.svg`} />
            <h2 class="about__subtitle">Crypto Emergency</h2>
            <p>Объединяем криптоэнтузиастов всего мира на единой многофункциональной платформе Crypto Emergency, которая даст им все необходимые инструменты для общения, обучения, заработка и создания собственного контента. </p>
          </div>
          <div class="whome__bg" />
        </div>
        <div class="about__container">
          <div class="about__goal goal">
            <div class="goal__inner">
              <h2 class="about__subtitle goal__title">Наши цели</h2>
              <div class="goal__list">
                {
                  arrBlockCard.map((item) => {
                    return (
                      <div class={["goal__item", item.classItem]}>
                        <div class="goal__img">
                          <img src={`/assets/svg/about/${item.img}.svg`} alt="" />
                        </div>
                        <div class="goal__content">
                          <h4>{item.title}</h4>
                          <div class="goal__content_description">{item.description}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div class="accordeon">
                {
                  arrAccordeon.map((item, index) => {
                    return (
                      <div class="accordeon__item">
                        <div class="accordeon__header"
                          onclick={() => {
                            arrAccordeon.map((el, i) => {
                              if (index === i) {
                                el.hidden = !el.hidden;
                              } else {
                                el.hidden = true;
                              }
                            });
                            this.init()
                          }}
                        >
                          <h5 class="accordeon__header_title">{item.title}</h5>
                          <img src={`/assets/svg/about/select_arrow.svg`}
                            class={["arrow", item.hidden ? null : "arrow__toggle"]}
                          />
                        </div>
                        <div class={["accordeon__content", item.hidden ? null : "content__show"]}>
                          {item.description}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <img class="whome__img whome__img_right" src={`/assets/svg/about/vector_2.svg`} />
              <div class="team">
                <h2 class="about__subtitle team__title">Наша команда</h2>
                <div class="team__list">
                  {
                    arrTeam.map((item) => {
                      return (
                        <div class="team__item">
                          <div class="team__img">
                            <img src={`/assets/images/about/${item.foto}.png`} />
                          </div>
                          <h5>{item.name}</h5>
                          <span>{item.position}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div class="roadmap">
                <h2 class="about__subtitle roadmap__title">Дорожная карта</h2>
                <div class="roadmap__wrap">
                  {
                    roadmap.map((item, index) => {
                      return (
                        <div class={["roadmap__item", `roadmap__item_${index}`]}>
                          <div class={["item__card", `item__card_${index}`]}>
                            <span class={["year", `year_${index}`]}>{item.description}</span>
                            <p class="description">{item.date}</p>
                          </div>

                          <div class={["roadmap__item_turn", `roadmap__item_turn_${index}`]}>
                            <img src={`/assets/svg/about/${item.src}.svg`}></img>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
        </div>
      </div>
    </div>
  )

}