import { Cemjsx } from "cemjs-all"
import test from "@images/lenta/test.png"
import dislike from "@svg/lenta/dislike.svg"
import like from "@svg/lenta/like.svg"
import comments from "@svg/lenta/comments.svg"
import views from "@svg/lenta/views.svg"

export const display = function () {
  console.log('=84221a=', this.Static.records)
  return (
    <div class="lenta">
      <div class="lenta__container">
        {
          this.Static.records?.map((item) => {
            return (
              <div class="lenta__item">
                <div class="lenta__item_wrapper">
                  <div class="lenta__item_body">
                    <img src={test} alt="" />
                    <div class="lenta__item_description">
                      <span>
                        {item.text}
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
    </div>
  )
}