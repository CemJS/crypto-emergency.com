import { Cemjsx } from "cemjs-all"

export default function () {
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
            <div class="modal__container">
                <header class="modal__header">
                    <h2>Задать вопрос сообществу</h2>
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
                    <span class="modal-question__lang"
                        onclick={() => {
                            this.Fn.initOne({
                                name: "changeLanguage"
                            })
                        }}
                    >
                        {this.Static.langValue}
                    </span>
                    <div class="modal-question">
                        <label>Ваш вопрос</label>
                        <input class="modal-question__title" type="text" placeholder="Заголовок вопроса"
                            oninput={(e) => {
                                this.Static.data.title = e.target.value
                                if (e.target.value.length >= 5) {
                                    this.Static.isValid = true
                                } else {
                                    this.Static.isValid = false
                                }
                                this.init()
                            }}
                        />
                        <textarea class="modal-question__description"
                            oninput={(e) => {
                                this.Static.data.text = e.target.value
                            }}
                        ></textarea>
                    </div>
                </div>
                <div class="modal-question__footer">
                    <button class={["button", "button_gradient",
                        !this.Static.isValid ? "button_inactive" : null
                    ]}
                        onclick={() => {
                            let data = {
                                _action: "insert",
                                author: this.Static.data.author,
                                title: this.Static.data.title,
                                text: this.Static.data.text,
                                languages: this.Static.lang
                            }
                            fetch(`/api/events/Questions?uuid=${this.Variable.myInfo.uuid}`, {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify(data),
                            })
                            setTimeout(() => {
                                this.clearData()
                            }, 5);
                        }}
                    >
                        <span>Отправить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}