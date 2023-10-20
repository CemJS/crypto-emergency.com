import { Cemjsx } from "cemjs-all"

interface Params {
    items: Array<Item>
    options: Options
}

interface Item {
    cover: string
    name: string
    desc: string
    link?: string
}

interface Options {
    mainClass: string
}

class TitlePreview {

}




const display = function (params: Params) {
    console.log('=a4d1ea=', params)
    const { items, options } = params
    const { mainClass } = options
    console.log('=a4d1ea=', items, options, mainClass)

    return (
        <div class="about_main">
            <div class="about_main_slide" ref="aboutSlide">
                {
                    items.map(item => {
                        return (
                            <div class="about_main_item" style={`background-image: url(${item.cover});`}>
                                <div class="about_main_item_content">
                                    <div class="about_main_item_name">{item.name}</div>
                                    <div class="about_main_item_desc">{item.desc}</div>
                                    {
                                        item?.link ?
                                            <a href={item.link} class="btn btn_timing" onclick={this.Fn.link}>Перейти</a> : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div class="about_main_arrows">
                <button
                    class="about_main_arrow about_main_arrow_prev glass"
                    onclick={() => {
                        let lists = document.querySelectorAll(".about_main_item");
                        this.Ref.aboutSlide.prepend(lists[lists.length - 1])
                    }}
                ></button>
                <button
                    class="about_main_arrow about_main_arrow_next glass"
                    onclick={() => {
                        let lists = document.querySelectorAll(".about_main_item");
                        this.Ref.aboutSlide.appendChild(lists[0])
                    }}
                ></button>
            </div>
        </div>
    )
}

export default display