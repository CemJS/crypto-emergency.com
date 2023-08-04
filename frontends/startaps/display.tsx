import { Cemjsx } from "cemjs-all"
import One from './display/one'


export const display = function () {
  if (this.Static.record) {
    return One.bind(this)()
  }
  return (
    <section class="startaps">
      <div class="wrapper">
        <div class="startaps_inner" ref="startapsList">
          {
            this.Static.records.map((item, index) => {
              return (
                <div
                  class="startaps_item"
                  onclick={() => {
                    this.Static.record = item;
                    this.init();
                  }}
                >
                  <span class="category">{item.category}</span>
                  <div class="startaps_item_image">
                    <img src={`/assets/upload/worldPress/${item.icon}`}></img>
                  </div>
                  <div class="startaps_item_info">
                    <h5 class="startaps_item_info_title">{item.title}</h5>
                    <p class="startaps_item_info_text">{item.descriptionShort}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )

}