import { Cemjsx } from "cemjs-all"
import bnb from '@images/listTrade/bnb.png'
import coinbase from '@images/listTrade/coinbase.png'
import kraken from '@images/listTrade/kraken.png'
import kucoin from '@images/listTrade/kucoin.png'
import okx from '@images/listTrade/okx.png'
import bybit from '@images/listTrade/bybit.png'
import bitfinex from '@images/listTrade/bitfinex.png'
import bitstamp from '@images/listTrade/bitstamp.png'
import gate from '@images/listTrade/gate.png'
import bitget from '@images/listTrade/bitget.png'
import bithumb from '@images/listTrade/bithumb.png'
import huobi from '@images/listTrade/huobi.png'
import mexc from '@images/listTrade/mexc.png'
import gemini from '@images/listTrade/gemini.png'
import lbank from '@images/listTrade/lbank.png'
import bkex from '@images/listTrade/bkex.png'
import cryptocom from '@images/listTrade/cryptocom.png'
// import star from '@svg/icon/star.svg'

import lineB from '@svg/lines/linesB.svg'

const listTrade = [
  {
    name: 'Binance',
    img: bnb,
    rating: 9.9,
    type: 'CEX',
  },
  {
    name: 'Coinbase Exchange',
    img: coinbase,
    rating: 8.4,
    type: 'DEX',
  },
  {
    name: 'Kraken',
    img: kraken,
    rating: 8.1,
    type: 'CEX',
  },
  {
    name: 'KuCoin',
    img: kucoin,
    rating: 7.6,
    type: 'DEX',
  },
  {
    name: 'OKX',
    img: okx,
    rating: 7.5,
    type: 'CEX',
  },
  {
    name: 'Bybit',
    img: bybit,
    rating: 7.4,
    type: 'DEX',
  },
  {
    name: 'Bitfinex',
    img: bitfinex,
    rating: 7.3,
    type: 'CEX',
  },
  {
    name: 'Bitstamp',
    img: bitstamp,
    rating: 7.2,
    type: 'DEX',
  },
  {
    name: 'Gate.io',
    img: gate,
    rating: 7,
    type: 'CEX',
  },
  {
    name: 'Bitget',
    img: bitget,
    rating: 6.9,
    type: 'DEX',
  },
  {
    name: 'Bithumb',
    img: bithumb,
    rating: 6.8,
    type: 'CEX',
  },
  {
    name: 'Huobi',
    img: huobi,
    rating: 6.7,
    type: 'DEX',
  },
  {
    name: 'MEXC',
    img: mexc,
    rating: 6.7,
    type: 'CEX',
  },
  {
    name: 'Gemini',
    img: gemini,
    rating: 6.5,
    type: 'DEX',
  },
  {
    name: 'Lbank',
    img: lbank,
    rating: 6.4,
    type: 'CEX',
  },
  {
    name: 'BKEX',
    img: bkex,
    rating: 6.3,
    type: 'DEX',
  },
  {
    name: 'Crypto.com',
    img: cryptocom,
    rating: 6.2,
    type: 'CEX',
  },
]


export const display = function () {
  return (
    <section class="listExchange effect_lines pt_80">
      <div class="wrapper">
        <h1 class="general_title">Список бирж</h1>
        <ul class="category-carousel">
          <li class="category-item"><span>{this.Static.cex}</span></li>
          <li class="category-item"><span>{this.Static.dex}</span></li>
        </ul>

        <table>
          <thead></thead>
          <tbody></tbody>
        </table>


      </div>
      <img src={lineB} class="listExchange_lineB"></img>
    </section>
  )

}