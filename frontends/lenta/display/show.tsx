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
  console.log('=55ea43=', this.Static.record)
  let item = this.Static.record
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
  return (
    <div
    // onclick={() => {
    //   delete this.Static.record
    //   this.init()
    // }}
    >
      <div class="lenta__container">
        <div class="lenta__item lenta__item_inner">
          <div class="lenta__item_wrapper">
            <div class="lenta__item_header">
              <a class="avatar" href="">
                <div class="avatar__icon">
                  <img class="avatar__photo"
                    src={item.author.avatar?.name
                      ?
                      `/assets/upload/avatar/${item.author.avatar?.name}`
                      :
                      { avatarDefault }
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
                <span>
                  {
                    mediaFiles.length
                      ?
                      this.Services.functions.editText(item.text, { slice: 50, clear: true, html: true })
                      :
                      this.Services.functions.editText(item.text, { slice: 550, paragraph: true, clear: true, html: true })
                  }
                </span>
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
            <textarea rows="1"></textarea>
          </div>
          <button class="lenta__comment_button">
            <img src={sendMessage} />
          </button>
        </div>

        {
          item.comments.length > 0
            ?
            <div class="user-comment">
              <div class="user-comment__list">
                {
                  item.comments?.map((comment) => {
                    return (
                      <div>
                        <div class="user-comment__item">
                          <a class="user-comment__avatar avatar" href="">
                            <div class="avatar__icon">
                              <img class="avatar__photo"
                                src={comment.author.avatar?.name
                                  ?
                                  `/assets/upload/avatar/${comment.author.avatar?.name}`
                                  :
                                  { avatarDefault }
                                }
                              />
                              <img class="avatar__frame"
                                src={comment.author.frame?.name
                                  ?
                                  `/assets/images/lenta/${comment.author.frame?.name}`
                                  :
                                  frameDefault
                                }
                              />
                              {
                                comment.author.status?.team
                                  ?
                                  <img class="avatar__team"
                                    src={comment.author.status?.team
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
                                      <span>{comment.author.statistic.level}</span>
                                    </div>
                                  </div>
                              }
                            </div>
                            <div class="user-comment__avatar_info">
                              <div class="user-comment__avatar_name">{comment.author.nickname}</div>
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
                              <img src={dislike} />
                              <span>{comment.rating}</span>
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
                        {
                          comment.comments.map((comm) => {
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
                                      src={comm.author.frame?.name
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
            </div>
            :
            null
        }
      </div>
    </div>
  )
}