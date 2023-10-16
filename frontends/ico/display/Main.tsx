import { Cemjsx } from "cemjs-all"
import CategoryLine from "./CategoryLine"
import calendar from '@svg/icon/calendar.svg'

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

const RenderItems = function ({ items }) {
    return (
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
                                    this.Static.makeFilter.active = item.name
                                    // console.log('=f2f6aa=',item.name)
                                    this.fn("change")
                                    this.init()
                                    // console.log('=до=',this.Static.url)
                                    // this.fn("addEvent", this.Static.makeFilter)
                                    // console.log('=после=',this.Static.url)
                                    
                                    // console.log('=ae510e=', this.fn("addEvent", this.Static.makeFilter))
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
                    items.map((item, index) => {
                        // console.log('=68bfd4=',items)
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
                                        <span class="pl_15 ico_percent">
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
    )
}


export default function () {
    // console.log('=this.Static.records=',this.Static.records)
    return (
        <section class="news">
            <CategoryLine items={this.Static.categories} active={this.Static.catActive} />
            <div class="wrapper">
                <RenderItems items={this.Static.records} />
            </div>
        </section>
    )
}   