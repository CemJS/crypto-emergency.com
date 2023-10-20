import { Cemjsx } from "cemjs-all"
import TitlePreview from '@elements/TitlePreview'

// fo main slider
import ecosystem from '@images/about/main/ecosystem.jpg'
import blockchain from '@images/about/main/blockchain.jpg'
import trading from '@images/about/main/trading.jpg'
import coin from '@images/about/main/cem.jpg'

import folder from "@svg/about/goal_1.svg"
import safe from "@svg/about/goal_2.svg"
import access from "@svg/about/goal_3.svg"
import pin from "@svg/about/goal_4.svg"

import coverAssistant from '@images/about/developments/cemAssistant.jpg'
import coverWallet from '@images/about/developments/cemWallet.png'
import coverEmergency from '@images/about/developments/cryptoEmergency.jpg'

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

const titleOptions = {
    name: "TitlePreview",
    mainClass: "about_main"
}

const goals = [
    {
        img: folder,
        title: "Поднять крипто грамотность населения",
        description: "Мы создали платформу, где любой желающий может найти ответ на свой вопрос, и обрести навыки инвестирования в криптовалюту.",
        classItem: "crypto",
    },
    {
        img: safe,
        title: "Объединить людей",
        description: "Создать мульти интернациональное комьюнити по всему миру.",
        classItem: "unite",
    },
    {
        img: access,
        title: "Бесплатный доступ",
        description: "Весь функционал на сайте не потребует от вас никаких вложений!",
        classItem: "access",
    },
    {
        img: pin,
        title: "Создание метавселенной",
        description: "Объединение всех продуктов компании в одной метавселенной.",
        classItem: "meta",
    },
];




const RenderGoals = function ({ items }) {
    return (
        <div>
            <h2 class="about_subtitle">Наши цели</h2>
            <div class="goal_list">
                {
                    items.map((item) => {
                        return (
                            <div class={["goal_item", item.classItem]}>
                                <div class="goal_img">
                                    <img src={item.img} ></img>
                                </div>
                                <div class="goal_content">
                                    <h4>{item.title}</h4>
                                    <div class="goal_content__desc">{item.description}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default function () {
    return (
        <div class="about">
            <TitlePreview items={aboutSlides} options={titleOptions} />
            <div class="wrapper">
                <RenderGoals items={goals}></RenderGoals>
                {/* <Accordeon></Accordeon> */}
                {/* <img class="whome__img whome__img_right" src={lines} /> */}
                {/* <Team></Team>
                <Roadmap></Roadmap>
                <Partners></Partners>
                <Developments></Developments>
                <Events></Events>
                <SocialNetworks></SocialNetworks> */}
            </div>
        </div>
    )
}