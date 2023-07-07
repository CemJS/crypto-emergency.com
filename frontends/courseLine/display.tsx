import { Cemjsx } from "cemjs-all"

export const display = function () {
  // console.log('=d29158=',this.Fn.link)
  if (this.Static.records) {
    return (
      <div class="line line-wrap">
        <a
          class="line-wrap"
          href="/exchange-rates"
          onclick={this.Fn.link}
        >
          {
          ([1, 2, 3, 4]).map(() => {
            return (
              <div class="line__track">
                {
                  this.Static.records?.map((course) => {
                    if (course?.courseLine == true) {
                      return (
                        <div class="line__item">
                          <div class="line__item_img">
                            <img src={`/assets/svg/coins/${course.nameCoin}.svg`}></img>
                          </div>
                          <span class="line__item_text">{course.nameCoin + "/USDT"}</span>
                          <span class="line__item_text line__item_price">
                            ${course.currentCourse.toFixed(
                              course.nameCoin === "cem" ? 4 : 2
                            )}
                          </span>
                          <div class="line__item_change">
                            {course.change.toFixed(2)}
                            <div class="line-img_change">
                              <img src={`/assets/svg/${course.change >= 0 ? "up_arrow" : "down_arrow"}.svg`}></img>
                            </div>
                          </div>
                        </div>
                      )
                    }
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

  return (
    <div class="line line-wrap">
    </div>
  )

}