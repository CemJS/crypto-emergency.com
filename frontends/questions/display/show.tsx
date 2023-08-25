import { Cemjsx } from "cemjs-all"
import frameDefault from "@svg/lenta/default.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import views from "@svg/news/views.svg"
import dislike from "@svg/lenta/dislike.svg"
import like from "@svg/lenta/like.svg"
import points from "@svg/lenta/points.svg"
import sendMessage from "@svg/lenta/send_message.svg"
import comments from "@svg/news/comments.svg"

export default function () {

  // console.log('=f229cd=', this._ListsEventSource, `Answers?uuid=${this.Variable.myInfo.uuid}&id=${this.Static.record._id}`)
  if (this._ListsEventSource.length == 1) {
    let eventSource1 = this.eventSource(`Answers?uuid=${this.Variable.myInfo.uuid}&id=${this.Static.record._id}`)

    eventSource1.addEventListener('message', ({ data }) => {
      let records = JSON.parse(data)
      console.log('=641d61=', records)
      this.Static.recordsAnswer = records
      this.init()
    });
  }

  console.log('=57c87c=', this.Static.recordsAnswer)
  let item = this.Static.record
  let answers = this.Static.recordsAnswer
  return (
    <div>
      <div class="questions-show">
        <div class="wrapper">
          <div class="questions-show__container">
            <div class="questions__user">
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
            </div>
            <p class="questions-show__title">{item.title}</p>
            <p class="questions-show__description">{item.text}</p>
            <div class="questions__item_statistic questions-show__statistic">
              <span>
                <img src={comments} alt="Комментарии." />
                {item.statistic.answer}
              </span>
              <span class="questions-show__statistic_view">
                <img src={views} alt="Просмотры." />
                {item.statistic.view}
              </span>
              <span>{this.Services.functions.dateFormat(item.showDate, "now")}</span>
            </div>
          </div>

          <div class="user-comment questions-show__answers">
            <div class="answer">
              <textarea class="answer__field" cols="20" rows="10"
                oninput={(e) => {
                  this.Static.text = e.target.value
                }}
              ></textarea>
              <button class="answer__button" type="button">
                <span class="btn btn_gradient"
                  onclick={() => {
                    let data = {
                      uuid: this.Variable.myInfo.uuid,
                      action: "insert",
                      data: {
                        questionId: item._id,
                        author: this.Variable.myInfo._id,
                        text: this.Static.text,
                      }
                    }
                    fetch(`/api/events/Answers?uuid=${this.Variable.myInfo.uuid}`, {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(data),
                    })
                  }}
                >Отправить</span>
              </button>
            </div>

            {
              answers?.length > 0
                ?

                <div class="user-comment__list questions-show__list" ref="answerList">
                  {
                    answers?.map((answer) => {
                      return (
                        <div class="questions-show__item">
                          <div class="user-comment__item">
                            <a class="user-comment__avatar avatar" href="">
                              <div class="avatar__icon">
                                <img class="avatar__photo"
                                  src={answer.author.avatar?.name
                                    ?
                                    `/assets/upload/avatar/${answer.author.avatar?.name}`
                                    :
                                    { avatarDefault }
                                  }
                                />
                                <img class="avatar__frame"
                                  src={answer.author.frame?.name && answer.author.frame?.name != "default.svg"
                                    ?
                                    `/assets/images/lenta/${answer.author.frame?.name}`
                                    :
                                    frameDefault
                                  }
                                />
                                {
                                  answer.author.status?.team
                                    ?
                                    <img class="avatar__team"
                                      src={answer.author.status?.team
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
                                        <span>{answer.author.statistic.level}</span>
                                      </div>
                                    </div>
                                }
                              </div>
                              <div class="user-comment__avatar_info">
                                <div class="user-comment__avatar_name">{answer.author.nickname}</div>
                                <span class="user-comment__avatar_time">{this.Services.functions.dateFormat(answer.showdate, "time")}</span>
                              </div>
                            </a>
                            <div class="user-comment__body">
                              <span>
                                {this.Services.functions.editText(answer.text, { paragraph: true, clear: true, html: true })}
                              </span>
                              <div class="user-comment__answer questions-show__tell"
                                onclick={(e) => {
                                  let elemr = this.Ref.answerList.childNodes
                                  for (let i = 0; i < elemr.length; i++) {
                                    for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                      elemr[i].childNodes[y].lastChild.style = "display: none"
                                    }
                                  }

                                  let el = e.currentTarget
                                  el.parentElement.parentElement.lastChild.style = "display: flex"
                                  el.parentElement.parentElement.lastChild.firstChild.firstChild.focus()
                                }}
                              >Ответить</div>
                            </div>
                            <div class="user-comment__statistic comment-statistic">
                              <div class="comment-statistic__rating">
                                <img src={dislike}
                                  onclick={() => {
                                    let data = {
                                      uuid: this.Variable.myInfo.uuid,
                                      action: "update",
                                      data: {
                                        author: this.Variable.myInfo._id,
                                        rating: -1,
                                        type: "minus",
                                        id: answer._id
                                      }
                                    }
                                    fetch(`/api/events/Answers?uuid=${this.Variable.myInfo.uuid}`, {
                                      method: "POST",
                                      headers: { "content-type": "application/json" },
                                      body: JSON.stringify(data),
                                    })
                                  }}
                                />
                                <span>{answer.statistic.rating}</span>
                                <img src={like}
                                  onclick={() => {
                                    let data = {
                                      uuid: this.Variable.myInfo.uuid,
                                      action: "update",
                                      data: {
                                        author: this.Variable.myInfo._id,
                                        rating: 1,
                                        type: "plus",
                                        id: answer._id
                                      }
                                    }
                                    fetch(`/api/events/Answers?uuid=${this.Variable.myInfo.uuid}`, {
                                      method: "POST",
                                      headers: { "content-type": "application/json" },
                                      body: JSON.stringify(data),
                                    })
                                  }}
                                />
                              </div>
                              <div class="user-comment__settings">
                                <img src={points} />
                              </div>
                            </div>
                            <div class="lenta__comment user-comment__form">
                              <div class="lenta__comment_field">
                                <textarea rows="1" data-max-height="200" data-scroll-last="48"
                                  oninput={(e) => {
                                    this.Static.textCom = e.target.value
                                  }}
                                ></textarea>
                              </div>
                              <button class="lenta__comment_button"
                                onclick={() => {
                                  let data = {
                                    uuid: this.Variable.myInfo.uuid,
                                    action: "insert",
                                    data: {
                                      itemId: answer._id,
                                      id: answer._id,
                                      author: this.Variable.myInfo._id,
                                      table: "answers",
                                      text: this.Static.textCom,
                                      collection: "Answers"
                                    }
                                  }
                                  fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                    method: "POST",
                                    headers: { "content-type": "application/json" },
                                    body: JSON.stringify(data),
                                  })
                                }}
                              >
                                <img src={sendMessage} />
                              </button>
                            </div>
                          </div>
                          {
                            answer.comments.map((comm) => {
                              return (
                                <div class="user-comment__item" style="margin: 0 10px">
                                  <a class="user-comment__avatar avatar" href="">
                                    <div class="avatar__icon">
                                      <img class="avatar__photo"
                                        src={comm.author.avatar?.name
                                          ?
                                          `/assets/upload/avatar/${comm.author.avatar?.name}`
                                          :
                                          { avatarDefault }
                                        }
                                      />
                                      <img class="avatar__frame"
                                        src={comm.author.frame?.name && comm.author.frame?.name != "default.svg"
                                          ?
                                          `/assets/images/lenta/${comm.author.frame?.name}`
                                          :
                                          frameDefault
                                        }
                                      />
                                      {
                                        comm.author.status?.team
                                          ?
                                          <img class="avatar__team"
                                            src={comm.author.status?.team
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
                                              <span>{comm.author.statistic.level}</span>
                                            </div>
                                          </div>
                                      }
                                    </div>
                                    <div class="user-comment__avatar_info">
                                      <div class="user-comment__avatar_name">{comm.author.nickname}</div>
                                      <span class="user-comment__avatar_time">{this.Services.functions.dateFormat(comm.showdate, "time")}</span>
                                    </div>
                                  </a>
                                  <div class="user-comment__body">
                                    <span>
                                      {this.Services.functions.editText(comm.text, { paragraph: true, clear: true, html: true })}
                                    </span>
                                  </div>
                                  <div class="user-comment__statistic comment-statistic">
                                    <div class="comment-statistic__rating">
                                      <img src={dislike} />
                                      <span>{comm.rating}</span>
                                      <img src={like} />
                                    </div>
                                    <span class="user-comment__answer"
                                      onclick={(e) => {
                                        let el = e.currentTarget
                                        el.parentElement.parentElement.lastChild.style = "display: flex"
                                      }}
                                    >Ответить</span>
                                    <div class="user-comment__settings">
                                      <img src={points} />
                                    </div>
                                  </div>
                                  <div class="lenta__comment user-comment__form">
                                    <div class="lenta__comment_field">
                                      <textarea rows="1" data-max-height="200" data-scroll-last="48"></textarea>
                                    </div>
                                    <button class="lenta__comment_button">
                                      <img src={sendMessage} />
                                    </button>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>

                :
                null
            }

          </div>

        </div>
      </div>
    </div>

  )
}