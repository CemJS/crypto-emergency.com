import { Cemjsx } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"
import user from '@svg/modalMessage/icon_user.svg'
import email from '@svg/modalMessage/icon_email.svg'
import done from '@svg/modalRegistration/done.svg'
import { validEmail } from "../functions"


const RenderSteps = function ({ steps, current }) {
    return (
        <div class="steps">
            {steps.map(item => { return <span class={["steps_circle", item <= current ? "steps_circle__active" : null]}> {item} </span> })}
            <div class="steps_progress">
                <div class="steps_indicator" ref="indicator"></div>
            </div>
        </div>
    )
}

export default function () {
    return (
        <div class="modalWindow" ref="modalWindow" >
            <div class="modalWindow_body" ref="modalBody">
                <div class="modalWindow_content">
                    <button class="modalWindow_button_close" onclick={this.func.close}>X</button>
                    <header class="modalWindow_header">
                        <h2 class="modalWindow_header_title">Регистрация нового пользователя</h2>
                    </header>
                    <main class="modalWindow_main">
                        <RenderSteps steps={this.Static.steps} current={this.Static.currentStep} />
                        <div class="modalReg">
                            <div class="modalReg_line">
                                <div class="modalReg_page" ref="slidePage">
                                    <div class="modalReg_form">
                                        <div style="display: flex; flex-direction: column; gap: 20px;">
                                            <h3 class="modalReg_page-title">Подтвердите адрес электронной почты</h3>
                                            <div class="modalWindow_field " ref="emailField">
                                                <input
                                                    type="email"
                                                    ref="userEmail"
                                                    required
                                                    autocomplete="off"
                                                    onchange={() => {
                                                        if (this.Ref.userEmail.value.length > 0) {
                                                            this.Ref.emailField.classList.add('modalWindow_field__valid');
                                                            this.Static.email = this.Ref.emailInput.value;
                                                        }
                                                        if (this.Ref.userEmail.value.length === 0) {
                                                            this.Ref.emailField.classList.remove('modalWindow_field__valid');
                                                        }
                                                    }}
                                                    oninput={() => {
                                                        this.Static.email = this.Ref.userEmail.value;
                                                        setTimeout(() => {
                                                            this.fn("validEmail", this.Ref.userEmail.value)
                                                        }, 3000)
                                                    }}
                                                />
                                                <div class="modalWindow_field_labelLine">
                                                    <img src={email}></img>
                                                    <span>Email</span>
                                                </div>
                                                <p class="modalWindow_field__status" ref="statusEmail"></p>
                                            </div>
                                        </div>

                                        <div class="modalReg-confirmCode" ref="confirmCode">
                                            <div class="modalReg-code" ref="inputCode">
                                                {
                                                    this.Static.code.map((item, index) => {
                                                        return (
                                                            <input
                                                                type="number"
                                                                class="modalReg-code_input"
                                                                onkeyup={(e) => { this.fn("handleKeyUp", e, index) }}
                                                            // oninput={(e) => { this.fn("validOneNum", e, index) }}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div class="modalReg_timer">
                                                {
                                                    this.Static.time > 0 ?
                                                        <div>
                                                            <p class="modalReg_timer__text">Запросить новый код подтверждения можно через</p>
                                                            <p class="modalReg_timer__text pl_10">{this.Static.time < 10 ? `0 : 0${this.Static.time}` : `0 : ${this.Static.time}`}</p>
                                                        </div>
                                                        :
                                                        <p
                                                            onclick={() => {
                                                                this.fn("resetTimer")
                                                            }}
                                                        >
                                                            Запросить код снова
                                                        </p>
                                                }
                                            </div>
                                        </div>


                                        <div class="f-center">
                                            <button
                                                ref="regBtnEmail"
                                                class={["btn btn_timing", "btn_passive"]}
                                                onclick={async () => {

                                                    this.Ref.confirmCode.classList.add("modalReg-confirmCode__active")
                                                    this.fn("timer")

                                                    let data = {
                                                        action: "registration",
                                                        email: this.Static.email,
                                                        step: 1,
                                                    }
                                                    let answer = await this.Services.functions.sendApi(`/api/events/Users?uuid=${this.Variable.myInfo.uuid}`, data)

                                                    console.log('=34b53d=', this.fn("isEmailPlatform", answer))

                                                    this.fn("isEmailPlatform", answer)



                                                    this.init()
                                                }}
                                            >
                                                Получить код подтверждение
                                            </button>
                                            {/* <button
                                                ref="regBtn1"
                                                class={["btn btn_timing btn_passive",]}
                                                onclick={async () => {

                                                    this.fn("clickNext", this.Ref.slidePage, this.Ref.indicator)

                                                    let data = {
                                                        action: "registration",
                                                        email: "anna.shalbuzova@mail.ru",
                                                        step: 1,
                                                    }

                                                    let answer = await this.Services.functions.sendApi(`/api/events/Users?uuid=${this.Variable.myInfo.uuid}`, data)



                                                    console.log('=dc0f09=', answer)
                                                    this.init()

                                                }}
                                            >
                                                Далее
                                            </button> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="modalReg_page">
                                    <div class="modalReg_form">
                                        <h3 class="modalReg_page-title">Заполните информация о себе</h3>
                                        <div class="modalWindow_field">
                                            <input type="text" ref="userName" required></input>
                                            <div class="modalWindow_field_labelLine">
                                                <img src={user}></img>
                                                <span>Имя пользователя</span>
                                            </div>
                                        </div>
                                        <div class="g-colEqual-2">
                                            <div
                                                class="dropdown"
                                                ref="chooseLang"
                                                onclick={() => {
                                                    this.Ref.chooseLang.classList.toggle("dropdown__active")
                                                    this.Ref.optionsLang.classList.toggle("dropdown-options__active")
                                                }}
                                            >
                                                <input ref="generalLang" class="dropdown_input" type="text" readonly placeholder="Язык" />
                                                <div class="dropdown-options" ref="optionsLang">
                                                    {
                                                        this.Static.lang.map(item => {
                                                            return (
                                                                <div
                                                                    class="dropdown-options_item"
                                                                    onmouseover={() => {
                                                                        this.func.checkFrom(this.Ref.generalLang, item.name)
                                                                        this.init()
                                                                    }}
                                                                >
                                                                    {item.name}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div
                                                class="dropdown"
                                                ref="chooseCountry"
                                                onclick={() => {
                                                    this.Ref.chooseCountry.classList.toggle("dropdown__active")
                                                    this.Ref.optionsCountries.classList.toggle("dropdown-options__active")
                                                }}
                                            >
                                                <input class="dropdown_input" type="text" readonly placeholder="Страна" />
                                                <div class="dropdown-options" ref="optionsCountries">
                                                    {
                                                        this.Static.countries.map(item => {
                                                            return (
                                                                <div class="dropdown-options_item">{item.name}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div class="f-center modalReg_btns">
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.Ref.slidePage.style.marginLeft = "0"
                                                    this.fn("clickPrev", this.Ref.indicator)
                                                    this.init()
                                                }}
                                            >
                                                Назад
                                            </button>
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.fn("clickNext", this.Ref.slidePage, this.Ref.indicator)
                                                }}
                                            >
                                                Далее
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="modalReg_page">
                                    <div class="modalReg_form">
                                        <h3 class="modalReg_page-title">Придумайте пароль</h3>
                                        <div class="modalWindow_field">
                                            <input type="password" ref="pass" required></input>
                                            <div class="modalWindow_field_labelLine">
                                                <img src={lock}></img>
                                                <span>Пароль:</span>
                                            </div>
                                        </div>
                                        <div class="modalWindow_field">
                                            <input type="password" ref="confirmPass" required></input>
                                            <div class="modalWindow_field_labelLine">
                                                <img src={lock}></img>
                                                <span>Повторить пароль:</span>
                                            </div>
                                        </div>
                                        <div class="f-center modalReg_btns">
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.Ref.slidePage.style.marginLeft = "-25%"
                                                    this.fn("clickPrev", this.Ref.indicator)
                                                    this.init()
                                                }}
                                            >
                                                Назад
                                            </button>
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.fn("clickNext", this.Ref.slidePage, this.Ref.indicator)
                                                }}
                                            >Далее</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="modalReg_page">
                                    <div class="modalReg_form">
                                        <h3 class="modalReg_page-title">Поздравляем, Вы успешно зарегистрированы!</h3>
                                        <div class="modalReg_success">
                                            <img src={done} alt="Пользователь успешно зарегистрирован" />
                                        </div>
                                        <div class="f-center modalReg_btns">
                                            <button
                                                class="btn btn_timing"
                                                onclick={() => {
                                                    this.Ref.slidePage.style.marginLeft = "-50%"
                                                    this.fn("clickPrev", this.Ref.indicator)
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

                        </div>
                    </main>
                    <footer class="modalWindow_footer">
                        {/* <p>если у вас уже есть аккаунт <a href="#">авторизуйтесь</a></p> */}
                        <p>Регистрируясь на платформе, вы принимаете <a href="/user-agreement" onclick={this.Fn.link} class="link" >пользовательское соглашение</a> и <a href="/user-data-policy" onclick={this.Fn.link} class="link">политику конфиденциальности</a></p>
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