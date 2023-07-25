import { Cemjsx } from "cemjs-all"
import btc from '@svg/coins/btc.svg'
import trx from '@svg/coins/trx.svg'
import ada from '@svg/coins/ada.svg'
import bnb from '@svg/coins/bnb.svg'
import doge from '@svg/coins/doge.svg'
import eth from '@svg/coins/eth.svg'
import star from '@svg/icon/star.svg'
import prev from '@svg/icon/prev.svg'
import next from '@svg/icon/next.svg'

const listExchange = [
  {
    name: 'Keine Exchange',
    coins: [btc, trx, ada, bnb, doge, eth]
  },
  {
    name: 'Exhub',
    coins: [btc, trx, ada, bnb]
  },
  {
    name: '7money',
    coins: [btc, doge, ada, eth]
  },
  {
    name: 'MultiChange',
    coins: [doge]
  },
  {
    name: 'NiceChange',
    coins: [ada, trx, doge]
  },
  {
    name: 'BTCSale',
    coins: [bnb, trx, eth]
  },
  {
    name: '365cash',
    coins: [eth, doge, trx]
  },
  {
    name: 'Baksman',
    coins: [trx]
  },
  {
    name: 'Mine.Exchange',
    coins: [bnb]
  },
  {
    name: 'WM.express',
    coins: [bnb]
  },
  {
    name: 'EXline',
    coins: [trx]
  },
]

export const display = function () {
  return (
    <section class="listExchange pt_80">
      <div class="wrapper">
        <h1 class="general-title">Список обменных пунктов</h1>

        <table class="listExchange_wrap">
          <thead></thead>
          <tbody>
            {
              listExchange.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <img src={star} alt="Избранное" />
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
        <div class="listExchange_pagination">
          <div class="pag_list">
            <button class="pag_list_item"><img src={prev} /></button>
            <button class="pag_list_item">1</button>
            <button class="pag_list_item">2</button>
            <button class="pag_list_item">3</button>
            <button class="pag_list_item">4</button>
            <button class="pag_list_item">...</button>
            <button class="pag_list_item">25</button>
            <button class="pag_list_item"><img src={next} /></button>
          </div>
        </div>
      </div>
    </section>
  )

}