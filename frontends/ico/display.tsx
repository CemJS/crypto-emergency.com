import { Cemjsx } from "cemjs-all"
import calendar from '@svg/icon/calendar.svg'
import One from './display/one'

const states = [
  {
    name: 'Active',
  },
  {
    name: 'Upcoming',
  },
  {
    name: 'Last',
  }
]

export const display = function () {
  if (this.Static.record) {
    return One.bind(this)()
  }
  return (
    <section class="ico">
      <div class="wrapper">
        <div class="ico_inner">
          <div class="ico_tabs" ref="tabs">
            {
              states.map((item, index) => {
                return (
                  <div
                    ref="tabsItem"
                    class={["ico_tabs_item", this.Static.activeIndex == index ? "ico_tabs_item_active" : null]}
                    onclick={() => {
                      this.Static.activeIndex = index;
                      this.Ref.tabsSlider.style.left = `${this.Ref.tabsItem.offsetWidth * this.Static.activeIndex}px`;
                      this.Ref.icoList.classList.add('animated');
                      setTimeout(() => {
                        this.Ref.icoList.classList.remove('animated');
                      }, 500)
                      this.init()
                    }}
                  >
                    <span>{item.name}</span>
                  </div>
                )
              })
            }
            <div class="ico_tabs_slider" ref="tabsSlider"></div>
          </div>

          <div class="ico_list" ref="icoList">
            {
              this.Static.records.map((item, index) => {
                return (
                  <div class="ico_list_item" onclick={() => {
                    this.Static.record = item;
                    this.init()
                  }}>
                    <span class="category">{item.category}</span>
                    <div class="ico_list_item_image">
                      <img src={`/assets/upload/worldPress/${item.icon}`} alt="ICO Rating"></img>
                    </div>

                    <div class="ico_list_item_info">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <p class="ico_list_item_finance pt_15">
                        <span class="text_important">${item.nowMoney}</span> / ${item.targetMoney}
                        <span class="pl_15" style="color: #ffffff; font-size: 24px;">
                          {
                            item.targetMoney <= 0 ? '0' :
                              Math.round(
                                ((item.nowMoney && item.nowMoney > 0 ? item.nowMoney : 0) * 100) / item.targetMoney
                              )
                          }%
                        </span>
                      </p>
                    </div>

                    {
                      item.dateIsKnow ?
                        <span class="ico_tba">
                          <img src={calendar} alt="Date"></img>TBA
                        </span> :
                        <div class="ico_list_item_date">
                          <span>{this.Services.functions.dateFormat(item.startDate)}</span>
                          <span>{this.Services.functions.dateFormat(item.endDate)}</span>
                        </div>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )

}