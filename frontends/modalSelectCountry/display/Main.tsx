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
                            <div class="modalScroll_item">
                                <img src={`/contents/icons/flagsnew/${item.co}.svg`} alt="Флаг" />
                                {item.na}
                            </div>
                        )
                    })
                }
            </div>
        </main>
        // <div class="modal modal_open">
        //     <div class="modal__black"
        //         onclick={() => {
        //             setTimeout(() => {
        //                 this.clearData()
        //             }, 5);
        //         }}
        //     />
        //     <div class="modal__container select-country">
        //         <header class="modal__header">
        //             <h4 class="select-country__title">
        //                 Выбрать страну
        //             </h4>
        //             <button
        //                 class="modal__close"
        //                 type="button"
        //                 onclick={() => {
        //                     setTimeout(() => {
        //                         this.clearData()
        //                     }, 5);
        //                 }}
        //             />
        //         </header>
        //         <div class="modal__body">
        //             <input class="select-country__search" type="text"
        //                 oninput={(e) => {
        //                     this.fn("changeInput", e, allCountries)
        //                 }}
        //             />
        //             <ul class="select-country__list">
        //                 {
        //                     this.Static.listCountries.map((item) => {
        //                         return (
        //                             <li class="select-country__item"
        //                                 onclick={() => {
        //                                     this.cross({ name: item.na, code: item.co })
        //                                     this.clearData()
        //                                 }}
        //                             >
        //                                 <img src={blank} class={["flag", `flag-${item.co}`]} />
        //                                 {item.na}
        //                             </li>
        //                         )
        //                     })
        //                 }
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}