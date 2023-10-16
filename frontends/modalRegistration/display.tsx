import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

export const display = function () {
  return (
    <div
      class="modalWindow"
      ref="modalWindow"
      // onclick={(e: any) => {
      //   if (e.target === this.Ref.modalBody) {
      //     this.fn("close")
      //   }
      // }}
      init={this.func.show} >
      <div class="modalWindow_body" ref="modalBody">
        <div class="modalWindow_content">
          <button class="modalWindow_button_close" onclick={this.func.close}>X</button>
          <header class="modalWindow_header">
            <h2 class="modalWindow_header_title">Регистрация нового пользователя</h2>
          </header>
          <Navigation />
          <footer class="modalWindow_footer">
            <p>Регистрируясь на платформе, вы принимаете <a href="/user-agreement" onclick={this.Fn.link} class="link" >пользовательское соглашение</a> и <a href="/user-data-policy" onclick={this.Fn.link} class="link">политику конфиденциальности</a></p>
          </footer>
        </div>
      </div>
    </div>
  )
}