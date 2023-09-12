import { Cemjsx } from "cemjs-all"
import question from "@svg/personalNotify/questions.svg"

export const display = function () {
  return (
    <div class="page">
      <div class="notifications">
        <div class="notifications__container">
          <div class="notifications__header">
            <h2>Ваши уведомления</h2>
            <ul class="notifications__toggle">
              <li class={["notifications__toggle_item",
                this.Static.notify == "questions"
                  ?
                  "notifications__toggle_item_active"
                  :
                  null
              ]}
                onclick={() => {
                  this.Static.notify = "questions"
                  this.Static.actualNotify = this.Static.questionsList
                }}
              >Вопросы</li>
              <li class={["notifications__toggle_item",
                this.Static.notify == "awards"
                  ?
                  "notifications__toggle_item_active"
                  :
                  null
              ]}
                onclick={() => {
                  this.Static.notify = "awards"
                  this.Static.actualNotify = this.Static.awardsList
                }}
              >Награды</li>
              <li class={["notifications__toggle_item",
                this.Static.notify == "system"
                  ?
                  "notifications__toggle_item_active"
                  :
                  null
              ]}
                onclick={() => {
                  this.Static.notify = "system"
                  this.Static.actualNotify = null
                }}
              >Системные</li>
            </ul>
          </div>
          <div class="notifications__list">
            <div class="notifications__list_inner">
              <ul>
                {
                  this.Static.actualNotify?.map((item) => {
                    return (
                      <li class="notifications__list_item">
                        <div class="notifications__list_item_wrapper">
                          <img src={question} />
                          <p>{item.title}</p>
                          <span>{item.description}</span>
                        </div>
                        {
                          item.nickname
                            ?
                            <span class="notifications__list_item_nickname">
                              Пользователь:
                              <a href="#">
                                {item.nickname}
                              </a>
                            </span>
                            :
                            null
                        }
                        <span>{item.date}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}