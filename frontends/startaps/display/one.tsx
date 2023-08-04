import { Cemjsx } from "cemjs-all"
import back from '@svg/icon/prev.svg'

export default function () {
  console.log('=55ea43=', this.Static.record)
  return (
    <div class="startaps_show effect_lines">
      <div class="wrapper">
        <div class="back">
          <div class="back_arrow">
            <img
              src={back}
              onclick={() => {
                delete this.Static.record
                this.init()
              }}
            >
            </img>
          </div>
          <div class="tool">
            <span class="tool_item"></span>
            <span class="tool_item"></span>
            <span class="tool_item"></span>
          </div>
        </div>

        <span>startaps inner</span>
      </div>
    </div>

  )
}