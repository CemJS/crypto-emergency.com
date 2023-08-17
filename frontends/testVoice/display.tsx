import { Cemjsx } from "cemjs-all"

export const display = function () {
  return (
    <div class="page">

      <br></br>
      <button class='header__auth_sign'
        onclick={(e) => {

          this.Services.micrecorder.start.bind(this)()
        }}>Начать запись</button>
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