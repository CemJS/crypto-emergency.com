import { Cemjsx } from "cemjs-all"

let socialIcon, collapseBodyShow;

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
    <div class="modal modal_open modal_fullscreen">
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
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/lenta.svg`} />
              <span class="mobile_user_menu_link">Лента пользователей</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/answers_questions.svg`} />
              <span class="mobile_user_menu_link">Вопросы и ответы</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/ico.svg`} />
              <span class="mobile_user_menu_link">ICO Рейтинг</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/startaps.svg`} />
              <span class="mobile_user_menu_link">Стартапы</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/news.svg`} />
              <span class="mobile_user_menu_link">Новости</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/exchanges.svg`} />
              <span class="mobile_user_menu_link">Обменники</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/users.svg`} />
              <span class="mobile_user_menu_link">Пользователи</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/university.svg`} />
              <span class="mobile_user_menu_link">Крипто университет</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/expert.svg`} />
              <span class="mobile_user_menu_link">Эксперты</span>
            </a>
            <a class="main-menu__link main-menu__link_visible" href="#">
              <img src={`/assets/svg/mainSettings/contentmaker.svg`} />
              <span class="mobile_user_menu_link">Создатели контента</span>
            </a>
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
                    <a class="accordion__link">
                      О нас
                    </a>
                    <a class="accordion__link">
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
                <div class="footer__socials_link">
                  <a
                    target="_blank"
                    href="https://t.me/cryptoemergencychat"
                  >
                    <img src={`/assets/svg/mainSettings/telegram.svg`} />
                  </a>
                </div>

                <div class="footer__socials_link">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/"
                  >
                    <img src={`/assets/svg/mainSettings/youtube.svg`} />
                  </a>
                </div>
                <div class="footer__socials_link">
                  <a
                    target="_blank"
                    href="https://twitter.com/cryptoemergency"
                  >
                    <img src={`/assets/svg/mainSettings/twitter.svg`} />
                  </a>
                </div>
                <div class="footer__socials_link">
                  <a
                    target="_blank"
                    href="https://discord.com/invite/Qdm7W8DjYc"
                  >
                    <img src={`/assets/svg/mainSettings/discord.svg`} />
                  </a>
                </div>
                <div class="footer__socials_link">
                  <a
                    target="_blank"
                    href="https://github.com/CryptoEmergency"
                  >
                    <img src={`/assets/svg/mainSettings/github.svg`} />
                  </a>
                </div>
                <div class="footer__socials_link">
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@cryptoemergencyrussia"
                  >
                    <img src={`/assets/svg/mainSettings/tiktok.svg`} />
                  </a>
                </div>
                <div class="footer__socials_link">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/86302977"
                  >
                    <img src={`/assets/svg/mainSettings/linkedin.svg`} />
                  </a>
                </div>
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