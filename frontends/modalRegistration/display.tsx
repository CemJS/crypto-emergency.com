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
      <div class="modal__container registration">
        <header class="modal__header registration__header">
          <h2 class="registration__title">
            Регистрация пользователя
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
          <form class="registration-form">
            <div class="registration-form__block registration-form__block_email">
              <label>E-mail</label>
              <div class="registration-form__block_input email">
                <input type="text" placeholder="Введите ваш e-mail" />
              </div>
            </div>
            <div class="registration-form__block registration-form__block_password">
              <label>Пароль</label>
              <div class="registration-form__block_input">
                <img class="lock" src="./assets/svg/modalRegistration/lock.svg" />
                <input type="text" />
                <img class="eye" src="./assets/svg/modalRegistration/eye.svg" />
              </div>
            </div>
            <div class="registration-form__block registration-form__block_password">
              <label>Подтвердите пароль</label>
              <div class="registration-form__block_input">
                <img class="lock" src="./assets/svg/modalRegistration/lock.svg" />
                <input type="text" />
                <img class="eye" src="./assets/svg/modalRegistration/eye.svg" />
              </div>
            </div>
            <div class="registration-form__checkbox">
              <div class="checkbox"
                onclick={() => {
                  this.Ref.check.checked = !this.Ref.check.checked
                  console.log('=2fb3e3=', this.Ref.check.checked)
                  this.init()
                }}
              >
                <input ref="check" class="checkbox__input" id="agree" type="checkbox" required="required" checked={this.Static.check} />
                <label class="checkbox__label" htmlFor="agree">
                  {`Я согласен с `}
                  <span>
                    <a class="politics-site" href="">политикой сайта</a>
                  </span>
                </label>
              </div>
            </div>
            <div class="registration-form__footer">
              <button class="registration-form__button">
                <span>Регистрация</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}