import { Cemjsx } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"

export const display = function () {
  return (
    <div class="modal modal_open">
      <div class="modal__black"
        onclick={() => {
          setTimeout(() => {
            this.Static.body.style.overflow = '';
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
                this.Static.body.style.overflow = '';
                this.clearData()
              }, 5);
            }}
          />
        </header>
        <div class="modal__body">
          <form class="registration-form">
            <div class="registration-form__block registration-form__block_email">
              <label>E-mail</label>
              <span style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "display: block" : "display: none"}>Неверный e-mail</span>
              <div class="registration-form__block_input email">
                <input
                  type="text"
                  placeholder={this.Static.email.placeholder}
                  style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "border-color: red" : this.Static.email.valid == true ? "border-color: green" : ""}
                  oninput={(e) => {
                    if (this.Services.functions.validateEmail(e.target.value)) {
                      this.Static.email.valid = true
                    } else {
                      this.Static.email.valid = false
                    }
                    this.Static.email.value = e.target.value
                    this.fn("checkForm")
                    this.init()
                  }}
                />
              </div>
            </div>
            <div class="registration-form__block registration-form__block_password">
              <label>Пароль</label>
              <span style={this.Static.pass.error == false ? "display: block" : "display: none"}>Пароль должен содержать минимум 1 специальный символ</span>
              <div class="registration-form__block_input">
                <img class="lock" src={lock} />
                <input
                  type={this.Static.pass.view ? "text" : "password"}
                  style={this.Static.pass.error == false ? "border-color: red" : this.Static.pass.error == true && this.Static.pass.value.length > 0 ? "border-color: green" : ""}
                  oninput={(e) => {
                    this.Static.pass.error = this.Services.functions.validator.isStrongPassword(e.target.value, {
                      minLength: 8,
                      minLowercase: 0,
                      minUppercase: 0,
                      minNumbers: 0,
                      minSymbols: 1,
                    });

                    this.Static.pass.valid = this.Static.pass.error

                    this.Static.pass.value = e.target.value

                    this.fn("checkForm")
                    this.init()
                  }}
                />
                <img class="eye" src={this.Static.pass.view ? eyeSlash : eye}
                  onclick={() => {
                    this.Static.pass.view = !this.Static.pass.view
                    this.init()
                  }}
                />
              </div>
            </div>
            <div class="registration-form__block registration-form__block_password">
              <label>Подтвердите пароль</label>
              <span style={this.Static.repeatPass.error == false ? "display: block" : "display: none"}>Пароли не сопадают</span>
              <div class="registration-form__block_input">
                <img class="lock" src={lock} />
                <input
                  type={this.Static.repeatPass.view ? "text" : "password"}
                  style={this.Static.repeatPass.error == false ? "border-color: red" : this.Static.repeatPass.error == true && this.Static.repeatPass.value.length > 0 ? "border-color: green" : null}
                  oninput={(e) => {
                    this.Static.repeatPass.value = e.target.value

                    if (this.Static.repeatPass.value !== this.Static.pass.value) {
                      this.Static.repeatPass.error = false
                      this.Static.repeatPass.valid = false
                    } else {
                      this.Static.repeatPass.error = true
                      this.Static.repeatPass.valid = true
                    }

                    this.fn("checkForm")
                    this.init()
                  }}
                />
                <img class="eye" src={this.Static.repeatPass.view ? eyeSlash : eye}
                  onclick={() => {
                    this.Static.repeatPass.view = !this.Static.repeatPass.view
                    this.init()
                  }}
                />
              </div>
            </div>
            <div class="registration-form__checkbox">
              <div class="checkbox"
                onclick={() => {
                  if (this.Ref.check.checked) {
                    this.Static.check = false
                    this.Ref.check.checked = this.Static.check
                  } else {
                    this.Static.check = true
                    this.Ref.check.checked = this.Static.check
                  }

                  this.fn("checkForm")
                  this.init()
                }}
              >
                <input ref="check" class="checkbox__input" id="agree" type="checkbox" required="required" />
                <label class="checkbox__label" htmlFor="agree">
                  {`Я согласен с `}
                  <span>
                    <a class="politics-site" href="">политикой сайта</a>
                  </span>
                </label>
              </div>
            </div>
            <div class="registration-form__footer">
              <button class={["button", "button_gradient", "button_auth",
                !this.Static.isValid ? "button_inactive" : null
              ]}>
                <span>Регистрация</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}