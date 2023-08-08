import { Cemjsx } from "cemjs-all"


export const display = function (records) {
  // console.log('=727e5f=', this.Static.body)
  return (
    <div
      class="modalWindow"
      ref="modalWindow"
      onclick={(e) => {
        if (e.target === this.Ref.modalBody) {
          setTimeout(() => {
            this.clearData()
          }, 5)
          this.Ref.modalWindow.classList.remove('activeModal');
          this.Static.body.classList.remove('activeModal');
          this.Static.body.style.overflow = 'auto';
        }
      }}
    >
      <div class="modalWindow_body" ref="modalBody">
        <div class="modalWindow_content">
          <button
            class="modalWindow_button_close"
            onclick={(e) => {
              setTimeout(() => {
                this.clearData()
              }, 5)
              this.Ref.modalWindow.classList.remove('activeModal');
              this.Static.body.classList.remove('activeModal');
              this.Static.body.style.overflow = 'auto';
            }}
          >X</button>

          <main class="modalWindow_main">
            <div class="modalGallery_wrap">
              <div class="modalGallery_carousel"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}