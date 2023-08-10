import { Cemjsx } from "cemjs-all"
import copy from '@svg/icon/copy.svg'
import send from '@svg/icon/send.svg'

export const display = function () {
  return (
    <main class="personalAffiliate page effect_linesRL">
      <div class="wrapper">
        <h1 class="general_title">Партнёрская программа</h1>
        <section class="personalAffiliate_board">
          <p>Разместите ссылку в социальных сетях, поделитесь с друзьями и заработайте токены CEM с каждого заpегистрированного пользователя. Также, для самых активных участников, у нас готовится расширенная программа монетизации для авторов контента.</p>
          <div class="personalAffiliate_program">
            <div class="personalAffiliate_program_link">
              <span>Реферальная ссылка</span>
              <span>https://crypto-emergency.com/user/Annyshka</span>
            </div>
            <div class="personalAffiliate_program_btns">
              <div

                class="personalAffiliate_program_btns_item"
                onclick={() => {
                  this.Ref.copy.classList.add('copy_success');
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
        </section>

        <section class="personalAffiliate_info">
          <div class="personalAffiliate_info_item">

          </div>
          <div class="personalAffiliate_info_item">

          </div>
        </section>

        <section class="personalAffiliate_partner">
          <table class="partner_table">
            <thead>
              <tr>
                <th>Мои партнёры</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}