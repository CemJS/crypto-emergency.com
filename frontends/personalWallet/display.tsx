import { Cemjsx } from "cemjs-all"
import transaction_newmember_bonus from "@images/personalWallet/transaction_newmember_bonus.svg"
import crem_logo from "@images/personalWallet/crem_logo.svg"

export const display = function () {
  return (
    <div class="page personalWallet">
      <div class="wrapper">

      <div class = 'cards-container'>
        <div class = 'card'>
          <div class='balance' >
            <p>Мой счет</p>
            <div class = 'balance_total'>
              <p class = 'balance_amount'>0.50</p>
              <p class ='coin'>CEMD</p>
            </div>
          </div>
          <div class='card_footer'>
            <div class='balance_usd'>
              <p class ='currency'>Долларов</p>
              <p class ='balance'>0.50</p>
            </div>
            <div class='actual_rate'>
              <p class='title'>Актуальный курс</p>
              <p class='amount'>1.00</p>
            </div>
          </div>
          <img src={crem_logo} alt="" class ='crem_logo'/>
        </div>
      </div>
      <table class='table_bonus table'>
        <thead class="table_bonus_head table_head">
          <tr class='table_bonus_row'>
            <th>Type</th>
            <th>Date</th>
            <th>Transaction</th>
            <th>Sum</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class = 'table_bonus_body'>
          <tr class='table_bonus_row'>
            <td>
              <img src={transaction_newmember_bonus} alt="" class ='bonus_type'/>
              AWARDS
              </td>
            <td>2023-07-20 11:05</td>
            <td>BONUS</td>
            <td>0.5</td>
            <td>OK</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}