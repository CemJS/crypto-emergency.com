import { Cemjsx } from "cemjs-all"
import lenta from '@svg/mainSettings/lenta.svg'
import questions from '@svg/mainSettings/answers_questions.svg'
import ico from '@svg/mainSettings/ico.svg'
import startups from '@svg/mainSettings/startups.svg'
import news from '@svg/mainSettings/news.svg'
import exchanges from '@svg/mainSettings/exchanges.svg'
import users from '@svg/mainSettings/users.svg'
import university from '@svg/mainSettings/university.svg'
import expert from '@svg/mainSettings/expert.svg'
import contentmaker from '@svg/mainSettings/contentmaker.svg'
import telegram from '@svg/mainSettings/telegram.svg'
import youtube from '@svg/mainSettings/youtube.svg'
import twitter from '@svg/mainSettings/twitter.svg'
import discord from '@svg/mainSettings/discord.svg'
import github from '@svg/mainSettings/github.svg'
import tiktok from '@svg/mainSettings/tiktok.svg'
import linkedin from '@svg/mainSettings/linkedin.svg'

let socialIcon, collapseBodyShow;

const sections = [
  {
    category: "Лента пользователей",
    img: lenta,
    url: "#"
  },
  {
    category: "Вопросы и ответы",
    img: questions,
    url: "#"
  },
  {
    category: "ICO Рейтинг",
    img: ico,
    url: "/list-ico"
  },
  {
    category: "Стартапы",
    img: startups,
    url: "/list-startaps"
  },
  {
    category: "Новости",
    img: news,
    url: "/news"
  },
  {
    category: "Обменники",
    img: exchanges,
    url: "#"
  },
  {
    category: "Пользователи",
    img: users,
    url: "#"
  },
  {
    category: "Крипто университет",
    img: university,
    url: "#"
  },
  {
    category: "Эксперты",
    img: expert,
    url: "#"
  },
  {
    category: "Создатели контента",
    img: contentmaker,
    url: "#"
  },
]

const socials = [
  {
    img: telegram,
    url: "https://t.me/cryptoemergencychat"
  },
  {
    img: youtube,
    url: "https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/"
  },
  {
    img: twitter,
    url: "https://twitter.com/cryptoemergency"
  },
  {
    img: discord,
    url: "https://discord.com/invite/Qdm7W8DjYc"
  },
  {
    img: github,
    url: "https://github.com/CryptoEmergency"
  },
  {
    img: tiktok,
    url: "https://www.tiktok.com/@cryptoemergencyrussia"
  },
  {
    img: linkedin,
    url: "https://www.linkedin.com/company/86302977"
  }
]

collapseBodyShow = {
  one: false,
  two: false,
  three: false,
  four: false,
};

const showCollapseBody = function (e) {
  // console.log('=107f5a=', e.target.dataset.number)
  collapseBodyShow[e.target.dataset.number] = !collapseBodyShow[e.target.dataset.number];
  e.stopPropagation();
};

export const display = function () {
  return (
    <div class="modal modal_open modal_fullscreen" style="z-index: 1200">
      <div class="modal__black"
        onclick={() => {
          setTimeout(() => {
            this.clearData()
          }, 5);
        }}
      />
      <section class="main-menu main-menu_active">
        <header class="main-menu__header">
          <div class="main-menu__btn">
            <div
              class="main-menu__btn_wrap"
              onclick={() => {
                this.Fn.initOne({
                  name: "mainServices", ifOpen: (front) => {
                    // console.log('=094142=',front)
                    setTimeout(() => {
                      front.clearData()
                    }, 500);
                  }
                })
              }}
            >
              <span>Сервисы</span>
            </div>
          </div>
          <div
            class="main-menu__language"
            onclick={() => {
              this.Fn.initOne({
                name: "mainLanguage", ifOpen: (front) => {
                  // console.log('=9e3bb6=', front)
                  setTimeout(() => {
                    front.clearData()
                  }, 500);
                }
              })
            }}
          >
            <div class="main-menu__language_wrap">
              <div class="main-menu__language_control">
                <img class="language_change_world" src={`/assets/svg/mainSettings/language_world.svg`} /> Русский
              </div>
            </div>
          </div>
          <button
            type="button"
            class="main-menu__close"
            onclick={() => {
              this.$el.childNodes[1].classList.remove("main-menu_active")
              setTimeout(() => {
                this.clearData()
              }, 500);
            }}
          ></button>
        </header>
        <div class="main-menu__body">
          <div class="main-menu__title">
            <div class="main-menu__title_wrap">
              Разделы
            </div>
          </div>
          <div class="main-menu__content main-menu_main_content">
            {
              sections.map((item) => {
                return (
                  <a class="main-menu__link main-menu__link_visible"
                    href={item.url}
                    onclick={this.Fn.link}
                  >
                    <img src={item.img} />
                    <span class="mobile_user_menu_link">{item.category}</span>
                  </a>
                )
              })
            }

          </div>
          <div class="main-menu__title">
            <div class="main-menu__title_wrap">
              Crypto Emergency
            </div>
          </div>

          <div class="main-menu__footer">
            <div class="main-menu__footer_nav">
              <div class="main-menu__accordion accordion">
                <div class="accordion__header">
                  <button class={["accordion__button",
                    collapseBodyShow.one ? null : "accordion__button_rotate"
                  ]}
                    onclick={(e) => {
                      showCollapseBody(e)
                      this.init()
                    }}
                    data-number="one"
                  >
                    Компания
                  </button>
                </div>
                <div class="accordion__collapse"
                  style={!collapseBodyShow.one ? null : "max-height: 200px"}
                >
                  <div class="accordion__body">
                    <a class="accordion__link" href="/about" onclick={this.Fn.Link}>
                      О нас
                    </a>
                    <a class="accordion__link" href="/career" onclick={this.Fn.Link}>
                      Карьера
                    </a>
                    <a class="accordion__link">
                      Lite Paper
                    </a>
                  </div>
                </div>
              </div>
              <div class="main-menu__accordion accordion">
                <div class="accordion__header">
                  <button class={["accordion__button",
                    collapseBodyShow.two ? null : "accordion__button_rotate"
                  ]}
                    onclick={(e) => {
                      showCollapseBody(e)
                      this.init()
                    }}
                    data-number="two"
                  >
                    Поддержка
                  </button>
                </div>
                <div class="accordion__collapse"
                  style={!collapseBodyShow.two ? null : "max-height: 200px"}
                >
                  <div class="accordion__body">
                    <a class="accordion__link">
                      Контакты
                    </a>
                    <a class="accordion__link">
                      Партнерская программа
                    </a>
                  </div>
                </div>
              </div>
              <div class="main-menu__accordion accordion">
                <div class="accordion__header">
                  <button class={["accordion__button",
                    collapseBodyShow.three ? null : "accordion__button_rotate"
                  ]}
                    onclick={(e) => {
                      showCollapseBody(e)
                      this.init()
                    }}
                    data-number="three"
                  >
                    Правила
                  </button>
                </div>
                <div class="accordion__collapse"
                  style={!collapseBodyShow.three ? null : "max-height: 200px"}
                >
                  <div class="accordion__body">
                    <a class="accordion__link">
                      Пользовательское соглашение
                    </a>
                    <a class="accordion__link">
                      Политика использования данных
                    </a>
                    <a class="accordion__link">
                      Политика cookies
                    </a>
                  </div>
                </div>
              </div>
              <div class="main-menu__accordion accordion">
                <div class="accordion__header">
                  <button class={["accordion__button",
                    collapseBodyShow.four ? null : "accordion__button_rotate"
                  ]}
                    onclick={(e) => {
                      showCollapseBody(e)
                      this.init()
                    }}
                    data-number="four"
                  >
                    CEM
                  </button>
                </div>
                <div class="accordion__collapse"
                  style={!collapseBodyShow.four ? null : "max-height: 200px"}
                >
                  <div class="accordion__body">
                    <a class="accordion__link">
                      CEM Blockchain
                    </a>
                    <a class="accordion__link">
                      CEM Explorer
                    </a>
                  </div>
                </div>
              </div>
              <div class="main-menu__accordion accordion">
                <a
                  href="https://apps.apple.com/ru/app/crypto-emergency/id1635628021"
                  target="_blank"
                  class="accordion__app"
                >
                  <img src={`/assets/svg/mainSettings/appstore.svg`} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.cryptoemergency" target="_blank" class="accordion__app" style="margin-right: 0;">
                  <img src={`/assets/svg/mainSettings/googleplay.svg`} />
                </a>
              </div>
            </div>
            <div class="main-menu__footer_bottom">
              <div class="footer__socials">
                {
                  socials.map((item) => {
                    return (
                      <div class="footer__socials_link">
                        <a
                          target="_blank"
                          href={item.url}
                        >
                          <img src={item.img} />
                        </a>
                      </div>
                    )
                  })
                }
              </div>
              <div class="footer__copyright">
                ©2020-2023 Crypto Emergency
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}