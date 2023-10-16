import { Cemjsx } from "cemjs-all"

export default function ({ items, active }) {
    return (
        <div class="category-wrap">
            <ul class="category-carousel">
                {items.map((item: any, index: number) => {
                    return (
                        <li class={["category-item", active == index ? "category-item_active" : null]}
                            onclick={() => {
                                console.log('=index=', index)
                                if (this.Static.catActive != index) {
                                    this.Static.catActive = index
                                    // console.log('=catActive=', this.Static.catActive)
                                }
                            }}
                        >
                            <span>{item.name}</span>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}