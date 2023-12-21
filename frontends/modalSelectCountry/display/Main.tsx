import { Cemjsx } from "cemjs-all"
import allCountries from "json/allCountries.json"
import search from '@svg/icon/search.svg'
import blank from "@images/modalAuthorization/blank.gif"

export default function () {
    return (
        <main class="modalWindow_main">
            <div
                class={[
                    "modalWindow_field",
                    this.Static.search ? "modalWindow_field__valid" : null
                ]}>
                <input
                    type="text"
                    oninput={(e) => {
                        this.Static.search = e.target.value;
                        this.fn("changeInput", e, allCountries)
                    }}
                />
                <div class="modalWindow_field_labelLine">
                    <img src={search} alt="Поиск" />
                    <span>Поиск</span>
                </div>
            </div>
            <div class="modalScroll scroll">
                {
                    this.Static.listCountries.map(item => {
                        return (
                            <div
                                class="modalScroll_item"
                                onclick={() => {
                                    this.cross({ co: item.co, ph: item.ph, na: item.na })
                                    this.fn("close")
                                }}
                            >
                                <img src={`/contents/icons/flagsnew/${item.co}.svg`} alt="Флаг" />
                                {item.na}
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}