import { Cemjsx } from "cemjs-all"
import btc from '@svg/coins/btc.svg'
import trx from '@svg/coins/trx.svg'
import ada from '@svg/coins/ada.svg'
import bnb from '@svg/coins/bnb.svg'
import doge from '@svg/coins/doge.svg'
import eth from '@svg/coins/eth.svg'
import zrx from '@svg/coins/zrx.svg'
import usdt from '@svg/coins/usdt.svg'
import usd from '@svg/coins/usd.svg'
import mana from '@svg/coins/mana.svg'
import star from '@svg/icon/star.svg'
import prev from '@svg/icon/prev.svg'
import next from '@svg/icon/next.svg'
import filter from '@svg/icon/filter.svg'
import lineB from '@svg/lines/linesB.svg'


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
  {
    name: 'BlaBla',
    coins: [usd, trx, usdt, bnb, zrx, eth, mana]
  },
  {
    name: 'Bonanza-Obmen',
    coins: [usd, trx, usdt, btc, zrx, eth, mana]
  },
  {
    name: 'Coco-Pay',
    coins: [doge, trx, usdt]
  },
  {
    name: 'Alfabit',
    coins: [usdt, usd]
  },
  {
    name: 'CryptoStrike',
    coins: [mana, usd, usdt, zrx, eth, doge, bnb, ada, trx, btc]
  },
  {
    name: 'Transfer24',
    coins: [mana, usdt, zrx, doge, bnb, ada, btc]
  },
  {
    name: 'CoolCoin',
    coins: [usd, usdt, eth, doge, ada, trx,]
  },
  {
    name: 'CoinDrop',
    coins: [mana, usdt, zrx, eth, bnb, ada, trx,]
  },
  {
    name: 'Crypto-Market24',
    coins: [mana]
  },
  {
    name: 'Rapid-Obmen',
    coins: [bnb, ada, trx, btc]
  },
  {
    name: 'BelQi',
    coins: [usd, usdt, eth, doge, bnb, trx, btc]
  },
  {
    name: 'ChangeProject',
    coins: [ada, trx, btc]
  },
  {
    name: 'NordChange',
    coins: [mana, usd, bnb, ada, trx, btc]
  },
]

let currentPage = 1;
let rows = 10;
let start = rows * currentPage;
let end = start + rows;


const paginated = listExchange.slice(start, end)

export const display = function () {
  console.log('=194ce8=', listExchange.length)
  return (
    <section class="listExchange pt_80">
      <div class="wrapper">
        <h1 class="general_title">Список обменных пунктов</h1>

        <table class="listExchange_table">
          <thead class="listExchange_table_head">
            <tr class="listExchange_table_row">
              <th></th>
              <th class="listExchange_table_index">#</th>
              <th class="listExchange_table_name">Название</th>
              <th class="listExchange_table_coins">Коины</th>
              <th class="listExchange_table_filter">
                <img
                  src={filter}
                  onclick={() => {
                    this.Fn.initOne({
                      name: "modalFilterExchange", ifOpen: (front) => {
                        setTimeout(() => {
                          front.clearData()
                        }, 500);
                      }
                    })
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody class="listExchange_table_body">
            {
              paginated.map((item, index) => {
                return (
                  <tr class="listExchange_table_row">
                    <td class="listExchange_favourites">
                      <img src={star} alt="Избранное" class="listExchange_icon" />
                    </td>
                    <td class="listExchange_table_index">{index + 1}</td>
                    <td class="listExchange_table_name">{item.name}</td>
                    <td class="listExchange_table_coins">
                      <div class="coins_wrap">
                        {
                          item.coins.map((item, index) => {
                            return (
                              <img src={item} class="coins_wrap_item"></img>
                            )
                          })
                        }
                      </div>
                    </td>
                    <td class="listExchange_table_btn">
                      <a class="btn btn_gradient" target="_blank">
                        <span>Обменять</span>
                      </a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div class="listExchange_pagination mt_25">
          <div class="pag_list">
            <button class="pag_list_item" ref="pagPrev"><img src={prev} /></button>
            <button class="pag_list_item pag_list_item_active">1</button>
            <button class="pag_list_item">2</button>
            <button class="pag_list_item">3</button>
            <button class="pag_list_item">4</button>
            <button class="pag_list_item">...</button>
            <button class="pag_list_item">25</button>
            <button class="pag_list_item" ref="pagNext"><img src={next} /></button>
          </div>
        </div>
      </div>
      <img src={lineB} class="listExchange_lineB"></img>
    </section>
  )

}