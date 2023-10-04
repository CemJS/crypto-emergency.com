import { Cemjsx } from "cemjs-all"
import cryptoBreakfast1 from '@images/about/cryptoBreakfast/cryptoBreakfast1.jpg'
import cryptoBreakfast2 from '@images/about/cryptoBreakfast/cryptoBreakfast2.jpg'
import cryptoBreakfast3 from '@images/about/cryptoBreakfast/cryptoBreakfast3.jpg'
import cryptoBreakfast4 from '@images/about/cryptoBreakfast/cryptoBreakfast4.jpg'
import cryptoBreakfast5 from '@images/about/cryptoBreakfast/cryptoBreakfast5.jpg'
import cryptoBreakfast6 from '@images/about/cryptoBreakfast/cryptoBreakfast6.jpg'
import cryptoBreakfast7 from '@images/about/cryptoBreakfast/cryptoBreakfast7.jpg'
import telegram from '@svg/social_networks/telegram.svg'

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
            <h2 class="about_subtitle">Мероприятия</h2>
            <div class="cryptoBreakfast">
                <div class="cryptoBreakfast_info">
                    <p class="cryptoBreakfast_text">Криптозавтрак - это место, где люди, увлеченные криптовалютами и современными технологиями, собираются для обмена опытом и знаниями. Завтраки проходят в дружественной и неформальной обстановке, где каждый может пообщаться и познакомиться с единомышленниками. Участники делятся своим опытом и знаниями, отвечают на вопросы других участников и получают ответы на свои собственные вопросы. Кроме того, во время завтраков можно поиграть в настольные игры, что создает дополнительную атмосферу взаимодействия и развлечения. И, конечно же, нельзя забыть о чашке чая или кофе, которые сопровождают наши встречи. Криптозавтрак - это отличная возможность расширить свои знания, найти новых друзей и просто хорошо провести время в компании единомышленников.</p>
                    <a href="https://t.me/+OUvgMPjtSC02NDAy" class="btn btn_timing mt_15" onclicl={this.Fn.link}>
                        <span>Присоединиться</span>
                        <img src={telegram} alt="Присоединиться к телеграм каналу" />
                    </a>
                </div>
                <div>
                    <div ref="galleryCryptoBreakfast">
                        {
                            galleryCryptoBreakfast.map((item, index) => {
                                return (
                                    <div class="slide">
                                        <img src={item.img} />
                                        {/* {index} */}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div ref="galleryDots"></div>
                </div>
            </div>
        </div>
    )
}