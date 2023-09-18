import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div class="modal modal_open modal_fullscreen">
            <div class="modal__black"
                onclick={() => {
                    setTimeout(() => {
                        this.Static.body.style.overflow = '';
                        this.clearData()
                    }, 5);
                }}
            />
            <div class="modal__container reset-password">
                <header class="modal__header reset-password__header">
                    <h2 class="registration__title">
                        Восстановление пароля
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
                    <form class="reset-password__form">
                        <label>E-mail</label>
                        <div class="reset-password__form_input">
                            <input type="text" placeholder="Введите ваш e-mail"
                                style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "border-color: red" : this.Static.email.valid == true ? "border-color: green" : null}
                                oninput={(e) => {
                                    if (this.Services.functions.validateEmail(e.target.value)) {
                                        this.Static.email.valid = true
                                        this.Ref.button.disabled = false
                                    } else {
                                        this.Static.email.valid = false
                                    }
                                    this.Static.email.value = e.target.value
                                    this.init()
                                }}
                            />
                        </div>
                        <div class="reset-password__form_footer">
                            <button ref="button" disabled class={["button", "button_gradient",
                                !this.Static.email.valid ? "button_inactive" : null
                            ]}
                            >
                                <span>Восстановить</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}