import { Cemjsx } from "cemjs-all"
import notFound from "@svg/rules/not_found.svg"
import galleryAll from "@svg/rules/gallery_all.svg"
import galleryImage from "@svg/rules/gallery_image.svg"
import galleryVideo from "@svg/rules/gallery_video.svg"
import questionsTable from "@svg/rules/questions_table.svg"
import points from "@svg/lenta/points.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import frameDefault from "@svg/lenta/default.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import teamLogo from "@svg/lenta/mini_logo.svg"
import badge1 from "@svg/personalAwards/badge1.svg"
import badge2 from "@svg/personalAwards/badge2.svg"
import badge3 from "@svg/personalAwards/badge3.svg"
import badge4 from "@svg/personalAwards/badge4.svg"
import badge5 from "@svg/personalAwards/badge5.svg"
import badge6 from "@svg/personalAwards/badge6.svg"
import badge7 from "@svg/personalAwards/badge7.svg"

const image = [badge1, badge2, badge3, badge3, badge4, badge5, badge6, badge7]

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
                  <div class={[
                    "personal-block__posts_list",
                    this.Static.postGrid == "list"
                      ?
                      "personal-block__posts_active"
                      :
                      null
                  ]}
                    onclick={() => {
                      this.Static.postGrid = "list"
                    }}
                  />
                </li>
                <li>
                  <div class={[
                    "personal-block__posts_tile",
                    this.Static.postGrid == "tile"
                      ?
                      "personal-block__posts_active"
                      :
                      null
                  ]}
                    onclick={() => {
                      this.Static.postGrid = "tile"
                    }}
                  />
                </li>
              </ul>
            </div>
            <div class="nothing-found">
              <img src={notFound} />
              <p>Записей не найдено</p>
            </div>
          </div>
        </div>
      )
    case "about":
      return (
        <div class="personal-block__container">
          <h2>Личная информация</h2>
          <div class="about-user">
            <div class="about-user__section">
              <div class="about-user__section_type">
                <div class="about-user__section_inner">
                  <p class="about-user__section_title">Обо мне</p>
                  <span class="about-user__description">
                    Тест тест тест тест
                  </span>
                  <div class="about-user__info">
                    <div class="about-user__info_section">
                      <span>Имя</span>
                      <p>Сергей</p>
                    </div>
                    <div class="about-user__info_section">
                      <span>Специализация</span>
                      <p>Менеджмент</p>
                    </div>
                    <div class="about-user__info_section">
                      <span>Страна</span>
                      <p>Austria</p>
                    </div>
                    <div class="about-user__info_section">
                      <span>Зарегестрирован</span>
                      <p>05.11.2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-user__section about-user__section_column">
              <div class="about-user__section_type">
                <div class="about-user__section_inner interests-block">
                  <p>Мои интересы</p>
                </div>
              </div>
              <div class="about-user__section_type">
                <div class="about-user__section_inner work-block">
                  <p>Мои места работы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    case "questions":
      return (
        <div class="personal-block__container">
          <h2>Заданные вопросы</h2>
          <div class="answers-table">
            <span>Вопрос</span>
            <span>Ответов</span>
            <span>Просмотров</span>
            <span>Лучший ответ</span>
          </div>
          <div class="answers-table__list">
            {
              this.Static.arrQuestions.map((item) => {
                return (
                  <div class="answers-table__item">
                    <div class="answers-table__item_main">
                      <a href="">
                        <div class="answers-table__item_title">
                          {item.title}
                        </div>
                      </a>
                      <div class="answers-table__item_created">
                        <span>
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div class="answers-table__item_counter">
                      <span class="answers-table__item_counter_title">
                        Ответов
                      </span>
                      <span>
                        {item.answers}
                      </span>
                    </div>
                    <div class="answers-table__item_counter">
                      <span class="answers-table__item_counter_title">
                        Просмотров
                      </span>
                      <span>
                        {item.views}
                      </span>
                    </div>
                    <div class="answers-table__item_avatar">
                      ---
                    </div>
                    <div class="answers-table__item_status">
                      <img src={questionsTable} />
                    </div>
                    <div class="answers-table__item_settings">
                      <img src={points} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    case "answers":
      return (
        <div class="personal-block__container">
          <h2>Предложенные ответы</h2>
          <div class="answers-table">
            <span>Вопрос</span>
            <span>Комментариев</span>
            <span>Рейтинг</span>
            <span>Ответ</span>
          </div>
          <div class="answers-table__list">
            {
              this.Static.arrAnswers.map((item) => {
                return (
                  <div class="answers-table__item">
                    <div class="answers-table__item_main answers-table__item_block">
                      <a class="avatar avatar__users" href="#">
                        <div class="avatar__icon">
                          <img class="avatar__photo"
                            src={avatarDefault}
                          />
                          <img class="avatar__frame"
                            src={frameDefault} />
                          <div>
                            <div class="avatar__level">
                              <img src={leveGray} />
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div>
                        <a href="">
                          <div class="answers-table__item_title">
                            {item.question}
                          </div>
                        </a>
                        <div class="answers-table__item_created">
                          <span>
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="answers-table__item_counter">
                      <span class="answers-table__item_counter_title">
                        Комментариев
                      </span>
                      <span>
                        {item.comments}
                      </span>
                    </div>
                    <div class="answers-table__item_counter">
                      <span class="answers-table__item_counter_title">
                        Рейтинг
                      </span>
                      <span>
                        {item.rating}
                      </span>
                    </div>
                    <div class="answers-table__item_text">
                      {item.answer}
                    </div>
                    <div class="answers-table__item_settings">
                      <img src={points} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    case "followers":
      return (
        <div class="personal-block__container">
          <div class="personal-block__header">
            <h2>Подписчики</h2>
          </div>
          <div class="personal-block__friends">
            {
              this.Static?.records.map((item) => {
                return (
                  <div class="personal-block__friends_item">
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
                    <div class="personal-block__friends_info">
                      <p>{item.nickname}</p>
                      <p>{item.fullname}</p>
                    </div>
                    <div class="personal-block__friends_settings">
                      <img src={points} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    case "friends":
      return (
        <div class="personal-block__container">
          <div class="personal-block__header">
            <h2>Мои подписки</h2>
          </div>
          <div class="personal-block__friends">
            {
              this.Static?.records.map((item) => {
                return (
                  <div class="personal-block__friends_item">
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
                    <div class="personal-block__friends_info">
                      <p>{item.nickname}</p>
                      <p>{item.fullname}</p>
                    </div>
                    <div class="personal-block__friends_settings">
                      <img src={points} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    case "awards":
      return (
        <div class="personal-block__container">
          <h2>Полученные награды</h2>
          <div class="personal-block__awards">
            {
              this.Static.arrAwards.map((item, i) => {
                return (
                  <div class="awards__list_item">
                    <img
                      class="awards__badge"
                      src={image[i]}
                    />
                    <img
                      class="awards__badge_small"
                      src={image[i]} />
                    <div class="awards__description">
                      <p class="awards__title">
                        {item.title}
                      </p>
                      <p class="awards__text">
                        {item.text}
                      </p>
                    </div>
                    <div class="awards__progress">
                      <p class="awards__progress_result">
                        Получено
                      </p>
                      <p class="awards__progress_result">
                        {item.date}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
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
            <ul class="personal-block__gallery_toggle">
              <li>
                <img
                  class={[
                    this.Static.galleryList == "all"
                      ?
                      "personal-block__gallery_active"
                      :
                      null
                  ]}
                  src={galleryAll}
                  onclick={() => {
                    this.Static.galleryList = "all"
                  }}
                />
              </li>
              <li>
                <img
                  class={[
                    "image",
                    this.Static.galleryList == "image"
                      ?
                      "personal-block__gallery_active"
                      :
                      null
                  ]}
                  src={galleryImage}
                  onclick={() => {
                    this.Static.galleryList = "image"
                  }}
                />
              </li>
              <li>
                <img
                  class={[
                    "video",
                    this.Static.galleryList == "video"
                      ?
                      "personal-block__gallery_active"
                      :
                      null
                  ]}
                  src={galleryVideo}
                  onclick={() => {
                    this.Static.galleryList = "video"
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      )
  }
}