import { Cemjsx } from "cemjs-all"
//partners
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
        <div class="partners">
            <h2 class="about__subtitle">Информационные партнёры</h2>
            <div class="partners_list">
                {
                    partners.map((item, index) => {
                        return (
                            <div class="partners_list_item">
                                <img src={item.logo} alt="Партнёр" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}