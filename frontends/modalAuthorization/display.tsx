import { Cemjsx } from "cemjs-all"

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
      <div class="modal__container authorization">
        <header class="modal__header authorization__header">
          <h2 class="authorization__title">
            Авторизация
          </h2>
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
          <div class="authorization__mobileoreemail">
            <button class={["button", this.Static.buttonActive == "E-mail" ? "button__active" : null]}
              onclick={() => {
                this.Static.buttonActive = "E-mail"
              }}
            >
              E-mail
            </button>
            <button class={["button", this.Static.buttonActive == "phone" ? "button__active" : null]}
              onclick={() => {
                this.Static.buttonActive = "phone"
              }}
            >
              Телефон
            </button>
          </div>
          <form>
            <div class="authorization-form">
            <div class="authorization-form__container">
              <label>{this.Static.buttonActive}</label>
              <div class="authorization-form__block_input email">
                <input type="text" placeholder="Введите ваш e-mail" />
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}