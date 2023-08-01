import { Cemjsx } from "cemjs-all"

export const display = function () {
  return (
    <div class="exchangerates exchangerates__container">
      <h1 class="general_title">{this.Static.title}</h1>
      <table class="exchangerates__table" cellspacing="0" cellpadding="10" align="center">
        <thead class="exchangerates__table_head">
          <tr style="border-radius: 4px;" class="exchangerates__table_row">
            <th>#</th>
            <th>Название</th>
            <th>Цена (USDT)</th>
            <th>Изм.(24ч)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.Static.records?.map((item, index) => {
              return (
                <tr>
                  <td>
                    <div class="exchangerates__cellwrap">
                      <b>{index + 1}</b>
                    </div>
                  </td>
                  <td>
                    <div class="exchangerates__cellwrap">
                      <div class="exchangerates__currency">
                        <img src={`/assets/svg/exchangeRates/${item.nameCoin}.svg`} />
                        <span>{item.nameCoin}</span>

                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="exchangerates__cellwrap">
                      <span class="exchangerates__price">
                        ${item.currentCourse.toFixed(
                          item.nameCoin === "cem" ? 4 : 2
                        )}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="exchangerates__cellwrap">
                      <span
                        class={[
                          "exchangerates__percent",
                          item.change >= 0
                            ? "exchangerates__percent--rise"
                            : "exchangerates__percent--recession"
                        ]}
                      >
                        {item.change >= 0 ? '+' : null}
                        {item.change.toFixed(2)}%
                      </span>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )

}