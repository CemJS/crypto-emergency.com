import { Cemjsx } from "cemjs-all"



export const display = function () {
  return (
    <section class="ico">
      <div class="wrapper">
        <div class="ico_inner">
          <div class="ico_tabs">
            <div class="ico_tabs_item">
              <span>Активные</span>
            </div>
            <div class="ico_tabs_item">
              <span>Предстоящие</span>
            </div>
            <div class="ico_tabs_item">
              <span>Завершённые</span>
            </div>
          </div>

          <div class="ico_list">
            {
              this.Static.records.map((item, index) => {
                return (
                  <div class="ico_list_item">
                    <span class="category">{item.category}</span>
                    <div class="ico_list_item_image">
                      <img src={`/assets/upload/worldPress/${item.icon}`} alt="ICO Rating"></img>
                    </div>

                    <div class="ico_list_item_info">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>

                    <div class="ico_list_item_date">
                      <span>{item.startDate}</span>
                      <span>{item.endDate}</span>
                    </div>
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