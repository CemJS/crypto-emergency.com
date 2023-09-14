import { Cemjsx } from "cemjs-all"


export const display = function () {
  console.log('=727e5f=', this.Static.data)
  return (
    <div
      class="modalWindow modalWindow_tool"
      ref="modalWindow"
      onclick={(e) => {
        if (e.target === this.Ref.modalBody) {
          setTimeout(() => {
            this.fn("removeTool")
            this.clearData()
          }, 5)
        }
      }}
    >
      <div class="modalWindow_body modalWindow_body_tool" ref="modalBody">
        <div class="modalWindow_content modalWindow_content_tool">
          <main class="modalWindow_main">
            {
              this.Static.data.page == "page"
                ?
                <ul class="tool_list">
                  <li class="tool_list_item">
                    Поделиться
                  </li>
                  <li class="tool_list_item">
                    Скопировать URL
                  </li>
                </ul>
                :
                this.Static.data.page == "comments"
                  ?
                  <ul class="tool_list">
                    <li class="tool_list_item">
                      Поделиться
                    </li>
                    <li class="tool_list_item red">
                      Пожаловаться на ответ
                    </li>
                    <li class="tool_list_item red">
                      Пожаловаться на пользователя
                    </li>
                    <li class="tool_list_item red">
                      В черный список
                    </li>
                    <li class="tool_list_item red"
                      onclick={() => {
                        let data = {
                          _action: "remove",
                          id: this.Static.data.id,
                          table: this.Static.data.table,
                          tableID: this.Static.data.tableID,
                          rating: this.Static.data.rating,
                        }
                        fetch(`/api/events/${this.Static.data.collection}?uuid=${this.Variable.myInfo.uuid}`, {
                          method: "POST",
                          headers: { "content-type": "application/json" },
                          body: JSON.stringify(data),
                        })
                        setTimeout(() => {
                          this.fn("removeTool")
                          this.clearData()
                        }, 5)
                      }}
                    >
                      Удалить
                    </li>
                  </ul>
                  :
                  this.Static.data.page == "post"
                    ?
                    <ul class="tool_list">
                      <li class="tool_list_item">
                        Поделиться
                      </li>
                      <li class="tool_list_item">
                        Подписаться
                      </li>
                      <li class="tool_list_item red">
                        Пожаловаться на пост
                      </li>
                      <li class="tool_list_item red">
                        Пожаловаться на пользователя
                      </li>
                      <li class="tool_list_item red">
                        В черный список
                      </li>
                      <li class="tool_list_item red"
                        onclick={() => {
                          
                        }}
                      >
                        Удалить
                      </li>
                    </ul>
                    :
                    null
            }


            <div class="tool_list_item tool_list_item_cancel"
              onclick={() => {
                setTimeout(() => {
                  this.fn("removeTool")
                  this.clearData()
                }, 5)
              }}
            >
              Отмена
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}