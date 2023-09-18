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
    return (
        <div
            class="modalWindow"
            onclick={(e) => {
                if (e.target === this.Ref.modalBody) {
                    setTimeout(() => {
                        this.Static.body.style.overflow = '';
                        this.clearData()
                    }, 5)
                }
            }}
        >
            <div class="modalWindow_body" ref="modalBody">
                <div class="modalWindow_content">
                    <button
                        class="modalWindow_button_close"
                        onclick={() => {
                            setTimeout(() => {
                                this.Static.body.style.overflow = '';
                                this.clearData()
                            }, 5)
                        }}
                    >
                        X
                    </button>
                    <header class="modalWindow_header">
                        <h3 class="modalWindow_header_title">Выбрать монеты</h3>
                    </header>
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
                                                this.Static.filterCoins.includes(item.name) ? "coin_active" : null
                                            ]}
                                            onclick={() => {
                                                if (this.Static.filterCoins.includes(item.name)) {
                                                    this.Static.filterCoins.splice(this.Static.filterCoins.indexOf(item.name), 1);
                                                } else {
                                                    this.Static.filterCoins.push(item.name)
                                                }
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
                    <footer class="modalWindow_footer">
                        <div class="f-center">
                            <button class="btn btn_gradient">
                                <span>Применить</span>
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}