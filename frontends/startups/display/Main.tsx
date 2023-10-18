import { Cemjsx } from "cemjs-all"
import CategoryLine from "./CategoryLine"

const RenderItems = function ({ items }) {
    return (
        <section class="startaps">
            <div class="wrapper">
                <div class="startaps_inner" ref="startapsList">
                    {
                        !items.length ? <p>not found</p> :
                            items.map((item, index) => {
                                return (
                                    <a
                                        class="startaps_item"
                                        href={`/startups/show/${item._id}`}
                                        onclick={(e) => {
                                            this.Static.record = item;
                                            this.Fn.link(e)
                                        }}
                                        isVisible={() => {
                                            if (index == items.length - 3) {
                                                this.Static.moreid = items[items.length - 1]._id
                                                this.fn("addEvent")
                                            }
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
                                    </a>
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
        <section class="wrapper">
            <CategoryLine items={this.Static.categories} />
            <div class="wrapper">
                <RenderItems items={this.Static.records} />
            </div>
        </section>
    )
}