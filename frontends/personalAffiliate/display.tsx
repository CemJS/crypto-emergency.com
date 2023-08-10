import { Cemjsx } from "cemjs-all"
import copy from '@svg/icon/copy.svg'
import send from '@svg/icon/send.svg'
import soon from '@svg/icon/soon.svg'
import fotoUser from '@images/personalAffiliate/fotoUser.jpg'

export const display = function () {
  return (
    <main class="personalAffiliate page effect_linesRL">
      <div class="wrapper">
        <h1 class="general_title">Партнёрская программа</h1>
        <section class="personalAffiliate_board">
          <div class="personalAffiliate_board_inner">
            <p class="text">Разместите ссылку в социальных сетях, поделитесь с друзьями и заработайте токены CEM с каждого заpегистрированного пользователя. Также, для самых активных участников, у нас готовится расширенная программа монетизации для авторов контента.</p>
            <div class="personalAffiliate_program">
              <div class="personalAffiliate_program_link">
                <span>Реферальная ссылка</span>
                <span ref="copyLink">https://crypto-emergency.com/user/Annyshka</span>
              </div>
              <div class="personalAffiliate_program_btns">
                <div

                  class="personalAffiliate_program_btns_item"
                  onclick={() => {
                    this.Ref.copy.classList.add('copy_success');
                    window.navigator.clipboard.writeText(this.Ref.copyLink.textContent)
                    setInterval(()=>{
                      this.Ref.copy.classList.remove('copy_success');
                    },2000)
                  }}
                >
                  <img src={copy} />
                  <div class="hint" ref='copy'>
                    <span class="hint_info">Скопировано</span>
                  </div>
                </div>
                <div class="personalAffiliate_program_btns_item">
                  <img src={send} />
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <section class="personalAffiliate_info">
          <div class="personalAffiliate_info_item">
            <div>
              <span class="personalAffiliate_info_title">0</span>
              <p class="personalAffiliate_info_text">Количество привлечённых пользователей</p>
            </div>
          </div>
          <div class="personalAffiliate_info_item">
            <div>
              <span class="personalAffiliate_info_title">0 CEMD</span>
              <p class="personalAffiliate_info_text">Выплаты за привлечённых пользователей</p>
            </div>
          </div>
        </section>

        <section class="personalAffiliate_partner">
          <table class="table_partner table">
            <thead class="table_head">
              <tr class="table_row partner_table_row">
                <th>Мои партнёры</th>
              </tr>
            </thead>
            <tbody class="table_body">
              <tr class="table_row table_partner_row">
                <td>
                  <a class="avatar">
                    <div class="avatar_user">
                      <img src={fotoUser} alt="Фото пользователя" />
                    </div>
                    <div class="avatar_info">
                      <span class="avatar_level">100</span>
                      <span class="avatar_status"></span>
                    </div>
                  </a>
                </td>
                <td>Vladislava</td>
                <td class="table_center">2023.05.12</td>
                <td class="table_center">0 CEM</td>
                <td class="table_center">
                  <img src={soon} alt="Статус" />
                </td>
              </tr>
              <tr class="table_row table_partner_row">
                <td>
                  <a class="avatar">
                    <div class="avatar_user">
                      <img src={fotoUser} alt="Фото пользователя" />
                    </div>
                    <div class="avatar_info">
                      <span class="avatar_level">10</span>
                      <span class="avatar_status"></span>
                    </div>
                  </a>
                </td>
                <td>Annyshka</td>
                <td class="table_center">2022.10.20</td>
                <td class="table_center">1000 CEM</td>
                <td class="table_center">
                  <img src={soon} alt="Статус" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}