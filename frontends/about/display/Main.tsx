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

const aboutSlides = [
    {
        cover: trading,
        name: 'Карьера',
        desc: 'Объединяя криптоэнтузиастов с профессионалами крипторынка, участников коммьюнити с проектами и стартапами, мы стремимся чтобы каждый пользователь экосистемы Crypto Emergency нашел свой выигрыш - мы реализовываем модель WIN/WIN. Соединение соискателей с работодателями, проекты с фрилансерами - это одна из стратегий этой модели. Мы поможем людям со всего мира найти работу в сфере криптоиндустрии и IT.',
        link: '/vacancies'
    },
    {
        cover: ecosystem,
        name: 'Экосистема Crypto Emergency',
        desc: 'Создаём надёжную и удобную цифровую экосистему, включающую в себя собственный блокчейн со смарт-контрактами, некастодиальным криптокошельком и разносторонней поддержкой стартапов криптоиндустрии, универсальную социальную сеть, поддерживающую все виды контента (текст, аудио, видео), информационно-образовательный портал, повышающий цифровую криптограмотность населения планеты,автоматизированную платформу для размещения вакансий и резюме.'
    },
    {
        cover: coin,
        name: 'Социальная сеть Crypto Emergency',
        desc: 'Первая в мире специализированная социальная сеть для взаимодействия всех участников международного крипто-рынка. На данный момент платформа поддерживает 60 языков, что дает практически безграничные возможности общения, поиска и размещения материалов. Социальная сеть Crypto Emergency поддерживает токенизированную модель Create-2-Earn (Создавай и зарабатывай). Полезные действия на платформе, а также создание контента будут вознаграждаются внутренними баллами платформы.'
    },
    {
        cover: blockchain,
        name: 'Blockchain CEM',
        desc: 'Блокчейн CEM - общедоступная блокчейн-платформа с открытым кодом, официально зарегистрированная на chainlist.org под номером 193. Один из надёжных алгоритмов подтверждения блоков- Proof of Authority. Высокая скорость подтверждения транзакций- 3 секунды. Одна из минимальных комиссий за газ. Лёгкий и удобный выпуск смарт-контрактов. Возможность выпуска NFT токенов. Простая интеграция с большинством популярных кошельков, в том числе Metamask, Trust Wallet, и собственный кошелёк CEM Wallet. ',
        link: 'https://cemblockchain.com/'
    },
    {
        cover: ecosystem,
        name: 'NFT на блокчейне',
        desc: 'Творческие личности, наши коллаборации с онлайн-галереями искусства, а также собственное видение команды CryptoEmergency на использование NFT-токенов в реальных областях экономики и в цифровом мире позволят привнести на этот развивающийся рынок новые степени свободы и реализации. Публикация NFT-коллекций (NFT-маркет) и размещение на нашей платформе NFT-проектов будет реализовано в ближайшее время',
        link: 'https://cemnft.com/'
    },
    {
        cover: blockchain,
        name: 'Криптоуниверситет',
        desc: 'Одной из наших миссий мы видим повышение крипто, цифровой и финансовой грамотности населения планеты. Создание этого раздела - приоритетная задача для нашей команды. В нашем университете каждый сможет получить знания - от самых простых до узкоспециализированных, одни повысят безопасность своих средств, другие - откроют для себя новые горизонты карьерного роста и развития. Мы планируем реализовать различные форматы обучения - от классических (видео-ролики, лонгриды) до онлайн-лекций в метавселенной.'
    },
]

export default function () {
    return (
        <div class="about">
            <div class="about_main">
                <div class="about_main_arrows">
                    <button
                        class="about_main_arrow about_main_arrow_prev glass"
                        onclick={() => {
                            let lists = document.querySelectorAll(".about_main_item");
                            this.Ref.aboutSlide.prepend(lists[lists.length - 1])
                        }}
                    ></button>
                    <button
                        class="about_main_arrow about_main_arrow_next glass"
                        onclick={() => {
                            let lists = document.querySelectorAll(".about_main_item");
                            this.Ref.aboutSlide.appendChild(lists[0])
                        }}
                    ></button>
                </div>
                <div class="about_main_slide" ref="aboutSlide">
                    {
                        aboutSlides.map(item => {
                            return (
                                <div class="about_main_item" style={`background-image: url(${item.cover});`}>
                                    <div class="about_main_item_content">
                                        <div class="about_main_item_name">{item.name}</div>
                                        <div class="about_main_item_desc">{item.desc}</div>
                                        {
                                            item?.link ?
                                                <a href={item.link} class="btn btn_timing" onclick={this.Fn.link}>Перейти</a> : null
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div class="wrapper">
                <Goals></Goals>
                <Accordeon></Accordeon>
                {/* <img class="whome__img whome__img_right" src={lines} /> */}
                <Team></Team>
                <Roadmap></Roadmap>
                <Partners></Partners>
                <Developments></Developments>
                <Events></Events>
                <SocialNetworks></SocialNetworks>
            </div>
        </div>
    )
}