import { Cemjsx } from "cemjs-all"
import star from '@svg/icon/star.svg'
import lineB from '@svg/lines/linesB.svg'

// import filter from '@svg/icon/filter.svg'

export const display = function () {
  // console.log('=31ea78=', this.Static.records)
  return (
    <div class="page">
      <section class="trades effect_lines">
        <div class="wrapper">
          <h1 class="general_title">Список бирж</h1>
          <table class="table table_trades">
            <thead class="table_head table_trades_head">
              <tr class="table_row table_trades_row">
                <th></th>
                <th class="table_row_index">#</th>
                <th class="table_row_name">Название</th>
                <th class="table_row_rating">Рейтинг</th>
                <th>График</th>
                <th class="table_row_category">
                  <ul class="category-carousel">
                    {
                      this.Static.category.map((item) => {
                        return (
                          <li class={["category-item",
                            this.Static.catActive == item ? "category-item_active" : null
                          ]}
                            onclick={() => {
                              this.Static.catActive = item
                              this.fn("addEvent", { cat: item })
                            }}
                          >
                            <span>{item}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </th>
              </tr>
            </thead>
            <tbody class="table_body table_head_body">
              {
                this.Static.records?.map((item, index) => {
                  return (
                    <tr class="table_row table_trades_row">
                      <td class="table_favourites">
                        <img src={star} alt="Избранные обменники" class="table_icon" />
                      </td>
                      <td class="table_row_index">{index + 1}</td>
                      <td>{item.name}</td>
                      <td class="table_rating">{item.score}</td>
                      <td class="table_graph">
                        <img
                          class="trades_chart"
                          src={`https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${item.marketId}.svg`}
                        >
                        </img>
                      </td>
                      <td class="table_btn">
                        <a class="btn btn_gradient" href={item.url} onclick={this.Fn.link}>
                          <span>Торговать</span>
                        </a>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <img src={lineB} class="listExchange_lineB"></img>
      </section>
    </div>
  )

}