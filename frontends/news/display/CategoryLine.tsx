import { Cemjsx } from "cemjs-all"

export default function ({ items, active }) {
    return (
        <div class="category-wrap">
            <ul class="category-carousel">
                {items.map((item: any, index: number) => {
                    return (
                        <li class={["category-item", active == index ? "category-item_active" : null]}
                            onclick={() => {
                                if (this.Static.catActive == index) { return }
                                this.Static.catActive = index
                                this.fn("addEvent")
                            }}>
                            <span>{item.name}</span>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}