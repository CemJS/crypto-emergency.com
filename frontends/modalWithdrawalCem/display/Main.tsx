import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div class="modal modal_open">
            <div class="modal__black"
                onclick={() => {
                    setTimeout(() => {
                        this.clearData()
                    }, 5);
                }}
            />
            <div class="modal__container withdrawalCem">
                <header class="modal__header withdrawalCem__header">
                    <h2 class="withdrawalCem__title">
                        Вывод
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
                    <form class="withdrawalCem-form">
                        <div class="withdrawalCem-form__block">
                            {/* <span style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "display: block" : "display: none"}>Неверный e-mail</span> */}

                            <div class="withdrawalCem-form__block_input value">
                                <input
                                    type="text"
                                    placeholder='0'
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
                            <div class='withdrawalCem-form__block_available'>999 CEM доступны для вывода</div>
                        </div>

                        {/*    */}
                        <div class="withdrawalCem-form__block withdrawalCem-form__block_adress">
                            <span style={this.Static.pass.error == false ? "display: block" : "display: none"}>Пароль должен содержать минимум 1 специальный символ</span>
                            <div class="withdrawalCem-form__block_input">
                                {/* <img class="lock" src={lock} /> */}
                                <span class='lock'>Adress:</span>
                                <input class='adress_input'
                                // type={this.Static.pass.view ? "text" : "password"}
                                // style={this.Static.pass.error == false ? "border-color: red" : this.Static.pass.error == true && this.Static.pass.value.length > 0 ? "border-color: green" : ""}
                                // oninput={(e) => {
                                //   // this.Static.pass.error = this.Services.functions.validator.isStrongPassword(e.target.value, {
                                //   //   minLength: 8,
                                //   //   minLowercase: 0,
                                //   //   minUppercase: 0,
                                //   //   minNumbers: 0,
                                //   //   minSymbols: 1,
                                //   // });

                                //   // this.Static.pass.valid = this.Static.pass.error

                                //   this.Static.pass.value = e.target.value

                                //   this.fn("checkForm")
                                //   this.init()
                                // }}
                                />
                                {/* <img class="eye" src={this.Static.pass.view ? eyeSlash : eye}
                                onclick={() => {
                                    this.Static.pass.view = !this.Static.pass.view
                                    this.init()
                                }}
                                /> */}
                            </div>
                        </div>


                        <div class="withdrawalCem-form__footer">
                            <button class={["button", "button_gradient", "button_auth",
                                !this.Static.isValid ? "button_inactive" : null
                            ]}>
                                <span>ВЫВЕСТИ</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}