import { Cemjsx } from "cemjs-all"
import videoBackground from "@images/lenta/video_background.png"
import dislike from "@svg/lenta/dislike.svg"
import like from "@svg/lenta/like.svg"
import comments from "@svg/lenta/comments.svg"
import views from "@svg/lenta/views.svg"
import frameDefault from "@svg/lenta/default.svg"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import points from "@svg/lenta/points.svg"
import sendMessage from "@svg/lenta/send_message.svg"
import avatarDefault from "@images/lenta/avatar_default.png"

const lentaMedia = function (item) {

  if (item?.length == 0 || item == undefined) { return null }
  // console.log('=a0a1aa=',item[0]?.name)

  let arrVideo = item.filter((item) => item.type === "video");
  let arrImage = item.filter((item) => item.type === "image");

  if (!arrVideo.length && arrImage.length == 1) {
    return (
      <img src={`/assets/upload/posts/${item[0]?.name}`} />
    )
  }

  if (!arrImage.length && arrVideo.length == 1) {
    return (
      <div class="lenta__item_video">
        {
          item[0].previewName
            ?
            <img src={`/assets/upload/posts/${item[0]?.previewName}`} />
            :
            <img src={videoBackground} />
        }
      </div>
    )
  }
}

export default function () {
  console.log('=30c273=', this.eventSource.length)
  let item = this.Static.recordsShow
  let mediaFiles
  if (item.media) {
    mediaFiles = item.media.filter((item) => {
      return typeof item == 'object'
    });
  }
  let text
  if (typeof item.text !== "undefined") {
    text = item.text
  }
  else {
    text = ""
  }

  if (this._ListsEventSource.length == 1) {
    let eventSource1 = this.eventSource(`Comments?uuid=${this.Variable.myInfo.uuid}&id=${item._id}`)

    eventSource1.addEventListener('add', ({ data }) => {
      if (!this.Static.recordsComments) {
        this.Static.recordsComments = []
      }
      let record = JSON.parse(data)
      this.Static.recordsComments.push(record)
      console.log('=9f6ead=', this.Static.recordsComments)
      this.init()
    });
  }

  this.Static.recordsComments?.forEach((item, i) => {

    if (this._ListsEventSource.length == 1 + i) {

      let eventSource2 = this.eventSource(`Comments?uuid=${this.Variable.myInfo.uuid}&idComm=${this.Static.recordsComments[i]._id}`)

      eventSource2.addEventListener('add', ({ data }) => {
        if (!this.Static.recordsCommentsInner) {
          this.Static.recordsCommentsInner = []
        }
        let record = JSON.parse(data)
        this.Static.recordsCommentsInner.push(record)
        console.log('=Comments=', this.Static.recordsCommentsInner)
        this.init()
      });
    }
  });

  return (
    <div>
      <div class="lenta__container"
        style={window.location.pathname.indexOf(item._id) ? "padding: 100px 0" : "padding-top: 0"}
      >
        <div class="lenta__item lenta__item_inner">
          <div class="lenta__item_wrapper">
            <div class="lenta__item_header">
              <a class="avatar" href="">
                <div class="avatar__icon">
                  <img class="avatar__photo"
                    src={item.authorFull.avatar?.name
                      ?
                      `/assets/upload/avatar/${item.authorFull.avatar?.name}`
                      :
                      { avatarDefault }
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
              <div class="avatar__settings">
                <img src={points} />
              </div>
            </div>
            <div class="lenta__item_body">
              {
                item.media.length > 0
                  ?
                  lentaMedia(item.media)
                  :
                  null
              }
              {/* <img src={`/assets/upload/posts/${item.Media[0]?.name}`} alt="" /> */}
              <div class={["lenta__item_description",
                !mediaFiles.length && item.text.length < 250 ? "lenta__item_background" : null
              ]}>
                <div>
                  {
                    mediaFiles.length
                      ?
                      item.text.length > 50
                        ?
                        <div>
                          <span>
                            {this.Services.functions.editText(item.text, { paragraph: true, clear: true, html: true })}
                          </span>
                        </div>
                        :
                        null
                      :
                      item.text.length > 550
                        ?
                        <div>
                          <span>
                            {this.Services.functions.editText(item.text, { paragraph: true, clear: true, html: true })}
                          </span>
                        </div>
                        :
                        null
                  }
                </div>
              </div>
              <div class="lenta__item_statistic statistic">
                <span class="statistic__date">{this.Services.functions.dateFormat(item.showDate, "now")}</span>
                <div class="statistic__rating">
                  <img class="statistic__rating_like" src={dislike} />
                  <span>{item.statistic.rating}</span>
                  <img class="statistic__rating_like" src={like} />
                </div>
                <div class="statistic__rating">
                  <div class="statistic__rating_img">
                    <img src={comments} />
                    {item.statistic.comments}
                  </div>
                  <div class="statistic__rating_img">
                    <img src={views} />
                    {item.statistic.view}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lenta__comment">
          <div class="lenta__comment_field">
            <textarea rows="1"
              oninput={(e) => {
                this.Static.text = e.target.value
              }}
            ></textarea>
          </div>
          <button class="lenta__comment_button"
            onclick={() => {
              let data = {
                _action: "insert",
                author: "63c7f6063be93e984c962b75",
                text: this.Static.text,
                table: "Posts",
                tableID: item._id,
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
          this.Static.recordsComments?.length > 0
            ?
            <div class="user-comment">
              <div class="user-comment__list" ref="commentList">
                {
                  this.Static.recordsComments?.map((comment) => {
                    console.log('=48b433=', comment)
                    return (
                      <div>
                        <div class="user-comment__item">
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
                                src={comment.authorFull.frame?.name
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
                                let elemr = this.Ref.commentList.childNodes
                                for (let i = 0; i < elemr.length; i++) {
                                  console.log('=c6d384=', elemr[i].lastChild)
                                  for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                    elemr[i].childNodes[y].lastChild.style = "display: none"
                                  }
                                }

                                let el = e.currentTarget
                                el.parentElement.parentElement.lastChild.style = "display: flex"
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
                                      id: comment._id,
                                      collection: "Comments",
                                      table: "Posts",
                                      tableID: item._id,
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
                                  table: "Posts",
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
                                            table: "Posts",
                                            tableID: item._id,
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
                                        table: "Posts",
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
            :
            null
        }
      </div>
    </div>
  )
}