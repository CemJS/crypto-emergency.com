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

  if (this._ListsEventSource.length == 1) {
    let eventSource1 = this.eventSource(`Answers?uuid=${this.Variable.myInfo.uuid}&id=${this.Static.recordsShow._id}`)

    eventSource1.addEventListener('add', ({ data }) => {
      if (!this.Static.recordsAnswer) {
        this.Static.recordsAnswer = []
      }
      let record = JSON.parse(data)
      this.Static.recordsAnswer.push(record)

      this.init()
    });
  }


  this.Static.recordsAnswer?.forEach((item, i) => {
    if (this._ListsEventSource.length == 2 + i) {
      let eventSource2 = this.eventSource(`Comments?uuid=${this.Variable.myInfo.uuid}&id=${this.Static.recordsAnswer[i]._id}`)

      eventSource2.addEventListener('add', ({ data }) => {
        if (!this.Static.recordsComments) {
          this.Static.recordsComments = []
        }
        let record = JSON.parse(data)
        this.Static.recordsComments.push(record)
        this.Static.eventLength = this._ListsEventSource.length

        console.log('=Comments=', this.Static.recordsComments)
        this.init()
      });
    }
  });

  this.Static.recordsComments.forEach((item, i) => {
    if (this._ListsEventSource.length == this.Static.eventLength + i) {

      let eventSource3 = this.eventSource(`Comments?uuid=${this.Variable.myInfo.uuid}&idComm=${this.Static.recordsComments[i]._id}`)

      eventSource3.addEventListener('add', ({ data }) => {
        if (!this.Static.recordsCommentsInner) {
          this.Static.recordsCommentsInner = []
        }
        let record = JSON.parse(data)
        this.Static.recordsCommentsInner.push(record)
        console.log('=Comments1=', this.Static.recordsCommentsInner)
      });
      console.log('=0220f2=', this._ListsEventSource.length)
    }
  })

  let item = this.Static.recordsShow
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
                    src={item.authorFull.avatar?.name
                      ?
                      `/assets/upload/avatar/${item.authorFull.avatar?.name}`
                      :
                      avatarDefault
                    }
                  />
                  <img class="avatar__frame"
                    src={item.authorFull.frame?.name
                      ?
                      `/assets/images/lenta/${item.authorFull.frame?.name}`
                      :
                      frameDefault
                    }
                  />
                  {
                    item.authorFull.status?.team
                      ?
                      <img class="avatar__team"
                        src={item.authorFull.status?.team
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
                          <span>{item.authorFull.statistic.level}</span>
                        </div>
                      </div>
                  }
                </div>
                <div class="avatar__name">
                  <span>{item.authorFull.nickname}</span>
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
                      _action: "insert",
                      author: "63c7f6063be93e984c962b75",
                      text: this.Static.text,
                      questionId: item._id,
                      table: "Questions",
                      tableID: item._id,
                      rating: 1,
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
                                  src={answer.authorFull.avatar?.name
                                    ?
                                    `/assets/upload/avatar/${answer.authorFull.avatar?.name}`
                                    :
                                    { avatarDefault }
                                  }
                                />
                                <img class="avatar__frame"
                                  src={answer.authorFull.frame?.name && answer.authorFull.frame?.name != "default.svg"
                                    ?
                                    `/assets/images/lenta/${answer.authorFull.frame?.name}`
                                    :
                                    frameDefault
                                  }
                                />
                                {
                                  answer.authorFull.status?.team
                                    ?
                                    <img class="avatar__team"
                                      src={answer.authorFull.status?.team
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
                                        <span>{answer.authorFull.statistic.level}</span>
                                      </div>
                                    </div>
                                }
                              </div>
                              <div class="user-comment__avatar_info">
                                <div class="user-comment__avatar_name">{answer.authorFull.nickname}</div>
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
                                      if (elemr[i].childNodes[y].firstChild?.nextSibling?.nextSibling) {
                                        elemr[i].childNodes[y].firstChild.nextSibling.nextSibling.style = "display: none"
                                      }
                                    }
                                  }

                                  let el = e.currentTarget
                                  el.parentElement.nextSibling.style = "display: flex"
                                  el.parentElement.nextSibling.firstChild.firstChild.focus()
                                }}
                              >Ответить</div>
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
                                    _action: "insert",
                                    // author: this.Variable.myInfo._id,
                                    author: "63c7f6063be93e984c962b75",
                                    text: this.Static.textCom,
                                    table: "Answers",
                                    tableID: answer._id,
                                    rating: 1,
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
                            {
                              answer.statistic.comments > 0
                                ?
                                <div class="answer__comments">
                                  <button
                                    onclick={(e) => {
                                      let el = e.currentTarget
                                      let elemComments = el.parentElement.parentElement.parentElement.lastChild

                                      if (elemComments.style.display == "none") {
                                        this.Static.showComments = "Скрыть комментарии"
                                        elemComments.style = "display: block"
                                      } else {
                                        this.Static.showComments = "Показать комментарии"
                                        elemComments.style = "display: none"
                                      }
                                      this.init()
                                    }}
                                  >{`${this.Static.showComments} (${answer.statistic.comments})`}</button>
                                </div>
                                :
                                null
                            }
                            <div class="user-comment__statistic comment-statistic">
                              <div class="comment-statistic__rating">
                                <img src={dislike}
                                  onclick={() => {
                                    let data = {
                                      _action: "update",
                                      author: "63c7f6063be93e984c962b75",
                                      rating: -1,
                                      type: "minus",
                                      answerId: answer._id
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
                                      _action: "update",
                                      author: "63c7f6063be93e984c962b75",
                                      rating: 1,
                                      type: "plus",
                                      answerId: answer._id
                                    }
                                    fetch(`/api/events/Answers?uuid=${this.Variable.myInfo.uuid}`, {
                                      method: "POST",
                                      headers: { "content-type": "application/json" },
                                      body: JSON.stringify(data),
                                    })
                                  }}
                                />
                              </div>
                              <div class="user-comment__settings"
                                onclick={() => {
                                  this.Fn.initOne({
                                    name: "modalTool", ifOpen: (front) => {
                                      setTimeout(() => {
                                        front.clearData()
                                      }, 500);
                                    },
                                    data: {
                                      data: {
                                        page: "comments",
                                        id: answer._id,
                                        collection: "Answers",
                                        table: "Questions",
                                        tableID: item._id,
                                        rating: -1,
                                      }
                                    },
                                  })
                                  // console.log('=ee090b=', answer._id)
                                  // let data = {
                                  //   _action: "remove",
                                  //   id: answer._id,
                                  //   table: "Questions",
                                  //   tableID: item._id,
                                  //   rating: -1,
                                  // }
                                  // fetch(`/api/events/Answers?uuid=${this.Variable.myInfo.uuid}`, {
                                  //   method: "POST",
                                  //   headers: { "content-type": "application/json" },
                                  //   body: JSON.stringify(data),
                                  // })
                                }}
                              >
                                <img src={points} />
                              </div>
                            </div>

                          </div>
                          <div class="questions-show__comments"
                            style="display: none"
                          >
                            {
                              this.Static.recordsComments.map((comment) => {
                                if (comment.tableId != answer._id) {
                                  return
                                }
                                return (
                                  <div class="user-comment__item" style="margin: 0 10px">
                                    <a class="user-comment__avatar avatar" href="">
                                      <div class="avatar__icon">
                                        <img class="avatar__photo"
                                          src={comment.authorFull.avatar?.name
                                            ?
                                            `/assets/upload/avatar/${comment.authorFull.avatar?.name}`
                                            :
                                            { avatarDefault }
                                          }
                                        />
                                        <img class="avatar__frame"
                                          src={comment.authorFull.frame?.name && comment.authorFull.frame?.name != "default.svg"
                                            ?
                                            `/assets/images/lenta/${comment.authorFull.frame?.name}`
                                            :
                                            frameDefault
                                          }
                                        />
                                        {
                                          comment.authorFull.status?.team
                                            ?
                                            <img class="avatar__team"
                                              src={comment.authorFull.status?.team
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
                                                <span>{comment.authorFull.statistic.level}</span>
                                              </div>
                                            </div>
                                        }
                                      </div>
                                      <div class="user-comment__avatar_info">
                                        <div class="user-comment__avatar_name">{comment.authorFull.nickname}</div>
                                        <span class="user-comment__avatar_time">{this.Services.functions.dateFormat(comment.showdate, "time")}</span>
                                      </div>
                                    </a>
                                    <div class="user-comment__body">
                                      <span>
                                        {this.Services.functions.editText(comment.text, { paragraph: true, clear: true, html: true })}
                                      </span>
                                    </div>
                                    <div class="user-comment__statistic comment-statistic">
                                      <div class="comment-statistic__rating">
                                        <img src={dislike}
                                          onclick={() => {
                                            let data = {
                                              _action: "update",
                                              author: "63c7f6063be93e984c962b75",
                                              rating: -1,
                                              type: "minus",
                                              id: comment._id
                                            }
                                            fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                              method: "POST",
                                              headers: { "content-type": "application/json" },
                                              body: JSON.stringify(data),
                                            })
                                          }}
                                        />
                                        <span>{comment.statistic.rating}</span>
                                        <img src={like}
                                          onclick={() => {
                                            let data = {
                                              _action: "update",
                                              author: "63c7f6063be93e984c962b75",
                                              rating: 1,
                                              type: "plus",
                                              id: comment._id
                                            }
                                            fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                              method: "POST",
                                              headers: { "content-type": "application/json" },
                                              body: JSON.stringify(data),
                                            })
                                          }}
                                        />
                                      </div>
                                      <span class="user-comment__answer"
                                        onclick={(e) => {
                                          let el = e.currentTarget
                                          el.parentElement.parentElement.lastChild.style = "display: flex"
                                        }}
                                      >Ответить</span>
                                      <div class="user-comment__settings"
                                        onclick={() => {
                                          this.Fn.initOne({
                                            name: "modalTool", ifOpen: (front) => {
                                              setTimeout(() => {
                                                front.clearData()
                                              }, 500);
                                            },
                                            data: {
                                              data: {
                                                page: "comments",
                                                id: comment._id,
                                                collection: "Comments",
                                                table: "Answers",
                                                tableID: answer._id,
                                                rating: -1,
                                              }
                                            },
                                          })
                                          // let data = {
                                          //   _action: "remove",
                                          //   id: comm._id,
                                          //   table: "Answer",
                                          //   tableID: answer._id,
                                          //   rating: -1,
                                          // }
                                          // fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                          //   method: "POST",
                                          //   headers: { "content-type": "application/json" },
                                          //   body: JSON.stringify(data),
                                          // })
                                        }}
                                      >
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
                                            _action: "insert",
                                            author: "63c7f6063be93e984c962b75",
                                            text: this.Static.textCom,
                                            table: "Answers",
                                            commentId: comment._id,
                                            rating: 1,
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
                                    {
                                      this.Static.recordsCommentsInner?.map((comm, index) => {
                                        if (comm.commentId != comment._id) {
                                          return
                                        }
                                        return (
                                          <div class="user-comment__item" style="margin: 0 10px">
                                            <a class="user-comment__avatar avatar" href="">
                                              <div class="avatar__icon">
                                                <img class="avatar__photo"
                                                  src={comm.authorFull.avatar?.name
                                                    ?
                                                    `/assets/upload/avatar/${comm.authorFull.avatar?.name}`
                                                    :
                                                    { avatarDefault }
                                                  }
                                                />
                                                <img class="avatar__frame"
                                                  src={comm.authorFull.frame?.name
                                                    ?
                                                    `/assets/images/lenta/${comm.authorFull.frame?.name}`
                                                    :
                                                    frameDefault
                                                  }
                                                />
                                                {
                                                  comm.authorFull.status?.team
                                                    ?
                                                    <img class="avatar__team"
                                                      src={comm.authorFull.status?.team
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
                                                        <span>{comm.authorFull.statistic.level}</span>
                                                      </div>
                                                    </div>
                                                }
                                              </div>
                                              <div class="user-comment__avatar_info">
                                                <div class="user-comment__avatar_name">{comm.authorFull.nickname}</div>
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
                                                <img src={dislike}
                                                  onclick={() => {
                                                    let data = {
                                                      _action: "update",
                                                      author: "63c7f6063be93e984c962b75",
                                                      rating: -1,
                                                      type: "minus",
                                                      id: comm._id
                                                    }
                                                    fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                                      method: "POST",
                                                      headers: { "content-type": "application/json" },
                                                      body: JSON.stringify(data),
                                                    })
                                                  }}
                                                />
                                                <span>{comm.statistic.rating}</span>
                                                <img src={like}
                                                  onclick={() => {
                                                    let data = {
                                                      _action: "update",
                                                      author: "63c7f6063be93e984c962b75",
                                                      rating: 1,
                                                      type: "plus",
                                                      id: comm._id
                                                    }
                                                    fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                                      method: "POST",
                                                      headers: { "content-type": "application/json" },
                                                      body: JSON.stringify(data),
                                                    })
                                                  }}
                                                />
                                              </div>
                                              <span class="user-comment__answer"
                                                onclick={(e) => {
                                                  let elemr = this.Ref.commentList.childNodes
                                                  for (let i = 0; i < elemr.length; i++) {
                                                    for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                                      elemr[i].childNodes[y].lastChild.style = "display: none"
                                                    }
                                                  }

                                                  let el = e.currentTarget
                                                  el.parentElement.parentElement.lastChild.style = "display: flex;"
                                                  el.parentElement.parentElement.lastChild.firstChild.firstChild.focus()
                                                }}
                                              >Ответить</span>
                                              <div class="user-comment__settings"
                                                onclick={() => {
                                                  this.Fn.initOne({
                                                    name: "modalTool", ifOpen: (front) => {
                                                      setTimeout(() => {
                                                        front.clearData()
                                                      }, 500);
                                                    },
                                                    data: {
                                                      data: {
                                                        page: "comments",
                                                        id: comm._id,
                                                        collection: "Comments",
                                                        table: "Answers",
                                                        tableID: answer._id,
                                                        rating: -1,
                                                      }
                                                    },
                                                  })
                                                }}
                                              >
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
                                                    _action: "insert",
                                                    author: "63c7f6063be93e984c962b75",
                                                    text: this.Static.textCom,
                                                    table: "Answers",
                                                    commentId: comment._id,
                                                    rating: 1,
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
                                        )
                                      })
                                    }
                                  </div>
                                )
                              })
                            }
                          </div>
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