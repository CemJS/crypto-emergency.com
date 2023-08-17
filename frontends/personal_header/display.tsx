import { Cemjsx } from "cemjs-all"
import settings from '@svg/icon/settings.svg'
import flag from '@svg/icon/flag.svg'
import fotoUser from '@images/personalAffiliate/fotoUser.jpg'

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

              <div class="prev_info">
                <div class="prev">
                  <svg class="prev_svg">
                    <clipPath id="fotoUser">
                      <polygon 
                        class="prev_polygon"
                        fill="none"
                        rx="20"
                        ry="20"
                        stroke="#9844b7"
                        stroke-width="10" 
                        points="70,5 140,50 140,105 70,150 5,105 5,50" 
                      />
                    </clipPath>
                    <polygon 
                      class="prev_polygon"
                      fill="none"
                      rx="20"
                      ry="20"
                      stroke="#9844b7"
                      stroke-width="15" 
                      points="70,5 140,50 140,105 70,150 5,105 5,50" 
                    />
                  </svg>
                  <img class="prev_image" src={fotoUser} alt="" />
                </div>
                <div class="prev_desc">
                  <h5>Annyshka</h5>
                  <span>Мой статус</span>
                </div>
              </div>
              
              
              <div class="personal_tools">
                <div>
                  
                </div>
                <div class="personal_tools_img">
                  <img src={flag} alt="Страна" />
                </div>
                <div class="personal_tools_img">
                  <img src={settings} alt="Настройки" />
                </div>
              </div>

              <div class="rating_line">
                <div class="rating_line_progress">
                  <div class="rating_line_value">
                    <span>35.5</span>
                    <svg class="heart" width="28" height="26" viewBox="0 0 28 26" fill="none">
                      <g>
                        <path d="M18.4696 2.33984C21.5238 2.33984 24 4.8161 24 7.86968C24 12.9169 13.9997 19.6206 13.9997 19.6206C13.9997 19.6206 4 13.1586 4 7.86964C4 4.06781 6.47625 2.33984 9.52983 2.33984C11.3692 2.33984 12.994 3.24191 13.9997 4.62303C15.0056 3.24191 16.6307 2.33984 18.4696 2.33984Z" fill="#EF1515"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_507_41" x="0" y="0.339844" width="28" height="25.2808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="2"/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_41"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_507_41" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
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