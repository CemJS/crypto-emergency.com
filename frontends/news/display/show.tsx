import { Cemjsx } from "cemjs-all"
import views from "@svg/news/views.svg"
import comments from "@svg/news/comments.svg"
import dislike from "@svg/lenta/dislike.svg"
import like from "@svg/lenta/like.svg"
import frameDefault from "@svg/lenta/default.svg"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import points from "@svg/lenta/points.svg"
import sendMessage from "@svg/lenta/send_message.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import back from '@svg/icon/prev.svg'

let item, eventSource1

export default function () {
  return (
    <div class="news-show">
      <div class="back">
        <a href="/news" class="back_arrow"
          onclick={(e) => {
            this.Static.page = "main"
            this.Fn.link(e)
          }}
        >
          <img
            src={back}>
          </img>
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
      <h1>{item.title}</h1>
      <section class="news-show__container">
        <div class="news-show__img">
          <img src={`/assets/upload/news/${item.image}`} alt="" />
        </div>
        <p class="news-show__preview">{item.preview}</p>
        <p class="news-show__description">{this.Services.functions.editText(item.text, { clear: true, paragraph: true, html: true })}</p>
        <div class="news-show__statistic">
          <span>
            <img src={views} alt="Просмотры." />
            {item.statistic?.view}
          </span>
          <span>
            <img src={comments} alt="Комментарии." />
            {item.statistic.comments}
          </span>
          <span>{this.Services.functions.dateFormat(item.showDate, "now")}</span>
        </div>
      </section>
    </div>
  )
}