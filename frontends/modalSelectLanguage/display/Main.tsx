import { Cemjsx } from "cemjs-all"
import search from '@svg/icon/search.svg'

import language from '@json/languages'

export default function () {
    return (
        <main class="modalWindow_main">
            <div class="modalWindow_field">
                <input type="text" />
                <div class="modalWindow_field_labelLine">
                    <img src={search} alt="Поиск" />
                    <span>Поиск</span>
                </div>
            </div>
            <div class="modalLang scroll">
                {
                    language.map(item => {
                        return (
                            <div class="modalLang_item">
                                <img src={`/assets/svg/icon/flags/${item.code}.svg`} alt="Флаг" />
                                {item.orig_name}
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}