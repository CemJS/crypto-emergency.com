import { Cemjsx } from "cemjs-all"
import user from '@svg/modalMessage/icon_user.svg'
import email from '@svg/modalMessage/icon_email.svg'


export const display = function () {
  return (
    <div
      class="modalWindow"
      ref="modalWindow"
      onclick={(e) => {
        if (e.target === this.Ref.modalBody) {
          setTimeout(() => {
            this.clearData()
          }, 5)
        }
      }}
    >
      <div class="modalWindow_body" ref="modalBody">
        <div class="modalWindow_content">
          <button
            class="modalWindow_button_close"
            onclick={(e) => {
              setTimeout(() => {
                this.clearData()
              }, 5)
            }}
          >X</button>
          <header class="modalWindow_header">
            <h3 class="modalWindow_header_title">Связь с нами</h3>
            <span class="modalWindow_header_subtitle">Напиши нам, и мы с Вами свяжемся!</span>
          </header>
          <main class="modalWindow_main">
            <div
              class={["modalWindow_field",]}
              onclick={() => {
                console.log('=7ccaa8=', this.Ref.userName.value)
              }}
            >
              <input type="text" ref="userName"></input>
              <div class="modalWindow_field_labelLine">
                <img src={user}></img>
                <span>Ваше имя</span>
              </div>
            </div>
            <div class="modalWindow_field">
              <input type="email" ref="userEmail"></input>
              <div class="modalWindow_field_labelLine">
                <img src={email}></img>
                <span>Email</span>
              </div>
            </div>
          </main>
          <footer class="modalWindow_footer">
            <div class="f-center">
              <button class="btn btn_gradient">
                <span>Отправить</span>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}