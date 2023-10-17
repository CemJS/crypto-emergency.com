import { Cemjsx } from "cemjs-all"
import up_arrow from '@svg/courseLine/up_arrow.svg'
import down_arrow from '@svg/courseLine/down_arrow.svg'

interface Course {
    _id: string
    nameCoin: string
    currentCourse: number
    change: number
}

export default function () {

    if (!this.Static.records.length) {
        return (
            <div class="line line-wrap">
            </div>
        )
    }

    return (
        <div class="line line-wrap">
            <a class="line-wrap" href="/exchange-rates" onclick={this.Fn.link} >
                {
                    ([1, 2, 3, 4]).map(() => {
                        return (
                            <div class="line__track">
                                {
                                    this.Static.records.map((course: Course) => {
                                        return (
                                            <div class="line__item">
                                                <div class="line__item_img">
                                                    {/* <img src={`/assets/icons/coins/${course.nameCoin}.svg`}></img> */}
                                                    <img src={`/assets/svg/exchangeRates/${course.nameCoin}.svg`} alt="" />
                                                </div>
                                                <span class="line__item_text">{course.nameCoin + "/USDT"}</span>
                                                <span class="line__item_text text_important">
                                                    ${course.currentCourse.toFixed(
                                                        course.nameCoin === "cem" ? 4 : 2
                                                    )}
                                                </span>
                                                <div class="line__item_change">
                                                    {course.change.toFixed(2)}
                                                    <div class="line-img_change">
                                                        <img src={course.change >= 0 ? up_arrow : down_arrow}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </a>
        </div>
    )
}