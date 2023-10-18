import { Cemjsx } from "cemjs-all"

export default function ({ items, active }) {
    return (
            <ul class="category-carousel">
                {items.map((item: any, index: number) => {
                    return (
                        <li class={["category-item", active == index ? "category-item_active" : null]}
                            onclick={() => {
                                this.Static.catActive = index
                                
                                if (this.Static.makeFilter.cat == index) { return } 
                                this.Static.makeFilter.cat = index
            
                                this.fn("addEvent")
                                // this.init()
                            }}
                        >
                            <span>{item.name}</span>
                        </li>
                    )
                })
                }
            </ul>
    )
}