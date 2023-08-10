import { Cemjsx } from "cemjs-all"
import frameDefault from "@svg/lenta/default.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import views from "@svg/news/views.svg"
import comments from "@svg/news/comments.svg"
import Show from './display/show'

export const display = function () {
  if (this.Static.record) {
    return Show.bind(this)()
  }
  return (
    <div class="page">
      <div class="questions">
        <div class="wrapper">
          <div class="questions__container">
            <h4>Последние вопросы</h4>
            <p class="questions__description">Задавайте свои вопросы, получайте грамотные и понятные ответы на родном языке, совершенно бесплатно.</p>
            <div class="questions__ask">

            </div>
            <div class="questions__search">
              <input type="text" placeholder="Поиск по вопросам" />
            </div>
            <div class="questions__list">
              {
                this.Static.records?.map((item) => {
                  return (
                    <div class="questions__item">
                      <div class="questions__item_header questions__user">
                        <a class="avatar" href="#">
                          <div class="avatar__icon">
                            <img class="avatar__photo"
                              src={item.author.avatar?.name
                                ?
                                `/assets/upload/avatar/${item.author.avatar?.name}`
                                :
                                avatarDefault
                              }
                            />
                            <img class="avatar__frame"
                              src={item.author.frame?.name
                                ?
                                `/assets/images/lenta/${item.author.frame?.name}`
                                :
                                frameDefault
                              }
                            />
                            {
                              item.author.status?.team
                                ?
                                <img class="avatar__team"
                                  src={item.author.status?.team
                                    ?
                                    teamLogo
                                    :
                                    null
                                  }
                                />
                                :
                                <div>
                                  <div class="avatar__level">
                                    <img src={leveGray} />
                                    <span>{item.author.statistic.level}</span>
                                  </div>
                                </div>
                            }
                          </div>
                          <div class="avatar__name">
                            <span>{item.author.nickname}</span>
                          </div>
                        </a>
                        <div class="questions__item_languages btn btn_gradient">
                          <span>Русский</span>
                        </div>
                      </div>
                      <div class={["questions__item_preview",
                        item.title.length < 15 && item.text ? "questions__item_preview_row" : null
                      ]}
                        onclick={() => {
                          this.Static.record = item
                          this.init()
                        }}
                      >
                        <span>{this.Services.functions.sliceString(item.title)}</span>
                        {
                          item.title.length < 15 && item.text
                            ?
                            <span>{item.text}</span>
                            :
                            null
                        }
                      </div>
                      <div class="questions__item_statistic">
                        <span>
                          <img src={comments} alt="Комментарии." />
                          {item.statistic.answer}
                        </span>
                        <span>
                          <img src={views} alt="Просмотры." />
                          {item.statistic.view}
                        </span>
                        <span>{this.Services.functions.dateFormat(item.showDate, "now")}</span>
                      </div>
                      <div class="questions__item_footer">
                        <button class="btn btn_gradient"
                          onclick={() => {
                            this.Static.record = item
                            this.init()
                          }}
                        >Ответить</button>
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