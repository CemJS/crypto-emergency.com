import { Cemjsx } from "cemjs-all"
import views from "@svg/news/views.svg"
import comments from "@svg/news/comments.svg"
import Show from './display/show'

export const display = function () {
  if (this.Static.record) {
    return Show.bind(this)()
  }
  console.log('=0954b4=',this.Static.records)
  return (
    <section class="news">
      <div class="wrapper">
        <div class="news__inner">
          {
            this.Static.records?.map((item) => {
              return (
                <div class="news__item"
                  onclick={() => {
                    this.Static.record = item
                    this.init()
                  }}
                >
                  <div class="news__item_image">
                    <img src={`/assets/upload/news/${item.image}`} />
                  </div>
                  <div class="news__item_title">{item.title}</div>
                  <div class="news__item_description">{item.preview}</div>
                  <div class="news__item_statistic">
                    <span>
                      <img src={views} alt="Просмотры." />
                      {item.statistic.view}
                    </span>
                    <span>
                      <img src={comments} alt="Комментарии." />
                      {item.statistic.comments}
                    </span>
                    <span>{this.Services.functions.dateFormat(item.showDate)}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}