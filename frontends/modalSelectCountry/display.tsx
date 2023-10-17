import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

export const display = function () {
  return (
    <div
      class="modalWindow"
      ref="modalWindowCountry"
      init={this.func.show} >
      <div class="modalWindow_body">
        <div class="modalWindow_content modalWindow_content__select-lang">
          <button class="modalWindow_button_close" onclick={this.func.close}>X</button>
          <header class="modalWindow_header">
            <h2 class="modalWindow_header_title">Выбор страны</h2>
          </header>
          <Navigation />
        </div>
      </div>
    </div>
  )
}