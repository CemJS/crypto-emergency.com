import { Cemjsx } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"

export default function () {
    return (
        <div class="modal modal_open">
            <div class="modal__black" />
            <div class="modal__container registration">
                <header class="modal__header registration__header">
                    <h2 class="registration__title">
                        Регистрация пользователя TEST
                    </h2>
                    <button
                        class="modal__close"
                        type="button"
                        onclick={this.clearData}
                    />
                </header>
                <div class="modal__body">

                    <div class="registration-form__block registration-form__block_email">
                        <label>E-mail</label>
                        <span style={this.Static.form.email.error ? "display: block" : "display: none"}>{this.Static.form.email.error}</span>
                        <div class="registration-form__block_input email">
                            <input
                                type="text"
                                placeholder={this.Static.email.placeholder}
                                style={this.Static.form.email.error ? "border-color: red" : this.Static.form.email.valid == true ? "border-color: green" : ""}
                                oninput={(e) => {
                                    console.log('=60ad1d=', e)
                                    this.Static.form.email.value = e.target.value
                                    this.Services.functions.formEmail(this.Static.form.email)
                                    // this.func.checkFrom()
                                    this.init()
                                }}
                            />
                        </div>
                    </div>



                    <div class="registration-form__footer">
                        <button
                            class={["button", "button_gradient", "button_auth"]}
                            onclick={async () => {

                                let data = {
                                    action: "verifyEmail",
                                    email: "test@test.ru"
                                }
                                let answer = await fetch(`/api/events/Users?uuid=${this.Variable.myInfo.uuid}`, {
                                    method: "POST",
                                    headers: { "content-type": "application/json" },
                                    body: JSON.stringify(data),
                                })

                                let json = await answer.json()
                                console.log('=3765b5=', 123, json)
                            }}
                        >
                            <span>Поиск пользователя</span>
                        </button>
                        <button
                            class={["button", "button_gradient", "button_auth"]}
                            onclick={async () => {

                                let data = {
                                    action: "testПосты",
                                    email: "652003e5c847c2a8a26f7a23"
                                }
                                let answer = await fetch(`/api/events/News?uuid=${this.Variable.myInfo.uuid}`, {
                                    method: "POST",
                                    headers: { "content-type": "application/json" },
                                    body: JSON.stringify(data),
                                })

                                let json = await answer.json()
                                console.log('=3765b5=', 123, json)
                            }}
                        >
                            <span>Поиск новости</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}