import { Cemjsx } from "cemjs-all"
import folder from "@svg/about/goal_1.svg"
import safe from "@svg/about/goal_2.svg"
import access from "@svg/about/goal_3.svg"
import pin from "@svg/about/goal_4.svg"

// fo main slider
import ecosystem from '@images/about/main/ecosystem.jpg'
import blockchain from '@images/about/main/blockchain.jpg'
import trading from '@images/about/main/trading.jpg'
import coin from '@images/about/main/cem.jpg'

import Roadmap from "./Roadmap"
import Accordeon from "./Accordeon"
import Partners from './Partners'
import SocialNetworks from "./SocialNetworks"
import Developments from "./Developments"
import Events from "./Events"
import Team from "./Team"

const arrBlockCard = [
    {
        img: folder,
        // altImg: Variable.lang.p.goalOne,
        title: "Поднять крипто грамотность населения",
        description: "Мы создали платформу, где любой желающий может найти ответ на свой вопрос, и обрести навыки инвестирования в криптовалюту.",
        classItem: "crypto",
    },
    {
        img: safe,
        // altImg: Variable.lang.p.goalTwo,
        title: "Объединить людей",
        description: "Создать мульти интернациональное комьюнити по всему миру.",
        classItem: "unite",
    },
    {
        img: access,
        // altImg: Variable.lang.p.goalThree,
        title: "Бесплатный доступ",
        description: "Весь функционал на сайте не потребует от вас никаких вложений!",
        classItem: "access",
    },
    {
        img: pin,
        // altImg: Variable.lang.p.goalFour,
        title: "Создание метавселенной",
        description: "Объединение всех продуктов компании в одной метавселенной.",
        classItem: "meta",
    },
];

const aboutSlides = [
    {
        cover: ecosystem,
        name: 'Ecosystem Crypto Emergency',
        desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных маленькая грустный сих если океана пустился первую текстами раз дал возвращайся предложения обеспечивает снова повстречался сбить своего ipsum реторический семантика предупредила над единственное вскоре деревни, путь несколько себя. Пустился гор языком семантика подзаголовок ручеек?'
    },
    {
        cover: blockchain,
        name: 'Blockchain',
        desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных маленькая грустный сих если океана пустился первую текстами раз дал возвращайся предложения обеспечивает снова повстречался сбить своего ipsum реторический семантика предупредила над единственное вскоре деревни, путь несколько себя. Пустился гор языком семантика подзаголовок ручеек?'
    },
    {
        cover: trading,
        name: 'Trading',
        desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных маленькая грустный сих если океана пустился первую текстами раз дал возвращайся предложения обеспечивает снова повстречался сбить своего ipsum реторический семантика предупредила над единственное вскоре деревни, путь несколько себя. Пустился гор языком семантика подзаголовок ручеек?'
    },
    {
        cover: coin,
        name: 'CEM coin',
        desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных маленькая грустный сих если океана пустился первую текстами раз дал возвращайся предложения обеспечивает снова повстречался сбить своего ipsum реторический семантика предупредила над единственное вскоре деревни, путь несколько себя. Пустился гор языком семантика подзаголовок ручеек?'
    },
    {
        cover: ecosystem,
        name: 'Ecosystem Crypto Emergency',
        desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных маленькая грустный сих если океана пустился первую текстами раз дал возвращайся предложения обеспечивает снова повстречался сбить своего ipsum реторический семантика предупредила над единственное вскоре деревни, путь несколько себя. Пустился гор языком семантика подзаголовок ручеек?'
    },
    {
        cover: blockchain,
        name: 'Blockchain',
        desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных маленькая грустный сих если океана пустился первую текстами раз дал возвращайся предложения обеспечивает снова повстречался сбить своего ipsum реторический семантика предупредила над единственное вскоре деревни, путь несколько себя. Пустился гор языком семантика подзаголовок ручеек?'
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
                                        <button class="btn btn_timing">Перейти</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div class="about__container">
                <div class="about__goal goal">
                    <div class="goal__inner">
                        <h2 class="about_subtitle">Наши цели</h2>
                        <div class="goal__list">
                            {
                                arrBlockCard.map((item) => {
                                    return (
                                        <div class={["goal__item", item.classItem]}>
                                            <div class="goal__img">
                                                <img src={item.img} ></img>
                                            </div>
                                            <div class="goal__content">
                                                <h4>{item.title}</h4>
                                                <div class="goal__content_description">{item.description}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <Accordeon></Accordeon>

                        {/* <img class="whome__img whome__img_right" src={lines} /> */}

                        <Team></Team>
                    </div>
                </div>


                <Roadmap></Roadmap>
                <Partners></Partners>
                <Developments></Developments>
                <Events></Events>
                <SocialNetworks></SocialNetworks>

            </div>
        </div>
    )
}