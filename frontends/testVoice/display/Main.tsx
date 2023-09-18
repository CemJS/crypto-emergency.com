import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div>
            <br></br>
            <button class='header__auth_sign'
                onclick={(e) => {

                    this.Services.micrecorder.start.bind(this)()
                }}>Начать запись</button>
            <button class='header__auth_sign'
                onclick={(e) => {

                    this.Services.micrecorder.startImg.bind(this)()
                }}>Начать запись для картинки</button>
            <br></br>

            <button class='header__auth_sign'
                onclick={() => {
                    this.Services.micrecorder.stop()
                }}>Стоп запись</button>
            <br></br>
            <div>{this.Static.textAudio}</div>
            <br></br>
            <br></br>
            <div>{this.Static.textAnswer}</div>
        </div>
    )
}