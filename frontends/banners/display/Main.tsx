import { Cemjsx } from "cemjs-all"

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
    return <Slider items={galleryCryptoBreakfast} />
}