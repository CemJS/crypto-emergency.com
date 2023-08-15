import { Cemjsx } from "cemjs-all"

export const display = function () {
  return (
    <div class="page personalWallet">
      <div class="wrapper">
      <table class='table_bonus table'>
        <thead class="table_head_bonus_head table_head">
          <tr class='table_bonus_row table_row'>
            <th>Type</th>
            <th>Date</th>
            <th>Transaction</th>
            <th>Sum</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody >
          <tr class='table_bonus_row table_row'>
            <td>AWARDS</td>
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