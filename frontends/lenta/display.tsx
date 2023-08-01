import { Cemjsx } from "cemjs-all"
import videoBackground from "@images/lenta/video_background.png"
import dislike from "@svg/lenta/dislike.svg"
import like from "@svg/lenta/like.svg"
import comments from "@svg/lenta/comments.svg"
import views from "@svg/lenta/views.svg"

export const display = function () {
  console.log('=cbf168=',this.Static.records)

  const lentaMedia = function ( item ) {

    if (item.length == 0) { return null }
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

  return (
    <div class="lenta">
      <div class="lenta__container">
        {
          this.Static.records?.map((item) => {
            return (
              <div class="lenta__item">
                <div class="lenta__item_wrapper">
                  <div class="lenta__item_body">
                    {
                      item.Media.length > 0
                        ?
                        lentaMedia(item.Media)
                        :
                        null
                    }
                    {/* <img src={`/assets/upload/posts/${item.Media[0]?.name}`} alt="" /> */}
                    <div class="lenta__item_description">
                      <span>
                        {
                          item.text.length > 50
                          ?
                          this.Services.functions.editText(item.text, {clear: true})
                          :
                          item.text
                        }
                      </span>
                    </div>
                    <div class="lenta__item_statistic statistic">
                      <span class="statistic__date">{this.Services.functions.dateFormat(item.showDate, "now")}</span>
                      <div class="statistic__rating">
                        <img class="statistic__rating_like" src={dislike} />
                        <span>{item.Statistic.rating}</span>
                        <img class="statistic__rating_like" src={like} />
                      </div>
                      <div class="statistic__rating">
                        <div class="statistic__rating_img">
                          <img src={comments} />
                          2
                        </div>
                        <div class="statistic__rating_img">
                          <img src={views} />
                          23
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
      <button
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
        }}>1234</button>
    </div>
  )
}