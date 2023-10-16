import { Cemjsx } from "cemjs-all"

export default function ({ items, active }) {
    return (
        <div class="category-wrap">
            <ul class="category-carousel">
                {items.map((item: any, index: number) => {
                    return (
                        <li class={["category-item", active == index ? "category-item_active" : null]}
                            onclick={() => {
                                this.Static.catActive = index
                                console.log('=73bd96=',item.name)
                                this.Static.makeFilter.cat = index
                                console.log('=this.Static.makeFilter.cat=',this.Static.makeFilter.cat)
                                this.fn("change")
                                this.init()
                                
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