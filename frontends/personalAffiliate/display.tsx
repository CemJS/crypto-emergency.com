import { Cemjsx } from "cemjs-all"
import copy from '@svg/icon/copy.svg'
import send from '@svg/icon/send.svg'

export const display = function () {
  return (
    <main class="personalAffiliate page">
      <div class="wrapper">
        <section class="personalAffiliate_board">
          <h1>Партнёрская программа</h1>
          <p>Разместите ссылку в социальных сетях, поделитесь с друзьями и заработайте токены CEM с каждого заpегистрированного пользователя. Также, для самых активных участников, у нас готовится расширенная программа монетизации для авторов контента.</p>
          <div class="personalAffiliate_program">
            <span>Реферальная ссылка</span>
            <span class="personalAffiliate_program_link">https://crypto-emergency.com/user/Annyshka</span>
            <div class="personalAffiliate_program_btns">
              <div class="personalAffiliate_program_btns_item">
                <img src={copy} />
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
          <div class="personalAffiliate_info_item"></div>
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