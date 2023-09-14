import { Cemjsx } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"
import frameDefault from "@svg/lenta/default.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import leveGray from "@svg/lenta/level_gray.svg"

export const display = function () {
  return (
    <div class="page">
      <div class="settings">
        <div class="settings__container">
          <div>
            <div class="settings__list">
              <div class={["settings__list_container",
                this.Static.burger
                  ?
                  "settings__list_active"
                  :
                  null
              ]}>
                <p class="settings__list_title"
                  onclick={() => {
                    if (this.Static.burger) {
                      this.Static.burger = false
                    } else {
                      this.Static.burger = true
                    }
                  }}
                >Социальная сеть</p>
                <div class={["settings__list_subcategory",
                  this.Static.category == "security"
                    ?
                    "settings__list_subcategory_active"
                    :
                    null
                ]}
                  onclick={() => {
                    this.Static.category = "security"
                  }}
                >
                  <p>Безопасность</p>
                </div>
                <div class={["settings__list_subcategory",
                  this.Static.category == "blackList"
                    ?
                    "settings__list_subcategory_active"
                    :
                    null
                ]}
                  onclick={() => {
                    this.Static.category = "blackList"
                  }}
                >
                  <p>Черный список</p>
                </div>
                <div class="settings__list_line" />
              </div>
            </div>
          </div>

          <div class="settings__body">
            {
              this.Static.category == "security"
                ?
                <div class="settings__body_item">
                  <div class="settings__body_wrapper">
                    <h2>Пароль</h2>
                    <h3>Изменить пароль</h3>
                    <div class="registration-form__block registration-form__block_password">
                      <label>Старый пароль</label>
                      <span style={this.Static.pass.error == false ? "display: block" : "display: none"}>Пароль должен содержать минимум 1 специальный символ</span>
                      <div class="registration-form__block_input">
                        <img class="lock" src={lock} />
                        <input
                          type={this.Static.pass.view ? "text" : "password"}
                          style={this.Static.pass.error == false ? "border-color: red" : this.Static.pass.error == true && this.Static.pass.value.length > 0 ? "border-color: green" : ""}
                          placeholder={this.Static.pass.placeholder}
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
                      <label>Новый пароль</label>
                      <span style={this.Static.repeatPass.error == false ? "display: block" : "display: none"}>Пароли не сопадают</span>
                      <div class="registration-form__block_input">
                        <img class="lock" src={lock} />
                        <input
                          type={this.Static.repeatPass.view ? "text" : "password"}
                          style={this.Static.repeatPass.error == false ? "border-color: red" : this.Static.repeatPass.error == true && this.Static.repeatPass.value.length > 0 ? "border-color: green" : null}
                          placeholder={this.Static.pass.placeholder}
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
                    <div class="registration-form__footer">
                      <button class={["button", "button_gradient", "button_auth",
                        !this.Static.isValid ? "button_inactive" : null
                      ]}>
                        <span>применить</span>
                      </button>
                    </div>
                  </div>
                  <div class="settings__body_wrapper">
                    <p>Вы можете удалить свой профиль</p>
                    <div class="settings__delete_user">
                      <button class="button button_gradient">
                        <span>удалить профиль</span>
                      </button>
                    </div>
                  </div>
                </div>
                :
                <div class="settings__body_item">
                  <ul class="settings__blacklist">
                    <li>
                      <a class="avatar" href="#">
                        <div class="avatar__icon">
                          <img class="avatar__photo"
                            src={avatarDefault}
                          />
                          <img class="avatar__frame"
                            src={frameDefault}
                          />
                          <div>
                            <div class="avatar__level">
                              <img src={leveGray} />
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        {/* <div class="avatar__name">
                          <span>{item.authorFull.nickname}</span>
                        </div> */}

                      </a>
                      <p>Удалить из списка</p>
                    </li>
                  </ul>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}