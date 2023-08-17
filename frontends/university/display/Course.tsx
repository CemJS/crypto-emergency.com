import { Cemjsx } from "cemjs-all"
import logo from '@svg/university/logo.svg'
import arrow from '@svg/university/arrow.svg'

export default function () {
  console.log('=2e3086=', this.Static.recordsCourses)
  return (
    <div class="courses">
      <div class="wrapper">
        <div class="university__header">
          <div class="university__header_title">
            <img src={logo} />
            <p>Крипто университет</p>
          </div>
        </div>
        <div class="courses__filter">
          <div class="courses__filter_container">
            <div class="courses__select">
              <div class="courses__select_default"
                onclick={(e) => {
                  if (this.Static.categoryStatus == 'close') {
                    this.Static.categoryStatus = 'open'
                    this.Ref.category.classList.add("visible")
                    this.Ref.categoryArrow.classList.add("rotate")
                  } else if (this.Static.categoryStatus == 'open') {
                    this.Static.categoryStatus = 'close'
                    this.Ref.category.classList.remove("visible")
                    this.Ref.categoryArrow.classList.remove("rotate")
                  }
                }}
              >
                <span>Все</span>
                <img src={arrow} ref="categoryArrow" />

              </div>
              <div class="courses__category" ref="category">
                {
                  <ul class="courses__category_list">
                    {
                      this.Static.category.map((item) => {
                        return (
                          <li class="courses__category_item">
                            {item.name}
                          </li>
                        )
                      })
                    }
                  </ul>
                }
              </div>
            </div>
            <div class="courses__select">
              <div class="courses__select_default"
                onclick={(e) => {
                  if (this.Static.costStatus == 'close') {
                    this.Static.costStatus = 'open'
                    this.Ref.cost.classList.add("visible")
                    this.Ref.costArrow.classList.add("rotate")
                  } else if (this.Static.costStatus == 'open') {
                    this.Static.costStatus = 'close'
                    this.Ref.cost.classList.remove("visible")
                    this.Ref.costArrow.classList.remove("rotate")
                  }
                }}
              >
                <span>Стоимость</span>
                <img src={arrow} ref="costArrow" />
              </div>
              <div class="courses__cost" ref="cost">
                {
                  <ul class="courses__cost_list">
                    {
                      this.Static.costCourses.map((item) => {
                        return (
                          <li class="courses__cost_item">
                            {item.cost}
                          </li>
                        )
                      })
                    }
                  </ul>
                }
              </div>
            </div>
          </div>
          <div class="courses__search">
            <input type="text" placeholder="Поиск" />
          </div>

        </div>
        <div class="courses__cards">
        {
          this.Static.recordsCourses.map((item) => {
            return (
              <li class="card card_courses">
                <a
                  class="card__link card__link_background"
                >
                  <div class="card__title card__title_courses">
                    {item.name}
                  </div>
                  <div class="card__description card__description_courses">
                    {item.description}
                  </div>
                  <div class="card__container card__container_row card__container_indent_course">
                    <div class="card__cost">
                      {item.cost != undefined || null
                        ?
                        <span>{item.cost}
                          {item.currency == "rub"
                            ?
                            <span class="card__cost_size"> ₽</span>
                            :
                            item.currency == "usd"
                              ?
                              <span class="card__cost_size"> $</span>
                              :
                              null
                          }
                        </span>
                        :
                        null
                      }

                    </div>
                    {
                      item.duration != undefined
                        ?
                        <div class="card__container card__container_row">
                          <div class="card__duration">
                            <span>{item.duration}</span>
                          </div>
                          <div class="card__duration-text">
                            <span class="card__duration-text_size">
                              {
                                item.timeCount == "month"
                                  ?
                                  "Месяца"
                                  :
                                  "Дней"
                              }
                            </span>
                            <span class="card__duration-text_color">Срок обучения</span>
                          </div>
                        </div>
                        :
                        null
                    }

                  </div>
                  <a class="card__more card__more_indent_course">
                    <span>
                      Больше информации
                    </span>
                  </a>
                  <div class="card__category">
                    {
                      item.category.map((item) => {
                        return (
                          <span>{item}</span>
                        )
                      })
                    }
                  </div>
                  <div class="card__icon">
                    {
                      item.icon
                        ?
                        <img src={`/assets/upload/worldPress/${item.icon}`} />
                        :
                        null
                    }
                  </div>
                </a>
              </li>
            )
          })
        }
        </div>
        
      </div>
    </div>
  )
}