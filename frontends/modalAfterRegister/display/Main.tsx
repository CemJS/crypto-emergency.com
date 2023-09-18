import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div class="modal modal_open">
            <div class="modal__black" />
            <div class="modal__container">
                <header class="modal__header">
                    <h2>
                        Завершении регистрации
                    </h2>
                </header>
                <div class="modal__body">
                    <div class="after-register">
                        <form class="after-register__form"
                            onsubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div class="after-register__block">
                                <label>Nickname</label>
                                <div class="error">
                                    <span style={this.Static.nickname?.value.length > 0 && this.Static.nickname.valid == false ? "display: block" : "display: none"}>{this.Static.nickname.error}</span>
                                </div>
                                <input
                                    type="text"
                                    value={this.Static.nickname.value}
                                    placeholder={this.Static.nickname.placeholder}
                                    style={this.Static.nickname?.value.length > 0 && this.Static.nickname.valid == false ? "border-color: red" : this.Static.nickname.valid == true ? "border-color: green" : null}
                                    oninput={async (e) => {
                                        let validate = await this.Services.functions.validateForms.nickname(e.target.value)
                                        // let promise = new Promise((resolve, reject) => {
                                        //     resolve(this.Services.functions.validateForms.nickname(e.target.value));
                                        // });

                                        // promise.then(
                                        //   (value) => this.Static.nickname.error = value[0]
                                        // )

                                        this.Static.nickname.error = validate[0]
                                        this.Static.nickname.valid = validate[1]
                                        this.Static.nickname.value = e.target.value

                                        this.fn("checkForm")
                                        this.init()
                                    }}
                                />
                            </div>
                            <div class="after-register__block">
                                <label>Ваш язык</label>
                                <div class="error">
                                    <span style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "display: block" : "display: none"}>Неверный e-mail</span>
                                </div>
                                <input
                                    type="text"
                                    value={this.Static.lang.value}
                                    placeholder={this.Static.lang.placeholder}
                                    onclick={() => {
                                        this.Fn.initOne({
                                            name: "changeLanguage"
                                        })
                                    }}
                                />
                            </div>
                            <div class="after-register__block">
                                <label>Страна</label>
                                <div class="error">
                                    <span style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "display: block" : "display: none"}>Неверный e-mail</span>
                                </div>
                                <div class="after-register__block_input">
                                    <input
                                        type="text"
                                        value={this.Static.country.value}
                                        placeholder={this.Static.country.placeholder}
                                        onclick={() => {
                                            this.Fn.initOne({
                                                name: "modalSelectCountry"
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="registration-form__footer">
                                <button class={["button", "button_gradient", "button_auth",
                                    !this.Static.isValid ? "button_inactive" : null
                                ]}>
                                    <span>Отправить</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}