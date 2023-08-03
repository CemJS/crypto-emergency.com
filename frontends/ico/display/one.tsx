import { Cemjsx } from "cemjs-all"
import back from '@svg/icon/prev.svg'

export default function () {
  console.log('=55ea43=', this.Static.record)
  return (
    <div class="ico_show">
      <div class="wrapper">
        <div class="back">
          <button class="btn btn_back">
            <img
              src={back}
              onclick={() => {
                delete this.Static.record
                this.init()
              }}
            >
            </img>
          </button>
        </div>
      </div>
    </div>

  )
}