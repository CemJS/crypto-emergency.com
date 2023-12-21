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

  return (
    <section class="lenta effect_lines"
      style={window.location.pathname == "/lenta-users" ? "padding-top: 100px" : "padding-top: 0"}
    >
      <div class="lenta__container">
        {
          this.Static.records?.map((item, i) => {
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
              <div class="lenta__item">
                <div class="lenta__item_wrapper">
                  <a href={`/lenta-users/${item._id}`} class="lenta__item_header"
                    onclick={(e) => {
                      this.Static.recordsShow = item
                      this.Fn.link(e)
                      this.init()
                    }}
                  >
                    {/* <a class="avatar" href="#">
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
                          src={item.authorFull.frame?.name && item.authorFull.frame?.name != "default.svg"
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

                    </a> */}
                    <div class="avatar__settings"
                      onclick={() => {
                        this.Fn.initOne({
                          name: "modalTool", ifOpen: (front) => {
                            setTimeout(() => {
                              front.clearData()
                            }, 500);
                          },
                          data: {
                            data: {
                              page: "post"
                            }
                          },
                        })
                      }}
                    >
                      <img src={points} />
                    </div>
                  </a>
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
                      <a href={`/lenta-users/${item._id}`}
                        onclick={(e) => {
                          this.Static.recordsShow = item
                          this.Fn.link(e)
                          this.init()
                        }}
                      >
                        {
                          mediaFiles.length
                            ?
                            this.Services.functions.editText(item.text, { slice: 50, clear: true, html: true })
                            :
                            this.Services.functions.editText(item.text, { slice: 550, paragraph: true, clear: true, html: true })
                        }
                      </a>
                      <div>
                        {
                          mediaFiles.length
                            ?
                            item.text.length > 50
                              ?
                              <div
                                onclick={(e) => {
                                  let el = e.currentTarget
                                  el.firstElementChild.hidden = false
                                  el.parentElement.parentElement.firstElementChild.hidden = true

                                }}
                              >
                                <a href={`/lenta-users/${item._id}`} hidden={true}
                                  onclick={(e) => {
                                    this.Static.recordsShow = item
                                    this.Fn.link(e)
                                    this.init()
                                  }}
                                >
                                  {this.Services.functions.editText(item.text, { paragraph: true, clear: true, html: true })}
                                </a>
                                <span
                                  onclick={(e) => {
                                    let el = e.currentTarget
                                    el.innerHTML = ""
                                  }}
                                  class="lenta__item_description_full">Показать все</span>
                              </div>
                              :
                              null
                            :
                            item.text.length > 550
                              ?
                              <div
                                onclick={(e) => {
                                  let el = e.currentTarget
                                  el.lastChild.hidden = true
                                  el.firstElementChild.hidden = false
                                  el.parentElement.parentElement.firstElementChild.hidden = true
                                  // console.log('=2f10aa=',el.parentElement.parentElement.firstElementChild.hidden = true)
                                }}
                              >
                                <a href={`/lenta-users/${item._id}`} hidden={true}
                                  onclick={(e) => {
                                    this.Static.recordsShow = item
                                    this.Fn.link(e)
                                    this.init()
                                  }}
                                >
                                  {this.Services.functions.editText(item.text, { paragraph: true, clear: true, html: true })}
                                </a>
                                <span
                                  class="lenta__item_description_full"
                                  onclick={(e) => {
                                    let el = e.currentTarget
                                    el.innerHTML = ""
                                  }}
                                >Показать все</span>
                              </div>
                              :
                              null
                        }
                      </div>
                    </div>
                    <div class="lenta__item_statistic statistic">
                      <span class="statistic__date">{this.Services.functions.dateFormat(item.showDate, "now")}</span>
                      <div class="statistic__rating">
                        <img class="statistic__rating_like" src={dislike}
                          onclick={() => {
                            let data = {
                              _action: "update",
                              author: "63c7f6063be93e984c962b75",
                              rating: -1,
                              type: "minus",
                              id: item._id
                            }
                            fetch(`/api/events/Posts?uuid=${this.Variable.myInfo.uuid}`, {
                              method: "POST",
                              headers: { "content-type": "application/json" },
                              body: JSON.stringify(data),
                            })
                          }}
                        />
                        <span>{item.statistic.rating}</span>
                        <img class="statistic__rating_like" src={like}
                          onclick={() => {
                            let data = {
                              _action: "update",
                              author: "63c7f6063be93e984c962b75",
                              rating: 1,
                              type: "plus",
                              id: item._id
                            }
                            fetch(`/api/events/Posts?uuid=${this.Variable.myInfo.uuid}`, {
                              method: "POST",
                              headers: { "content-type": "application/json" },
                              body: JSON.stringify(data),
                            })
                          }}
                        />
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
            )
          })
        }
      </div>
      {/* <button
        onclick={() => {
          let data = {
            uuid: this.Variable.myInfo.uuid,
            action: "add",
            data: {
              lang: "ru"
            }
          }
          fetch(`/api/events/Posts?uuid=${this.Variable.myInfo.uuid}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
        }}>1234</button> */}
    </section>
  )
}