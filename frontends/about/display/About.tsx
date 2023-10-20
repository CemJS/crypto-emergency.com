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

import yan from '@images/about/team/team1.png'
import anya from '@images/about/team/team2.png'
import dima from '@images/about/team/team3.png'
import igor from '@images/about/team/team4.png'
import logo from "@svg/about/cryptoEmergency.svg"

import rocket from '@svg/about/roadmap/rocket.svg'
import wallet from '@svg/about/roadmap/wallet.svg'
import community from '@svg/about/roadmap/community.svg'
import univercity from '@svg/about/roadmap/university.svg'
import exchange from '@svg/about/roadmap/exchange.svg'
import network from '@svg/about/roadmap/network.svg'
import arrowUp from '@svg/about/roadmap/arrowUp.svg'

import logo_apple from '@images/social_networks/logo_apple.png'
import logo_android from '@images/social_networks/logo_android.png'
import cem_assist from '@images/social_networks/cem_assist.png'
import coverAssistant from '@images/about/developments/cemAssistant.jpg'
import coverWallet from '@images/about/developments/cemWallet.png'
import coverEmergency from '@images/about/developments/cryptoEmergency.jpg'
import wallet_icon from '@images/social_networks/wallet_icon.png'
import crypto_emergency from '@images/social_networks/crypto_emergency.svg'

import discord from '@images/social_networks/discord.png'
import facebook from '@svg/social_networks/facebook.svg'
import github from '@images/social_networks/github.png'
import instagram from '@images/social_networks/instagram.png'
import linkedin from '@images/social_networks/linkedin.png'
import telegram from '@svg/social_networks/telegram.svg'
import tiktok from '@images/social_networks/tiktok.png'
import twitter from '@images/social_networks/twitter.png'
import vk from '@images/social_networks/vk.png'
import youtube from '@images/social_networks/youtube.png'

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

import Partners from './Partners'
import Events from "./Events"

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

const partnersOptions = {
    name: "TitlePreview",
    mainClass: "about_main"
}

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

const faq = [
    {
        question: "Цель Crypto Emergency?",
        answer: "Объединить криптоэнтузиастов со всего мира на многофункциональной платформе, где собраны все необходимые инструменты для общения, обучения, заработка и создания собственного контента.",
        hidden: true
    },
    {
        question: "Как заработать или купить токены CEM?",
        answer: "Купить CEM можно официально на бирже Bitmart. Также можно вести активную деятельность на платформе и получать новый уровень за действия на платформе и с новым уровнем получать в награду CEM. Следите за новостями в телеграме, могут появляться разные конкурсы где в награду можно получить монету CEM.",
        hidden: false
    },
    {
        question: "Как вывести заработанные CEM с платформы?",
        answer: "Вывести заработанные CEM на нашей платформе за проявленную активность вы можете на свой счет в любое время. Автоматически в личном кабинете во вкладке «Мои активы». Минимальная сумма вывода — 10CEM.",
        hidden: false
    },
    {
        question: "Проект доступен лишь в России?",
        answer: "У нас огромная экосистема которая на данный момент полностью переведена на 16 языков по всему миру, а основными разделами платформы уже сейчас можно пользоваться на 60 языках. Платформа доступна на всех рынках включая Китай.",
        hidden: false
    },
    {
        question: "Можно ли скачать приложение на телефон?",
        answer: "Да! Все проекты нашей экосистемы доступны как на Android так и на iPhone. Найти ссылочки для скачивания можно внизу страницы, либо просто через поиск в маркетах.",
        hidden: false
    }
]


const team = [
    {
        image: yan,
        name: 'Ян Кривоносов',
        post: 'CEO и Founder',
        link: '/user/Yan_Krivonosov'
    },
    {
        image: igor,
        name: 'Игорь Еньшин',
        post: 'Технический директор',
        link: '/user/Betarost'
    },
    {
        image: anya,
        name: 'Анна Рыжкова',
        post: 'Руководитель дизайн отдела',
        link: '/user/Anyaryzhkova'
    },
    {
        image: dima,
        name: 'Дмитрий Белов',
        post: 'Управляющий директор',
        link: '/user/Dmitrii_Belov'
    }
]


const roadmap = [
    {
        title: "Старт проекта",
        date: "15 июня 2021г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: rocket
    },
    {
        title: "Собственный Блокчейн СЕМ",
        date: "19 мая 2022г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: blockchain
    },
    {
        title: "Кошелёк Cem Wallet",
        date: "Сентябрь 2022г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: wallet
    },
    {
        title: "Сообщество DAO",
        date: "Лето 2023г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: community
    },
    {
        title: "Крипто Университет",
        date: "Осень 2023г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: univercity
    },
    {
        title: "Собственная Биржа",
        date: "Начало 2024г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: exchange
    },
    {
        title: "Новостная нейросеть",
        date: "Конец 2024г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: network
    }
]

const developments = [
    {
        name: 'CEM Assistant',
        logo: cem_assist,
        appStore: 'https://apps.apple.com/ru/app/cem-assistant/id6448629326',
        playMarket: 'https://play.google.com/store/apps/details?id=com.cemassistant&hl=ru',
        desc: "Приложение CEM Assistent - это бесплатное приложение, которое позволяет пользоваться чатом GPT и генератором картинок абсолютно бесплатно. Также реализована функция сохранения заметок, что позволяет пользователям сохранять и организовывать свои записи и идеи. Cem Assistent может быть полезен каждому!"
    },
    {
        name: 'CEM Wallet',
        logo: wallet_icon,
        appStore: 'https://apps.apple.com/ru/app/cem-wallet/id1637300554',
        playMarket: 'https://play.google.com/store/apps/details?id=com.cemwallet&hl=en&gl=US',
        desc: "CEM Wallet - это некастодиальный кошелек для криптовалюты. Он предоставляет пользователям безопасное и удобное место для хранения и управления их криптовалютных активов. Приложение является надёжным инструментом для управления криптовалютными активами."
    },
    {
        name: 'Crypto Emergency',
        logo: crypto_emergency,
        appStore: 'https://apps.apple.com/es/app/crypto-emergency/id1635628021',
        playMarket: 'https://play.google.com/store/apps/details?id=com.cryptoemergency&hl=en&gl=US',
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии. Первая в мире специализированная социальная сеть для взаимодействия всех участников международного крипто-рынка. На данный момент платформа поддерживает 60 языков, что дает практически безграничные возможности общения, поиска и размещения материалов."
    },
]

const socials = [
    {
        logo: instagram,
        name: 'Instagram',
        url: 'https://www.instagram.com/cryptoemergencyrussia/?hl=ru',
        urlENG: 'https://www.instagram.com/cryptoemergency/?hl=ru'
    },
    {
        logo: tiktok,
        name: 'Tiktok',
        url: 'https://www.tiktok.com/@cryptoemergencyrussia',
        urlENG: 'https://www.tiktok.com/@cryptoemergency'
    },
    {
        logo: youtube,
        name: 'Youtube',
        url: 'https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/',
        urlENG: 'https://www.youtube.com/channel/UCdDWOveIuvqkyusDK1gv4ig/'
    },
    {
        logo: vk,
        name: 'Vkontakte',
        url: 'https://vk.com/cryptoemergency'
    },
    {
        logo: linkedin,
        name: 'Linkedin',
        url: 'https://www.linkedin.com/company/86302977'
    },
    {
        logo: twitter,
        name: 'Twitter',
        url: 'https://twitter.com/cryptoemergency',
    },
    {
        logo: discord,
        name: 'Discord',
        url: 'https://discord.com/invite/Qdm7W8DjYc'
    },
    {
        logo: github,
        name: 'Github',
        url: 'https://github.com/CryptoEmergency'
    },
]


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

const RenderFaq = function ({ items }) {
    return (
        <div class="">
            <h2 class="about_subtitle">FAQ</h2>
            <ul class="accordeon">
                {
                    items.map((item, index) => {
                        return (
                            <li class="accordeon_item">
                                <input type="radio" name="accordeon" id={`accordeon_${index}`} checked={item.hidden} />
                                <label for={`accordeon_${index}`}>{item.question}</label>
                                <div class="accordeon_content">
                                    <p>{item.answer}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const RenderTeams = function ({ items }) {
    return (
        <div>
            <h2 class="about_subtitle">Команда</h2>
            <div class="team">
                {
                    items.map(item => {
                        return (
                            <div class="team_item">

                                <div class="team_item_content">
                                    <div
                                        class="team_item_front"
                                        style={`background-image: url(${item.image});`}
                                    >
                                        <div class="team_item_title">
                                            <h2 >{item.name}</h2>
                                        </div>
                                        <div class="team_item_post">
                                            <p>{item.post}</p>
                                        </div>
                                    </div>

                                    <div
                                        class="team_item_back"
                                        style={`background-image: url(${item.image});`}
                                    >
                                        <a href={item.link} class="btn btn_timing" onclick={this.Fn.link}>
                                            <span>Перейти в профиль</span>
                                            <img src={logo} alt="Присоединиться к телеграм каналу" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const RenderRoadMap = function ({ items }) {
    return (
        <div class="roadmapNew">
            <h1 class="about_subtitle">Дорожная карта</h1>
            <div class="roadmapNew_wrapper">
                <div class="roadmapNew_centerLine">
                    <div class="roadmapNew_scrollIcon">
                        <img src={arrowUp} alt="Иконка" />
                    </div>
                </div>
                {
                    items.map((item, index) => {
                        return (
                            <div class={["roadmapNew_row", `roadmapNew_row_${index + 1}`]}>
                                <section>
                                    <div class="roadmapNew_icon">
                                        <img src={item.icon} alt="Иконка" />
                                    </div>
                                    <div class="roadmapNew_details">
                                        <span class="roadmapNew_title">{item.title}</span>

                                    </div>
                                    <p class="roadmapNew_text">{item.desc}</p>
                                    <span class="roadmapNew_date">{item.date}</span>
                                </section>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const RenderDevelopments = function ({ items }) {
    return (
        <div >
            <h2 class="about_subtitle">Наши разработки</h2>
            <div class="developments">
                {
                    items.map((item, index) => {
                        return (
                            <div class={["developments_item", `developments_item_${index + 1}`]}>
                                <h3 class="developments_item_title">{item.name}</h3>
                                <p class="developments_item_desc">{item.desc}</p>
                                <div class="developments_item_links">
                                    <a
                                        href={item.appStore}
                                        onclick={this.Fn.link}
                                        class="developments_item_btn"
                                    >
                                        <img src={logo_apple} alt="AppStore" class="developments_item_icon" />
                                        AppStore
                                    </a>
                                    <a
                                        href={item.playMarket}
                                        onclick={this.Fn.link}
                                        class="developments_item_btn"
                                    >
                                        <img src={logo_android} alt="PlayMarket" class="developments_item_icon" />
                                        PlayMarket
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

const RenderSocials = function ({ items }) {
    return (
        <div class="socials">
            <h2 class="about_subtitle">Социальные сети</h2>
            <ul class="socials_list">
                {
                    items.map(item => {
                        return (
                            <li>
                                <a
                                    href={item.url}
                                    class={["socials_link", `socials_link_${item.name.toLocaleLowerCase()}`]}
                                    style={`background-image: url(${item.logo});`}
                                    aria-label={item.name}
                                    onclick={this.Fn.link}
                                >
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div class="socials_text">
                <p>Присоединяйтесь к нашей уникальной социальной сети CryptoEmergency и получите доступ к самой актуальной информации о криптовалютах и блокчейне. Скачайте наше приложение и станьте частью нашей экосистемы. У нас вы сможете общаться с единомышленниками, делиться своими идеями и получать ценные советы от опытных трейдеров и инвесторов. Присоединяйтесь к нам прямо сейчас и не упустите возможность быть в курсе последних новостей и трендов в мире криптовалют. Скачайте приложение CryptoEmergency и станьте частью нашей успешной и инновационной экосистемы уже сегодня!</p>
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
                <RenderFaq items={faq}></RenderFaq>
                <RenderTeams items={team}></RenderTeams>
                <RenderRoadMap items={roadmap}></RenderRoadMap>
                <Partners></Partners>
                <RenderDevelopments items={developments}></RenderDevelopments>
                <Events></Events>
                <RenderSocials items={socials}></RenderSocials>
            </div>
        </div>
    )
}