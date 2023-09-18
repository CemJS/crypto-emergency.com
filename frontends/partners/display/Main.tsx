import { Cemjsx } from "cemjs-all"
import b4 from '@images/partners/b4.png'
import bein from '@images/partners/bein.png'
import crypto from '@images/partners/crypto.png'
import cryptomania from '@images/partners/cryptomania.png'
import cryptosummit from '@images/partners/cryptosummit.png'
import digitit from '@images/partners/digitit.png'
import life from '@images/partners/life.png'
import plus from '@images/partners/plus.png'
import sber from '@images/partners/sber.png'
import sk from '@images/partners/sk.png'
import tech from '@images/partners/tech.png'
import mining from '@images/partners/mining.png'

const partners = [
    {
        logo: b4
    },
    {
        logo: bein
    },
    {
        logo: crypto
    },
    {
        logo: cryptomania
    },
    {
        logo: cryptosummit
    },
    {
        logo: mining
    },
    {
        logo: digitit
    },
    {
        logo: life
    },
    {
        logo: plus
    },
    {
        logo: sber
    },
    {
        logo: sk
    },
    {
        logo: tech
    }
]

export default function () {
    return (
        <main class="partners-page page">
            <div class="wrapper">
                <div class="partners-page_main">
                    <div class="title">
                        <h1>Информационные партнеры</h1>
                    </div>
                    <div class="partner-list">
                        {
                            partners.map((item, index) => {
                                return (
                                    <div class="partner-list_item">
                                        <img src={item.logo} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}