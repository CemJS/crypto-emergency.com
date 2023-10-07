import { Cemjsx } from "cemjs-all"
import folder from "@svg/about/goal_1.svg"
import safe from "@svg/about/goal_2.svg"
import access from "@svg/about/goal_3.svg"
import pin from "@svg/about/goal_4.svg"


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

const arrAccordeon = [
    {
        title: "Цель Crypto Emergency?",
        description: "Объединить криптоэнтузиастов со всего мира на многофункциональной платформе, где собраны все необходимые инструменты для общения, обучения, заработка и создания собственного контента.",
        hidden: false,
    },
    {
        title: "Как заработать или купить токены CEM?",
        description: "Купить CEM можно официально на бирже Bitmart. Также можно вести активную деятельность на платформе и получать новый уровень за действия на платформе и с новым уровнем получать в награду CEM. Следите за новостями в телеграме, могут появляться разные конкурсы где в награду можно получить монету CEM.",
        hidden: true,
    },
    {
        title: "Как вывести заработанные CEM с платформы?",
        description: "Вывести заработанные CEM на нашей платформе за проявленную активность вы можете на свой счет в любое время.  Автоматически в личном кабинете во вкладке «Мои активы». Минимальная сумма вывода — 10CEM.",
        hidden: true,
    },
    {
        title: "Проект доступен лишь в России?",
        description: "У нас огромная экосистема которая на данный момент полностью переведена на 16 языков по всему миру, а основными разделами платформы уже сейчас можно пользоваться на 60 языках. Платформа доступна на всех рынках включая Китай.",
        hidden: true,
    },
    {
        title: "Можно ли скачать приложение на телефон?",
        description: "Да! Все проекты нашей экосистемы доступны как на Android так и на iPhone. Найти ссылочки для скачивания можно внизу страницы, либо просто через поиск в маркетах.",
        hidden: true,
    },
];



let x1 = null;
let y1 = null;

export default function () {
    return (
        <div class="about_page about">
            <div class="about__whome whome">
                <div class="whome__inner">
                    <h2 class="about_subtitle">Crypto Emergency</h2>
                    <p>Объединяем криптоэнтузиастов всего мира на единой многофункциональной платформе Crypto Emergency, которая даст им все необходимые инструменты для общения, обучения, заработка и создания собственного контента. </p>
                </div>
                <div class="whome__bg" />
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

                        {/* <div class="accordeon">
                            {
                                arrAccordeon.map((item, index) => {
                                    return (
                                        <div class="accordeon__item">
                                            <div class="accordeon__header"
                                                onclick={() => {
                                                    arrAccordeon.map((el, i) => {
                                                        if (index === i) {
                                                            el.hidden = !el.hidden;
                                                        } else {
                                                            el.hidden = true;
                                                        }
                                                    });
                                                    this.init()
                                                }}
                                            >
                                                <h5 class="accordeon__header_title">{item.title}</h5>
                                                <img src={`/assets/svg/about/select_arrow.svg`}
                                                    class={["arrow", item.hidden ? null : "arrow__toggle"]}
                                                />
                                            </div>
                                            <div class={["accordeon__content", item.hidden ? null : "content__show"]}>
                                                {item.description}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div> */}

                        {/* <img class="whome__img whome__img_right" src={lines} /> */}

                        <Team></Team>
                    </div>
                </div>


                <Roadmap></Roadmap>
                <Partners></Partners>
                {/* <SocialNetworks></SocialNetworks> */}
                <Developments></Developments>
                <Events></Events>
            </div>
        </div>
    )
}