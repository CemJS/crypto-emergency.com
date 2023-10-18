import { Cemjsx } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"
import user from '@svg/modalMessage/icon_user.svg'
import email from '@svg/modalMessage/icon_email.svg'
import done from '@svg/modalRegistration/done.svg'
import edit from '@svg/icon/edit.svg'


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

            <div class="f-col">
                <h3 class="modalReg_page-title">Подтвердите адрес электронной почты</h3>
                <div class={[
                    "modalWindow_field",
                    this.Static.form.email.value.length ? "modalWindow_field__valid" : null,
                    this.Static.form.email.error ? "modalWindow_field__error" : null,
                    this.Static.form.email.valid ? "modalWindow_field__success" : null,
                    this.Static.form.email.disable ? "modalWindow_field__disabled" : null
                ]}>
                    <input
                        type="email"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            this.Static.form.email.value = e.target.value;
                            this.Services.functions.formEmail(this.Static.form.email)
                            this.fn("checkFrom")
                        }} />
                    <div class="modalWindow_field_labelLine">
                        <img src={email}></img>
                        <span>{this.Static.form.email.placeholder}</span>
                    </div>
                    <p class="modalWindow_field__status" style="color:#E84142">{this.Static.form.email.error}</p>

                    {
                        this.Static.form.email.disable ?
                            <img
                                class="modalWindow_field__edit"
                                src={edit} alt="Редактирование email"
                                onclick={() => {
                                    this.fn("changeEmail")
                                }}
                            /> : null
                    }
                </div>
            </div>

            {
                this.Static.waitCode ?
                    <div class={[
                        "modalReg-confirmCode",
                        this.Static.waitCode ? "modalReg-confirmCode__active" : null
                    ]}>
                        <div class="modalReg-code" >
                            {
                                this.Static.code.map((item: number, index: number) => {
                                    return (
                                        <input
                                            type="number"
                                            class={[
                                                "modalReg-code_input",
                                                this.Static.form.code.error ? "modalReg-code_input__error" : null
                                            ]}
                                            oninput={(e) => {
                                                if (e.data == null && e.target.value.length > 1) {
                                                    let arr = e.target.value.trim().split("")
                                                    if (arr.length > 6) {
                                                        arr = arr.slice(0, 6)
                                                    }
                                                    let arrElements = e.target.parentElement.children;
                                                    arr.forEach((item, index) => {
                                                        this.Static.code[index] = item
                                                        arrElements[index].value = item
                                                        arrElements[index].focus();
                                                    });
                                                } else {
                                                    e.target.value = e.data
                                                    this.Static.code[index] = e.target.value
                                                    let arrElements = e.target.parentElement.children;
                                                    if (index < this.Static.code.length - 1 && this.Static.code[index] != "") {
                                                        arrElements[index + 1].focus();
                                                    }

                                                    if (index != 0 && this.Static.code[index] == "") {
                                                        arrElements[index - 1].focus();
                                                    }


                                                }
                                                this.Static.form.code.value = Number(this.Static.code.join(""))
                                                this.Services.functions.formCode(this.Static.form.code)
                                                this.fn("checkFrom")
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>

                        {
                            this.Static.form.code.error ? <span class="modalReg-code__error">{this.Static.form.code.error}</span> : null
                        }

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
                    </div> :
                    <div class="f-center pt_35">
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
            }
        </div>
    )
}

const Step2 = function () {
    return (
        <div class="modalReg_page">
            <div class="modalReg_form">
                <div class="f-col">
                    <h3 class="modalReg_page-title">Заполните информация о себе</h3>
                    <div class={[
                        "modalWindow_field",
                        this.Static.form.nickName.value.length ? "modalWindow_field__valid" : null,
                        this.Static.form.nickName.error ? "modalWindow_field__error" : null,
                        this.Static.form.nickName.valid ? "modalWindow_field__success" : null,
                        this.Static.form.nickName.disable ? "modalWindow_field__disabled" : null
                    ]}>
                        <input
                            type="text"
                            required
                            autocomplete="off"
                            oninput={async (e: any) => {
                                this.Static.form.nickName.value = e.target.value;
                                this.Services.functions.formNickName(this.Static.form.nickName)
                                if (this.Static.form.nickName.valid) {
                                    if (this.Static.setTimeout) {
                                        clearTimeout(this.Static.setTimeout)
                                    }
                                    this.Static.setTimeout = setTimeout(async () => {
                                        let data = {
                                            action: "avalibleNick",
                                            nickname: this.Static.form.nickName.value
                                        }

                                        let answer = await this.Services.functions.sendApi(`/api/events/Users?uuid=${this.Variable.myInfo.uuid}`, data)

                                        if (answer.error) {
                                            this.Static.form.nickName.error = "Логин занят!"
                                            this.Static.form.nickName.valid = false
                                        }
                                        this.fn("checkFrom")
                                    }, 300);
                                } else {
                                    this.init()
                                }
                            }} />
                        <div class="modalWindow_field_labelLine">
                            <img src={user}></img>
                            <span>{this.Static.form.nickName.placeholder}</span>
                        </div>
                        <p class="modalWindow_field__status" style="color:#E84142">{this.Static.form.nickName.error}</p>
                        <div class="modalWindow_field__tooltip">
                            <div
                                class="tooltip"
                                onmouseover={() => {
                                    this.Ref.tooltipContent.classList.add("tooltip-content__active")
                                }}
                                onmouseleave={() => {
                                    this.Ref.tooltipContent.classList.remove("tooltip-content__active")
                                }}
                            >
                                <div class="tooltip-content" ref="tooltipContent">
                                    <p class="tooltip-content_text">
                                        Логин не должен начинаться с цифр и спецсимволов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="g-colEqual-2 modalReg-choose">
                    <div
                        class="modalReg-choose_item"
                        onclick={() => {
                            this.Fn.initOne({ name: "modalSelectLanguage" })
                        }}
                    >
                        <span>
                            {this.Static.form.mainLang.nameOrig ? this.Static.form.mainLang.nameOrig : this.Static.form.mainLang.placeholder}
                        </span>
                        <span class="modalReg-choose_arrow"></span>
                        {/* <span  style="color:#E84142">{this.Static.form.mainLang.error}</span> */}
                    </div>

                    <div
                        class="modalReg-choose_item"
                        onclick={() => {
                            this.Fn.initOne({ name: "modalSelectCountry" })
                        }}
                    >
                        <span>{this.Static.form.country.nameOrig ? this.Static.form.country.nameOrig : this.Static.form.country.placeholder}</span>
                        <span class="modalReg-choose_arrow"></span>
                        {/* <span  style="color:#E84142">{this.Static.form.country.error}</span> */}
                    </div>
                </div>

                <div class="f-center modalReg_btns">
                    <button
                        class={[
                            "btn",
                            "btn_timing",
                            this.Static.form.isValid ? null : "btn_passive"
                        ]}
                        onclick={async () => {
                            if (!this.Static.form.isValid) {
                                return
                            }
                            this.fn("clickNext")
                            return
                        }}>
                        Далее
                    </button>
                </div>
            </div>
        </div>
    )
}

const Step3 = function () {
    console.log('=5e0ef3=', this.Static)
    return (
        <div class="modalReg_page">
            <div class="modalReg_form">
                <h3 class="modalReg_page-title">Придумайте пароль</h3>
                <div
                    class={[
                        "modalWindow_field",
                        this.Static.form.pass.value.length ? "modalWindow_field__valid" : null
                    ]}>
                    <input
                        type="password"
                        required
                        oninput={(e: any) => {
                            this.Static.form.pass.value = e.target.value;
                            this.Services.functions.formPassword(this.Static.form.pass)
                            this.fn("checkFrom")
                        }}
                    />
                    <div class="modalWindow_field_labelLine">
                        <img src={lock}></img>
                        <span>{this.Static.form.pass.placeholder}</span>
                    </div>

                    <div class="modalWindow_field__tooltip">
                        <div
                            class="tooltip"
                            onmouseover={() => {
                                this.Ref.tooltipContentPass.classList.add("tooltip-content__active")
                            }}
                            onmouseleave={() => {
                                this.Ref.tooltipContentPass.classList.remove("tooltip-content__active")
                            }}
                        >
                            <div class="tooltip-content" ref="tooltipContentPass">
                                <p class="tooltip-content_text">
                                    Пароль должен содержать спецсимволы !?&$
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class={[
                        "modalWindow_field",
                        this.Static.form.rePass.value.length ? "modalWindow_field__valid" : null
                    ]}>
                    <input
                        type={this.Static.passType}
                        required
                        oninput={(e: any) => {
                            this.Static.form.rePass.value = e.target.value;
                            this.Services.functions.formPassword(this.Static.form.rePass)
                            this.fn("checkFrom")
                        }}
                    />
                    <div class="modalWindow_field_labelLine">
                        <img src={lock}></img>
                        <span>{this.Static.form.rePass.placeholder}</span>
                    </div>
                    <div class="modalWindow_field__tooltip">
                        <img
                            alt="Показать пароль"
                            class="modalWindow_field__eye"
                            src={this.Static.passType == "password" ? eye : eyeSlash}
                            onclick={() => {
                                if (this.Static.passType == "password") {
                                    this.Static.passType = "text"
                                } else {
                                    this.Static.passType = "password"
                                }
                                this.init()
                            }}
                        />
                    </div>
                </div>
                <div class="f-center modalReg_btns">
                    <button
                        class={[
                            "btn",
                            "btn_timing",
                            this.Static.form.isValid ? null : "btn_passive"
                        ]}
                        onclick={async () => {
                            if (!this.Static.form.isValid) {
                                return
                            }
                            this.fn("clickNext")
                            return
                        }}>
                        Далее
                    </button>
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
    )
}