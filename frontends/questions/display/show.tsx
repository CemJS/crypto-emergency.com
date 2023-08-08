import { Cemjsx } from "cemjs-all"
import frameDefault from "@svg/lenta/default.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import views from "@svg/news/views.svg"
import comments from "@svg/news/comments.svg"

export default function () {
  console.log('=57c87c=', this.Static.records1)
  let item = this.Static.record
  return (
    <div class="questions-show">
      <div class="wrapper">
        <div class="questions-show__container">
          <div class="questions__user">
            <a class="avatar" href="#">
              <div class="avatar__icon">
                <img class="avatar__photo"
                  src={item.author.avatar?.name
                    ?
                    `/assets/upload/avatar/${item.author.avatar?.name}`
                    :
                    avatarDefault
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
      </div>
    </div>
  )
}