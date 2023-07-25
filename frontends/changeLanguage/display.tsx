import { Cemjsx } from "cemjs-all"
import languages from 'json/languages.json'

export const display = function () {
  return (
    <div class="modal modal_open">
      <div class="modal__black"
        onclick={() => {
          setTimeout(() => {
            this.clearData()
          }, 5);
        }}
      />
      <div class="modal__container change-language">
        <header class="modal__header">
          <h4 class="change-language__title">
            Выбрать язык
          </h4>
          <button
            class="modal__close"
            type="button"
            onclick={() => {
              setTimeout(() => {
                this.clearData()
              }, 5);
            }}
          />
        </header>
        <div class="modal__body">
          <input class="change-language__search" type="text" 
            oninput={(e) => {
              this.fn("changeInput", e, languages)
            }}
          />
          <ul class="change-language__list">
            {
              this.Static.listLang.map((item) => {
                return (
                  <li class="change-language__item">
                    {item.eng_name} ({item.orig_name})
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )

}