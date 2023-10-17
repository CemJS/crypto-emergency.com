import { Cemjsx } from "cemjs-all"
import CategoryLine from "./CategoryLine"

const RenderItems = function ({ items }){
    return (
        <section class="startaps">
            <div class="wrapper">
                <div class="startaps_inner" ref="startapsList">
                    {
                        items.map((item, index) => {
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

export default function () {
    return (
      <section class="news">
        <CategoryLine items={this.Static.categories} />
        <div class="wrapper">
          <RenderItems items={this.Static.records} />
        </div>
      </section>
    )
  }