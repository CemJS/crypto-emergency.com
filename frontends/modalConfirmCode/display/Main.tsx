import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div class="modal modal_open">
            <div class="modal__black" />
            <div class="modal__container">
                <header class="modal__header">
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
                    <div class="confirm-code">
                        <p>Пожалуйста, подтвердите номер телефона</p>
                        <form class="confirm-code__form">
                            {
                                this.Static.pass.map((item, i) => {
                                    return (
                                        <input
                                            type="number"
                                            class="confirme-code__input"
                                            onKeyUp={(e) => this.fn("handleKeyUp", e, i)}
                                            oninput={(e) => this.fn("change", e, i)}
                                        >
                                        </input>
                                    )
                                })
                            }
                        </form>
                        {
                            this.Static.time > 0
                                ?
                                <div class="confirm-code__timer">
                                    Запросить новый код подтверждения можно через:
                                    <div class="confirm-code__timer_time">{this.Static.time < 10 ? `0:0${this.Static.time}` : `0:${this.Static.time}`}</div>
                                </div>
                                :
                                <a class="confirm-code__success"
                                    onclick={() => {
                                        this.fn("resetTimer")
                                    }}
                                >
                                    Получить новый код подтверждения
                                </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}