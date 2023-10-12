import { Cemjsx } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"
import user from '@svg/modalMessage/icon_user.svg'
import email from '@svg/modalMessage/icon_email.svg'
import done from '@svg/icon/done.svg'

export default function () {
    return (
        <div
            class="modalWindow"
            ref="modalWindow"
            onclick={(e) => {
                if (e.target === this.Ref.modalBody) {
                    setTimeout(() => {
                        this.clearData()
                    }, 5)
                    this.Ref.modalWindow.classList.remove('activeModal');
                    this.Static.body.classList.remove('activeModal');
                    this.Static.body.style.overflow = 'auto';
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
                            this.Ref.modalWindow.classList.remove('activeModal');
                            this.Static.body.classList.remove('activeModal');
                            this.Static.body.style.overflow = 'auto';
                        }}
                    >X</button>
                    <header class="modalWindow_header">
                        <h2 class="modalWindow_header_title">Регистрация нового пользователя</h2>
                    </header>
                    <main class="modalWindow_main">
                        <div class="steps">
                            {
                                this.Static.steps.map(item => {
                                    return (
                                        <span
                                            class={["steps_circle", item <= this.Static.currentStep ? "steps_circle__active" : null]}
                                        >
                                            {item}
                                        </span>
                                    )
                                })
                            }
                            <div class="steps_progress">
                                <div class="steps_indicator" ref="indicator"></div>
                            </div>
                        </div>
                        <div class="modalReg">
                            <div class="modalReg_line">
                                <div class="modalReg_page" ref="slidePage">
                                    <div class="modalReg_form">
                                        <h3 class="modalReg_page-title">Подтвердите адрес электронной почты</h3>
                                        <div class="modalWindow_field">
                                            <input type="email" ref="userEmail" required></input>
                                            <div class="modalWindow_field_labelLine">
                                                <img src={email}></img>
                                                <span>Email</span>
                                            </div>
                                        </div>
                                        <div class="f-center mt_25">
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.Ref.slidePage.style.marginLeft = `-${this.Static.widthSlide * this.Static.currentStep}%`
                                                    this.Static.currentStep = ++this.Static.currentStep;
                                                    this.Ref.indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
                                                    this.init()
                                                }}
                                            >
                                                Далее
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="modalReg_page">
                                    <div class="modalReg_form">
                                        <div class="modalWindow_field">
                                            <input type="text" ref="userName" required></input>
                                            <div class="modalWindow_field_labelLine">
                                                <img src={user}></img>
                                                <span>Имя пользователя</span>
                                            </div>
                                        </div>
                                        <div class="modalReg_field">
                                            <div class="label">Язык</div>
                                            <input type="text" />
                                        </div>
                                        <div class="modalReg_field">
                                            <div class="label">Страна</div>
                                            <input type="text" />
                                        </div>
                                        <div class="f-center mt_25 modalReg_btns">
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.Ref.slidePage.style.marginLeft = "0"
                                                    this.Static.currentStep = --this.Static.currentStep;
                                                    this.Ref.indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
                                                    this.init()
                                                }}
                                            >
                                                Назад
                                            </button>
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.Ref.slidePage.style.marginLeft = "-50%"
                                                    this.Static.currentStep = ++this.Static.currentStep;
                                                    this.Ref.indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
                                                    this.init()
                                                }}
                                            >
                                                Далее
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="modalReg_page">
                                    <div class="modalReg_form">
                                        <div class="modalWindow_field">
                                            <input type="password" ref="pass" required></input>
                                            <div class="modalWindow_field_labelLine">
                                                <img src={user}></img>
                                                <span>Пароль:</span>
                                            </div>
                                        </div>
                                        <div class="modalWindow_field">
                                            <input type="password" ref="confirmPass" required></input>
                                            <div class="modalWindow_field_labelLine">
                                                <img src={user}></img>
                                                <span>Повторить пароль:</span>
                                            </div>
                                        </div>
                                        <div class="f-center mt_25 modalReg_btns">
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.Ref.slidePage.style.marginLeft = "-25%"
                                                    this.Static.currentStep = --this.Static.currentStep;
                                                    this.Ref.indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
                                                    this.init()
                                                }}
                                            >
                                                Назад
                                            </button>
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.Ref.slidePage.style.marginLeft = "-75%"
                                                    this.Static.currentStep = ++this.Static.currentStep;
                                                    this.Ref.indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
                                                    this.init()
                                                }}
                                            >Далее</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="modalReg_page">
                                    <p>Успешный успех!</p>
                                    <div class="f-center mt_25 modalReg_btns">
                                        <button
                                            class="btn btn_timing"
                                            onclick={() => {
                                                this.Ref.slidePage.style.marginLeft = "-50%"
                                                this.Static.currentStep = --this.Static.currentStep;
                                                this.Ref.indicator.style.width = `${(this.Static.currentStep - 1) / (this.Static.steps.length - 1) * 100}%`
                                                this.init()
                                            }}
                                        >
                                            Назад
                                        </button>
                                        <button
                                            class="btn btn_timing"
                                            onclick={() => {
                                                setTimeout(() => {
                                                    this.clearData()
                                                }, 5)
                                            }}
                                        >
                                            Зарегистрироваться
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                    <footer class="modalWindow_footer">
                        <p>если у вас уже есть аккаунт <a href="#">авторизуйтесь</a></p>
                        <p>Нажимая «Продолжить», вы принимаете <a href="#">пользовательское соглашение</a> и <a href="#">политику конфиденциальности</a></p>
                    </footer>
                </div>
            </div>
        </div>
        // <div class="modal modal_open">
        //     <div class="modal__black" />
        //     <div class="modal__container registration">
        //         <header class="modal__header registration__header">
        //             <h2 class="registration__title">
        //                 Регистрация пользователя
        //             </h2>
        //             <button
        //                 class="modal__close"
        //                 type="button"
        //                 onclick={this.clearData}
        //             />
        //         </header>
        //         <div class="modal__body">
        //             <form class="registration-form">
        //                 <div class="registration-form__block registration-form__block_email">
        //                     <label>E-mail</label>
        //                     <span style={this.Static.form.email.error ? "display: block" : "display: none"}>{this.Static.form.email.error}</span>
        //                     <div class="registration-form__block_input email">
        //                         <input
        //                             type="text"
        //                             placeholder={this.Static.email.placeholder}
        //                             style={this.Static.form.email.error ? "border-color: red" : this.Static.form.email.valid == true ? "border-color: green" : ""}
        //                             oninput={(e) => {
        //                                 console.log('=60ad1d=', e)
        //                                 this.Static.form.email.value = e.target.value
        //                                 this.Services.functions.formEmail(this.Static.form.email)
        //                                 // this.func.checkFrom()
        //                                 this.init()
        //                             }}
        //                         />
        //                     </div>
        //                 </div>
        //                 <div class="registration-form__block registration-form__block_password">
        //                     <label>Пароль</label>
        //                     <span style={this.Static.pass.error == false ? "display: block" : "display: none"}>Пароль должен содержать минимум 1 специальный символ</span>
        //                     <div class="registration-form__block_input">
        //                         <img class="lock" src={lock} />
        //                         <input
        //                             type={this.Static.pass.view ? "text" : "password"}
        //                             style={this.Static.pass.error == false ? "border-color: red" : this.Static.pass.error == true && this.Static.pass.value.length > 0 ? "border-color: green" : ""}
        //                             oninput={(e) => {
        //                                 this.Static.pass.error = this.Services.functions.validator.isStrongPassword(e.target.value, {
        //                                     minLength: 8,
        //                                     minLowercase: 0,
        //                                     minUppercase: 0,
        //                                     minNumbers: 0,
        //                                     minSymbols: 1,
        //                                 });

        //                                 this.Static.pass.valid = this.Static.pass.error

        //                                 this.Static.pass.value = e.target.value

        //                                 this.fn("checkForm")
        //                                 this.init()
        //                             }}
        //                         />
        //                         <img class="eye" src={this.Static.pass.view ? eyeSlash : eye}
        //                             onclick={() => {
        //                                 this.Static.pass.view = !this.Static.pass.view
        //                                 this.init()
        //                             }}
        //                         />
        //                     </div>
        //                 </div>
        //                 <div class="registration-form__block registration-form__block_password">
        //                     <label>Подтвердите пароль</label>
        //                     <span style={this.Static.repeatPass.error == false ? "display: block" : "display: none"}>Пароли не сопадают</span>
        //                     <div class="registration-form__block_input">
        //                         <img class="lock" src={lock} />
        //                         <input
        //                             type={this.Static.repeatPass.view ? "text" : "password"}
        //                             style={this.Static.repeatPass.error == false ? "border-color: red" : this.Static.repeatPass.error == true && this.Static.repeatPass.value.length > 0 ? "border-color: green" : null}
        //                             oninput={(e) => {
        //                                 this.Static.repeatPass.value = e.target.value

        //                                 if (this.Static.repeatPass.value !== this.Static.pass.value) {
        //                                     this.Static.repeatPass.error = false
        //                                     this.Static.repeatPass.valid = false
        //                                 } else {
        //                                     this.Static.repeatPass.error = true
        //                                     this.Static.repeatPass.valid = true
        //                                 }

        //                                 this.fn("checkForm")
        //                                 this.init()
        //                             }}
        //                         />
        //                         <img class="eye" src={this.Static.repeatPass.view ? eyeSlash : eye}
        //                             onclick={() => {
        //                                 this.Static.repeatPass.view = !this.Static.repeatPass.view
        //                                 this.init()
        //                             }}
        //                         />
        //                     </div>
        //                 </div>
        //                 <div class="registration-form__checkbox">
        //                     <div class="checkbox"
        //                         onclick={() => {
        //                             if (this.Ref.check.checked) {
        //                                 this.Static.check = false
        //                                 this.Ref.check.checked = this.Static.check
        //                             } else {
        //                                 this.Static.check = true
        //                                 this.Ref.check.checked = this.Static.check
        //                             }

        //                             this.fn("checkForm")
        //                             this.init()
        //                         }}
        //                     >
        //                         <input ref="check" class="checkbox__input" id="agree" type="checkbox" required="required" />
        //                         <label class="checkbox__label" htmlFor="agree">
        //                             {`Я согласен с `}
        //                             <span>
        //                                 <a class="politics-site" href="">политикой сайта</a>
        //                             </span>
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div class="registration-form__footer">
        //                     <button class={["button", "button_gradient", "button_auth",
        //                         !this.Static.isValid ? "button_inactive" : null
        //                     ]}>
        //                         <span>Регистрация</span>
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    )
}