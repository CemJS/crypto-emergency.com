import { Cemjsx } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import frameDefault from "@svg/lenta/default.svg"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"

export const display = function () {
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
                    console.log('=43f505=',this.Static.makeFilter)
                    this.fn("addEvent", this.Static.makeFilter)
                  }}
                />
              </div>

              <input type="checkbox"
                onclick={(e) => {
                  console.log('=8e1898=', e.target.checked)
                }}
              />

              <input type="checkbox"
                onclick={(e) => {
                  console.log('=8e1898=', e.target.checked)
                }}
              />

              <input type="checkbox"
                onclick={(e) => {
                  console.log('=8e1898=', e.target.checked)
                }}
              />

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
                              src={item.frame?.name
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