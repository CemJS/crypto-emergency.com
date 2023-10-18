import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

export const display = function () {
  return (
    <div
      class="modalWindow"
      ref="modalWindow"
      onclick={(e: any) => {
        if (e.target === this.Ref.modalBody) {
          this.fn("close")
        }
      }}
      init={this.func.show} >
      <div class="modalWindow_body" ref="modalBody">
        <div class="modalWindow_content modalWindow_content__narrow">
          <button class="modalWindow_button_close" onclick={this.func.close}>X</button>
          <header class="modalWindow_header">
            <h2 class="modalWindow_header_title">Восстановление пароля</h2>
          </header>
          <Navigation />
        </div>
      </div>
    </div>
  )
}