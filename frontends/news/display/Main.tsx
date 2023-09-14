import { Cemjsx } from "cemjs-all"
import views from "@svg/news/views.svg"
import comments from "@svg/news/comments.svg"

export default function () {

  // console.log('=MAIN=', this._ListsEventSource)
  return (
    <section class="news">
      <div class="wrapper">
        <div class="news__inner">
          {
            this.Static.records?.map((item) => {
              return (
                <a class="news__item"
                  href={`/news/${item._id}`}
                  onclick={(e) => {
                    this.Static.recordsShow = item
                    this.Fn.link(e)
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
                </a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}