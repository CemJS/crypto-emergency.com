import { Cemjsx } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import frameDefault from "@svg/lenta/default.svg"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"

export const display = function () {
  console.log('=94b5de=',this.Static.records)
  return (
    <div class="page">
      <div class="users">
        <div class="wrapper">
          <div class="users__container">
            <h1>Пользователи</h1>
            <div class="users__filter">

              <div class="users__search">
                <input type="text" placeholder="Найти друзей"
                  oninput={(e) => {
                    this.Static.makeFilter.nickname = e.target.value
                    this.fn("addEvent", this.Static.makeFilter)
                  }}
                />
              </div>

              <div class="users__checkbox">
                <div class="checkbox">
                  <input type="checkbox"
                    onclick={(e) => {
                      this.Static.makeFilter.basic = e.target.checked
                      this.fn("addEvent", this.Static.makeFilter)
                    }}
                  />
                  <label htmlFor="">Пользователи</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox"
                    onclick={(e) => {
                      this.Static.makeFilter.creator = e.target.checked
                      this.fn("addEvent", this.Static.makeFilter)
                    }}
                  />
                  <label htmlFor="">Создатели контента</label>
                </div>

                <div class="checkbox">
                  <input type="checkbox"
                    onclick={(e) => {
                      this.Static.makeFilter.expert = e.target.checked
                      this.fn("addEvent", this.Static.makeFilter)
                    }}
                  />
                  <label htmlFor="">Эксперты</label>
                </div>
              </div>

            </div>
            <div class="users__list">
              {
                this.Static.records?.map((item) => {
                  return (
                    <div class="users__item">
                      <div class="users__item_header">
                        <a class="avatar avatar__users" href="#">
                          <div class="avatar__icon">
                            <img class="avatar__photo"
                              src={item.avatar?.name
                                ?
                                `/assets/upload/avatar/${item.avatar?.name}`
                                :
                                avatarDefault
                              }
                            />
                            <img class="avatar__frame"
                              src={item.frame?.name && item.frame?.name != "default.svg"
                                ?
                                `/assets/images/lenta/${item.frame?.name}`
                                :
                                frameDefault
                              }
                            />
                            {
                              item.status?.team
                                ?
                                <img class="avatar__team"
                                  src={item.status?.team
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
                                    <span>{item.statistic.level}</span>
                                  </div>
                                </div>
                            }
                          </div>
                        </a>
                      </div>
                      <div class="users__item_name">
                        <span>{item.nickname}</span>
                      </div>
                      <div class="users__item_status">
                        {item.information.speciality == "" ? "(не указана)" : item.information.speciality}
                      </div>
                      <div class="users__item_statistic">
                        <div class="users__item_info">
                          <span>{item.statistic.answer}</span>
                          <span>ответов</span>
                        </div>
                        <div class="users__item_info">
                          <span>{item.statistic.subscribe}</span>
                          <span>подписчиков</span>
                        </div>
                        <div class="users__item_info">
                          <span>{item.statistic.view}</span>
                          <span>просмотров</span>
                        </div>
                      </div>
                      <div class="users__item_buttons">
                        <button class="btn btn_gradient">
                          Написать
                        </button>
                        <button class="btn btn_gradient">
                          Подписаться
                        </button>
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