import { Cemjsx } from "cemjs-all"


export const display = function () {
  // console.log('=727e5f=', this.Static.body)
  return (
    <div
      class="modalWindow modalWindow_tool"
      ref="modalWindow"
      onclick={(e) => {
        if (e.target === this.Ref.modalBody) {
          setTimeout(() => {
            this.clearData()
          }, 5)
        }
      }}
    >
      <div class="modalWindow_body modalWindow_body_tool" ref="modalBody">
        <div class="modalWindow_content modalWindow_content_tool">
          <main class="modalWindow_main">
            <ul class="tool_list">
              <li class="tool_list_item">
                Поделиться
              </li>
              <li class="tool_list_item">
                Скопировать URL
              </li>
            </ul>

            <div class="tool_list_item tool_list_item_cancel">
              Отмена
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}