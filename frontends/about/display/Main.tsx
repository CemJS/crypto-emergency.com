import { Cemjsx } from "cemjs-all"
import folder from "@svg/about/goal_1.svg"
import safe from "@svg/about/goal_2.svg"
import access from "@svg/about/goal_3.svg"
import pin from "@svg/about/goal_4.svg"
import ceo from "@images/about/team1.png"
import it from "@images/about/team4.png"
import designer from "@images/about/team2.png"
import director from "@images/about/team3.png"
import lines from "@svg/about/vector_3.svg"

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

const arrTeam = [
    {
        name: "Ян Кривоносов",
        foto: ceo,
        position: "CEO проекта Crypto Emergency",
    },
    {
        name: "Игорь Еньшин",
        foto: it,
        position: "Руководитель IT направления",
    },
    {
        name: "Анна Рыжкова",
        foto: designer,
        position: "Руководитель отдела по работе с дизайнерами",
    },
    {
        name: "Дмитрий Белов",
        foto: director,
        position: "Управляющий директор проекта",
    },
];

const roadmap = [
    {
        date: "15 Июня 2021г.",
        description: "Старт проекта",
    },
    {
        date: "19 Мая 2022г.",
        description: "Собственный Блокчейн CEM",
    },
    {
        date: "Сентябрь 2022г.",
        description: "Кошелек Cem Wallet",
    },
    {
        date: "Лето 2023г.",
        description: "Сообщества DAO",
    },
    {
        date: "Осень 2023г.",
        description: "Крипто Университет",
    },
    {
        date: "Начало 2024г.",
        description: "Собственная биржа",
    },
    {
        date: "Конец 2024г.",
        description: "Новостная нейросеть",
    },
];

let x1 = null;
let y1 = null;

export default function () {
    return (
        <div class="about_page about">
            <div class="about__whome whome">
                <div class="whome__inner">
                    <h2 class="about__subtitle">Crypto Emergency</h2>
                    <p>Объединяем криптоэнтузиастов всего мира на единой многофункциональной платформе Crypto Emergency, которая даст им все необходимые инструменты для общения, обучения, заработка и создания собственного контента. </p>
                </div>
                <div class="whome__bg" />
            </div>
            <div class="about__container">
                <div class="about__goal goal">
                    <div class="goal__inner">
                        <h2 class="about__subtitle goal__title">Наши цели</h2>
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
                        <div class="accordeon">
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
                        </div>
                        <img class="whome__img whome__img_right" src={lines} />
                        <div class="team">
                            <h2 class="about__subtitle team__title">Наша команда</h2>
                            <div
                                class="team__list"
                                ref="sliderTeam"
                                ontouchstart={(e) => {
                                    const firstTouch = e.touches[0];
                                    x1 = firstTouch.clientX;
                                    y1 = firstTouch.clientY;
                                }}
                                ontouchmove={(e) => {
                                    if (!x1 || !y1) return false;
                                    let x2 = e.touches[0].clientX;
                                    let y2 = e.touches[0].clientY;
                                    let xDiff = x2 - x1;
                                    let yDiff = y2 - y1;

                                    if (Math.abs(xDiff) > Math.abs(yDiff)) {
                                        if (xDiff > 0) {
                                            this.Ref.sliderTeam.scrollLeft -= this.Ref.teamItem.offsetWidth + 40;
                                        }
                                        else {
                                            this.Ref.sliderTeam.scrollLeft += this.Ref.teamItem.offsetWidth + 40;
                                        }
                                    }
                                    x1 = null;
                                    y1 = null;
                                }}
                            >
                                {
                                    arrTeam.map((item) => {
                                        return (
                                            <div class="team__item" ref="teamItem">
                                                <div class="team__img">
                                                    <img src={item.foto}></img>
                                                </div>
                                                <h5>{item.name}</h5>
                                                <span>{item.position}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div class="roadmap">
                    <h2 class="about__subtitle roadmap__title">Дорожная карта</h2>
                    <div class="roadmap__wrap">
                        {
                            roadmap.map((item, index) => {
                                return (
                                    <div class={["roadmap__item", `roadmap__item_${index}`]}>
                                        <div class={["item__card", `item__card_${index}`]}>
                                            <span class={["year", `year_${index}`]}>{item.description}</span>
                                            <p class="description">{item.date}</p>
                                        </div>

                                        <div class={["roadmap__item_turn", `roadmap__item_turn_${index}`]}>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}