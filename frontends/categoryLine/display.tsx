import { Cemjsx } from "cemjs-all"


export const display = function () {
  if (this.Static.records) {
    return (
      <div class="categoryLine categoryLine-wrap categoryLine-wrap_shadow-right">
        <ul class="categoryLine-carousel">
          {this.Static.records.map((item) => {
            return (
              <li class={"categoryLine-item"}
                onclick={() => {
                  this.cross({ event: "press", name: item.name })
                }}>
                <span>{item.name}</span>
              </li>
            )
          })
          }
          <li class={"categoryLine-item"}>
            <span>Все</span>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div class="categoryLine categoryLine-wrap categoryLine-wrap_shadow-right"></div>
  )

}