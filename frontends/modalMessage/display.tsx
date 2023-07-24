import { Cemjsx } from "cemjs-all"

export const display = function () {
  return (
    <div 
      class="modalWindow"
      onclick={(e)=>{
        if(e.target === this.Ref.modalBody){
          setTimeout(()=>{
            this.clearData()
          }, 5)
        }
      }}  
    >
      <div class="modalWindow_body" ref="modalBody">
        <div class="modalWindow_content">
          <button class="modalWindow_button_close">X</button>
          <header class="modalWindow_header">
            <h3 class="modalWindow_header_title">Связь с нами</h3>
            <span class="modalWindow_header_subtitle">Напиши нам, и мы с Вами свяжемся!</span>
          </header>
          <main class="modalWindow_main">
            <div>
              <label>Ваше имя</label>
              <input placeholder="Ваше имя"></input>
            </div>
          </main>
          <footer class="modalWindow_footer">
            <button>Отправить</button>
          </footer>
        </div>
      </div>
    </div>
  )
}