import { Cemjsx } from "cemjs-all"
import settings from '@svg/icon/settings.svg'
import flag from '@svg/icon/flag.svg'

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

              <div >logo</div>
              <div class="personal_tools">
                <div>
                  <svg viewbox="-640 0 1400 150" width="15vw">
                    <path id="heart" d="M110.84,180.14,25.52,94.82A50.12,50.12,0,0,1,96.4,23.94l14.44,14.44,14.44-14.44a50.12,50.12,0,0,1,70.88,70.88Z" />
                  </svg>
                </div>
                <div class="personal_tools_img">
                  <img src={flag} alt="Страна" />
                </div>
                <div class="personal_tools_img">
                  <img src={settings} alt="Настройки" />
                </div>
              </div>
            </div>
            {/* <div class="avatar"></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}