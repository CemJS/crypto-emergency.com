import { Cemjsx } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"
import user from '@svg/modalMessage/icon_user.svg'
import email from '@svg/modalMessage/icon_email.svg'
import done from '@svg/modalRegistration/done.svg'


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


const Step1 = function () {
    return (
        <div class="modalReg_page" ref="slidePage">
            <div class="modalReg_form">
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <h3 class="modalReg_page-title">Подтвердите адрес электронной почты</h3>
                    <div class={[
                        "modalWindow_field",
                        this.Static.form.email.value.length ? "modalWindow_field__valid" : null,
                        this.Static.form.email.error ? "modalWindow_field__error" : null,
                        this.Static.form.email.valid ? "modalWindow_field__success" : null,
                    ]}>
                        <input
                            type="email"
                            required
                            autocomplete="off"
                            oninput={(e: any) => {
                                this.Static.form.email.value = e.target.value;
                                this.Services.functions.formEmail(this.Static.form.email)
                                this.fn("checkFrom")
                            }}
                        />
                        <div class="modalWindow_field_labelLine">
                            <img src={email}></img>
                            <span>{this.Static.form.email.placeholder}</span>
                        </div>
                        <p class="modalWindow_field__status" style="color:#E84142">{this.Static.form.email.error}</p>
                    </div>
                </div>

                <div class={[
                    "modalReg-confirmCode",
                    this.Static.waitCode ? "modalReg-confirmCode__active" : null
                ]}>
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
                            this.Static.time > 0
                                ?
                                <div>
                                    <p class="modalReg_timer__text">Запросить новый код подтверждения можно через</p>
                                    <p class="modalReg_timer__text pl_10">{this.Static.time < 10 ? `0 : 0${this.Static.time}` : `0 : ${this.Static.time}`}</p>
                                </div>
                                :
                                <button
                                    class="btn btn_timing"
                                    onclick={() => {
                                        this.fn("sendCode")
                                        return
                                    }}>
                                    Запросить код снова
                                </button>
                        }
                    </div>
                </div>

                <div class="f-center">
                    <button
                        class={[
                            "btn",
                            "btn_timing",
                            this.Static.form.isValid ? null : "btn_passive",
                            this.Static.waitCode ? "btn_hidden" : null
                        ]}
                        onclick={async () => {
                            if (!this.Static.form.isValid) {
                                return
                            }

                            this.fn("sendCode")
                            return
                        }}>
                        Получить код подтверждение
                    </button>
                </div>
            </div>
        </div>
    )
}


const Step2 = function () {
    return (
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
                {/* <div class="g-colEqual-2">
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
                    </div> */}

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
    )
}

const Step3 = function () {
    return (
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
    )
}

const Step4 = function () {
    return (
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
    )
}
export default function () {
    return (
        <main class="modalWindow_main">
            <RenderSteps steps={this.Static.steps} current={this.Static.currentStep} />
            <div class="modalReg">
                <div class="modalReg_line">
                    <Step1 />
                    <Step2 />
                    <Step3 />
                    <Step4 />
                </div>
            </div>
        </main>

        //                                 this.Static.pass.error = this.Services.functions.validator.isStrongPassword(e.target.value, {
        //                                     minLength: 8,
        //                                     minLowercase: 0,
        //                                     minUppercase: 0,
        //                                     minNumbers: 0,
        //                                     minSymbols: 1,
        //                                 });



    )
}