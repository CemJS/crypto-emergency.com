import { Cemjsx } from "cemjs-all"

// fo main slider
import ecosystem from '@images/about/main/ecosystem.jpg'
import blockchain from '@images/about/main/blockchain.jpg'
import trading from '@images/about/main/trading.jpg'
import coin from '@images/about/main/cem.jpg'

import Goals from "./Goals"
import Accordeon from "./Accordeon"
import Team from "./Team"
import Roadmap from "./Roadmap"
import Partners from './Partners'
import Developments from "./Developments"
import Events from "./Events"
import SocialNetworks from "./SocialNetworks"
import { Display as Slider } from '@elements/Gallery'

import cryptoBreakfast1 from '@images/about/cryptoBreakfast/cryptoBreakfast1.jpg'
import cryptoBreakfast2 from '@images/about/cryptoBreakfast/cryptoBreakfast2.jpg'
import cryptoBreakfast3 from '@images/about/cryptoBreakfast/cryptoBreakfast3.jpg'
import cryptoBreakfast4 from '@images/about/cryptoBreakfast/cryptoBreakfast4.jpg'
import cryptoBreakfast5 from '@images/about/cryptoBreakfast/cryptoBreakfast5.jpg'
import cryptoBreakfast6 from '@images/about/cryptoBreakfast/cryptoBreakfast6.jpg'
import cryptoBreakfast7 from '@images/about/cryptoBreakfast/cryptoBreakfast7.jpg'

const galleryCryptoBreakfast = [
    {
        img: cryptoBreakfast1
    },
    {
        img: cryptoBreakfast2
    },
    {
        img: cryptoBreakfast3
    },
    {
        img: cryptoBreakfast4
    },
    {
        img: cryptoBreakfast5
    },
    {
        img: cryptoBreakfast6
    },
    {
        img: cryptoBreakfast7
    }
]

export default function () {
    return (
        <div>

            <Slider items={galleryCryptoBreakfast} />

        </div>
    )
}