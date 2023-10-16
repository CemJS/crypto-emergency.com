import { Cemjsx } from "cemjs-all"
import views from "@svg/news/views.svg"
import comments from "@svg/news/comments.svg"
import back from '@svg/icon/prev.svg'


export default function () {

  if (!this.Static.record?._id) {
    return (
      <div>
        не найдено
      </div>
    )
  }

  return (
    <div class="news-show">
      <div class="back">
        <a href="/news" class="back_arrow" onclick={this.Fn.link}>
          <img src={back}></img>
        </a>
        <div
          class="tool"
          onclick={() => {
            this.Fn.initOne({
              name: "modalTool", ifOpen: (front) => {
                setTimeout(() => {
                  front.clearData()
                }, 500);
              },
              data: {
                data: {
                  page: "page"
                }
              },
            })
          }}
        >
          <span class="tool_item"></span>
          <span class="tool_item"></span>
          <span class="tool_item"></span>
        </div>
      </div>
      <h1>{this.Static.record.title}</h1>
      <section class="news-show__container">
        <div class="news-show__img">
          <img src={`/assets/upload/news/${this.Static.record.image}`} alt="" />
        </div>
        <p class="news-show__preview">{this.Static.record.preview}</p>
        <p class="news-show__description">{this.Services.functions.editText(this.Static.record.text, { clear: true, paragraph: true, html: true })}</p>
        <div class="news-show__statistic">
          <span>
            <img src={views} alt="Просмотры." />
            {this.Static.record.statistic?.view}
          </span>
          <span>
            <img src={comments} alt="Комментарии." />
            {this.Static.record.statistic.comments}
          </span>
          <span>{this.Services.functions.dateFormat(this.Static.record.showDate, "now")}</span>
        </div>
      </section>
    </div>
  )
}