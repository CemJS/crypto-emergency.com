import { Cemjsx } from "cemjs-all"
import search from '@svg/icon/search.svg'

const language = [
    {
        "lang": "Russian",
        "lang_orig": "Русский",
    },
    {
        "lang": "English",
        "lang_orig": "English",
    },
    {
        "lang": "China",
        "lang_orig": "俄语",
    },
    {
        "lang": "Deutsch",
        "lang_orig": "Deutsch",
    },
    {
        "lang": "Greek",
        "lang_orig": "Ελληνικά",
    },

    {
        "lang": "Spanish",
        "lang_orig": "Español",
    },
    {
        "lang": "French",
        "lang_orig": "Français",
    },
    {
        "lang": "Hebrew",
        "lang_orig": "רובית",
    },
    {
        "lang": "Armenian",
        "lang_orig": "ռուսերեն",
    },
    {
        "lang": "Indonesian",
        "lang_orig": "Bahasa Indonesia",
    },
    {
        "lang": "Italian",
        "lang_orig": "Italiano",
    },
    {
        "lang": "Japanese",
        "lang_orig": "日本語",
    },
    {
        "lang": "polish",
        "lang_orig": "polszczyzna",
    },
    {
        "lang": "Portuguese",
        "lang_orig": "Português",
    },

    {
        "lang": "Turkish",
        "lang_orig": "Türkçe",
    },
    {
        "lang": "Український",
        "lang_orig": "Український",
    }
]

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
            <div>
                {
                    language.map((item, index) => {
                        return (
                            <div>{item.lang}</div>
                        )
                    })
                }
            </div>
        </main>
        // <div class="modal modal_open">
        //     <div class="modal__black"
        //         onclick={() => {
        //             setTimeout(() => {
        //                 this.Static.body.style.overflow = '';
        //                 this.clearData()
        //             }, 5);
        //         }}
        //     />
        //     <div class="modal__container language">
        //         <header class="modal__header">
        //             <h4 class="language__title">
        //                 Выбрать язык
        //             </h4>
        //             <button
        //                 class="modal__close"
        //                 type="button"
        //                 onclick={() => {
        //                     setTimeout(() => {
        //                         this.Static.body.style.overflow = '';
        //                         this.clearData()
        //                     }, 5);
        //                 }}
        //             />
        //         </header>
        //         <div class="modal__body language__container">
        //             <ul class="language__list">
        //                 {
        //                     language.map((item) => {
        //                         return (
        //                             <li class="language__item">
        //                                 <a>
        //                                     <span>
        //                                         {item.lang_orig}
        //                                     </span>
        //                                 </a>
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