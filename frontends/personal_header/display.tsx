import { Cemjsx } from "cemjs-all"
import settings from '@svg/icon/settings.svg'

export const display = function () {
  return (
    <section class="page">
      <div class="wrapper">
        <div class="personal_header mt_15">
          <div class="personal_header_cover">
            <div class="personal_header_cover_wrap">
              <div class="personal_header_cover_img"></div>
            </div>
          </div>
          <div class="personal_header_info">
            <div class="personal_header_info_wrap">
              <div>logo</div>
              <div class="personal_setting">
                <span>
                  <img src={settings} alt="Настройки" />
                </span>
                <span>RU</span>
              </div>
            </div>
            {/* <div class="avatar"></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}