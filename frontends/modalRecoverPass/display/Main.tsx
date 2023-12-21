import { Cemjsx } from "cemjs-all"
import email from '@svg/modalMessage/icon_email.svg'

export default function () {
    return (
        <main class="modalWindow_main">
            <div class={[
                "modalWindow_field",
                this.Static.email.value.length ? "modalWindow_field__valid" : null
            ]}>
                <input
                    type="email"
                    required
                    autocomplete="off"
                    oninput={(e: any) => {
                        this.Static.email.value = e.target.value;
                    }} />
                <div class="modalWindow_field_labelLine">
                    <img src={email}></img>
                    <span>{this.Static.form.email.placeholder}</span>
                </div>
                <p class="modalWindow_field__status" style="color:#E84142">{this.Static.form.email.error}</p>
            </div>
        </main>
    )
}