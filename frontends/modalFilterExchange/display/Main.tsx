import { Cemjsx } from "cemjs-all"
import search from '@svg/icon/search.svg'
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

const coins = [
    {
        name: 'Bitcoin',
        img: btc,
    },
    {
        name: 'Tronix',
        img: trx,
    },
    {
        name: 'Cardano',
        img: ada,
    },
    {
        name: 'Binance',
        img: bnb,
    },
    {
        name: 'Dogecoin',
        img: doge,
    },
    {
        name: 'Ethereum',
        img: eth,
    },
    {
        name: 'ZRX',
        img: zrx,
    },
    {
        name: 'USDT',
        img: usdt,
    },
    {
        name: 'USD',
        img: usd,
    },
    {
        name: 'MANA',
        img: mana,
    },
]

export default function () {
    console.log('=response=',this.Static.coins)
    return (
        <main class="modalWindow_main">
            <div class="modalWindow_field">
                <input type="search" />
                <div class="modalWindow_field_labelLine">
                    <img src={search} />
                    <span>Поиск монет</span>
                </div>
            </div>
            <div class="modalWindow_coinWrap">
                {
                    coins.map((item, index) => {
                        return (
                            <div
                                class={["modalWindow_coinWrap_item",
                                    this.Static.coinss.includes(item.name) ? "coin_active" : null
                                ]}
                                onclick={() => {
                                    if (this.Static.coinss.includes(item.name)) {
                                        this.Static.coinss.splice(this.Static.coinss.indexOf(item.name), 1);
                                        console.log(item.name,'откл')
                                    } else {
                                        this.Static.coinss.push(item.name)
                                        console.log(item.name,'вкл')
                                    }
                                    this.cross({ choosenCoin: this.Static.coinss})

                                    // this.Ref.coin.classList.toggle('coin_active');
                                    this.init();
                                }}
                            >
                                <div class="modalWindow_coinWrap_item_img">
                                    <img src={item.img} />
                                </div>
                                <span class="modalWindow_coinWrap_item_text">{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}