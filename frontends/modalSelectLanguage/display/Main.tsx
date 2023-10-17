import { Cemjsx } from "cemjs-all"
import search from '@svg/icon/search.svg'

import language from '@json/languages'

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
                        this.fn("changeInput", e, language)
                    }}
                />
                <div class="modalWindow_field_labelLine">
                    <img src={search} alt="Поиск" />
                    <span>Поиск</span>
                </div>
            </div>
            <div class="modalScroll scroll">
                {
                    this.Static.listLanguage.map(item => {
                        return (
                            <div
                                class="modalScroll_item"
                                onclick={() => {
                                    this.cross({ name: item.eng_name, nameOrig: item.orig_name, code: item.code })
                                    this.fn("close")
                                }}
                            >
                                {item.orig_name}
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}