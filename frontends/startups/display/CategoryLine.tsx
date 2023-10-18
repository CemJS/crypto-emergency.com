import { Cemjsx } from "cemjs-all"

export default function ({ items }) {
    return (
            <ul class="category-carousel">
                {items.map((item: any, index: number) => {
                    return (
                        <li class={["category-item", this.Static.catActive == index ? "category-item_active" : null]}
                            onclick={() => {
                                // console.log('=e7acc8=',item.name)
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
    )
}