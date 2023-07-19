import { Cemjsx } from "cemjs-all"
import icon from '@svg/career/profession_icon-2.svg'

const advantages = [
  {
    title: 'Дружная команда',
    desc: 'Молодой и дружный коллектив.'
  },
  {
    title: 'Интернациональная компания',
    desc: 'У нас работают специалисты со всего мира.'
  },
  {
    title: 'Комфортабельные условия труда',
    desc: 'Современный офис, удобное расположение, индивидуальный подход к каждому.'
  },
  {
    title: 'Трудоустройство по современным стандартам',
    desc: 'Контракт, система бонусов, премий и поощрений.'
  },
]

const employment = [
  {
    text: 'Выберите интересующую вас категорию.',
  },
  {
    text: 'Ознакомьтесь с требованиями данной вакансии.',
  },
  {
    text: 'Отправляйте заявку в форме указанной в вакансии.',
  },
  {
    text: 'В случае положительного решения мы с вами свяжемся. Удачи вам!',
  },
]

const professions = [
  {
    text: 'Развитие бизнеса'
  },
  {
    text: 'Маркетинг'
  },
  {
    text: 'Сервис поддержки'
  },
  {
    text: 'Продукт и дизайн'
  },
  {
    text: 'Безопасность и ИТ'
  },
  {
    text: 'Кадровый менеджмент'
  },
  {
    text: 'Стратегический менеджмент'
  },
  {
    text: 'Юридический отдел'
  },
  {
    text: 'Монтаж и создание видео'
  },
]

export const display = function () {
  return (
    <div class="page page__container">
      <div class="career">
        <div class="wrapper">
          <section class="career_preview">
            <div class="career_preview_inner">
              <h1 class="career_preview_title">Карьера в Crypto Emergency</h1>
              <span class="career_preview_text">Присоединяйтесь к нашей команде.</span>
            </div>
          </section>
          <section class="career_advantages">
            <h2 class="career_title">Преимущества</h2>
            <div class="career_advantages_inner">
              {
                advantages.map((item, index) => {
                  return (
                    <div class="advantages_item">
                      <span class={["advantages_item_circle", `advantages_item_circle-${index}`]}>
                      </span>
                      <div class="advantages_item_info">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section class="career_employment">
            <h2 class="career_title">Как устроиться в нашу компанию?</h2>
            <div class="career_employment_inner">
              {
                employment.map((item, index) => {
                  return (
                    <div class="employment_item">
                      <span>{`0${index + 1}`}</span>
                      <p>{item.text}</p>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section class="career_professions">
            <h2 class="career_title">Выбери свою профессию</h2>
            <div class="career_professions_inner">
              {
                professions.map((item, index) => {
                  return (
                    <div class="professions_item">
                      <span class={["professions_item_image", `professions_item_image-${index}`]}></span>
                      <span class="professions_item_text">{item.text}</span>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section class="career_vacancies">
            <div class="vacancy">
              <div class="vacancy_header pb_15">
                <img src={icon} alt="Вакансия в компанию Crypto Emergency"></img>
                <span class="vacancy_title">HTML-верстальщик</span>
                <span class="vacancy_active">активно</span>
              </div>
              <p class="vacancy_text secondary_text">Требуемый опыт работы: 1–3 года.</p>
              <p class="vacancy_text secondary_text pb_15">Полная занятость, полный день.</p>
              <p class="vacancy_text">Работа исключительно в офисе.</p>
              <p class="vacancy_text">В данный момент ведется разработка нескольких крупных проектов.</p>

              <div class="vacancy_main">
                <div class="vacancy_main_item">
                  <h3>Обязанности:</h3>
                  <p class="vacancy_main_item_text">Верстка шаблонов веб-страниц «с нуля»;</p>
                  <p class="vacancy_main_item_text">Изменение существующих шаблонов сайта;</p>
                  <p class="vacancy_main_item_text">Взаимодействие с дизайнером, программистом;</p>
                  <p class="vacancy_main_item_text">Тестирование функционала готовых проектов.</p>
                </div>
                <div class="vacancy_main_item">
                  <h3>Требования:</h3>
                  <p class="vacancy_main_item_text">Умение уверенно верстать флексами и гридами, понимать чем одно отличается от другого;</p>
                  <p class="vacancy_main_item_text">JS-программирование простейшей логики форм будет большим плюсом (валидация, модалки);</p>
                  <p class="vacancy_main_item_text">Аккуратность, внимательность, педантичность к своему и чужому коду;</p>
                  <p class="vacancy_main_item_text">Опыт работы верстальщиком или Front-end разработчиком от 1 года;</p>
                  <p class="vacancy_main_item_text">Кроссбраузерная pixel-perfect верстка и оптимизация под мобильные девайсы;</p>
                  <p class="vacancy_main_item_text">Отличные знания HTML5, CSS3, SCSS, Figma;</p>
                  <p class="vacancy_main_item_text">Знания JavaScript и библиотек, DOM;</p>
                  <p class="vacancy_main_item_text">Навыки редактирования изображений, фотографий, минимальные знания Adobe Photoshop.</p>
                </div>
              </div>

              <p class="vacancy_text">Рабочая неделя 5/2 c началом рабочего дня (10:00 - 18:00 Мск)</p>
              <p class="vacancy_text">Мы находимся в Новороссийске, можем организовать встречу в офисе.</p>

              <h3>Ключевые навыки</h3>

              <div class="vacancy_skills">
                <div class="vacancy_skills_item">
                  JavaScript
                </div>
                <div class="vacancy_skills_item">
                  CSS3
                </div>
                <div class="vacancy_skills_item">
                  HTML5
                </div>
                <div class="vacancy_skills_item">
                  JavaScript libraries
                </div>
                <div class="vacancy_skills_item">
                  Git
                </div>
                <div class="vacancy_skills_item">
                  Figma
                </div>
                <div class="vacancy_skills_item">
                  Adobe Photoshop
                </div>
                <div class="vacancy_skills_item">
                  Web-дизайн
                </div>
                <div class="vacancy_skills_item">
                  Чувство стиля
                </div>
                <div class="vacancy_skills_item">
                  Креативность
                </div>
              </div>
              <button class="btn btn_gradient">Откликнуться</button>

            </div>

            <div class="vacancy">
              <div class="vacancy_header pb_15">
                <img src={icon} alt="Вакансия в компанию Crypto Emergency"></img>
                <span class="vacancy_title">Frontent developer</span>
                <span class="vacancy_active">активно</span>
              </div>
              <p class="vacancy_text secondary_text">Требуемый опыт работы: 1–3 года.</p>
              <p class="vacancy_text secondary_text pb_15">Полная занятость, полный день.</p>
              <p class="vacancy_text">Работа исключительно в офисе.</p>
              <p class="vacancy_text">В данный момент ведется разработка нескольких крупных проектов.</p>

              <div class="vacancy_main">
                <div class="vacancy_main_item">
                  <h3>Обязанности:</h3>
                  <p class="vacancy_main_item_text">Поддержка и улучшение существующего продукта;</p>
                  <p class="vacancy_main_item_text">Разработка и развитие клиентской части проекта на JavaScript;</p>
                  <p class="vacancy_main_item_text">Постоянное улучшение своих знаний в области веб-технологий.</p>
                </div>
                <div class="vacancy_main_item">
                  <h3>Требования:</h3>
                  <p class="vacancy_main_item_text">Отличное знание языка JavaScript;</p>
                  <p class="vacancy_main_item_text">Навыки работы с GIT;</p>
                  <p class="vacancy_main_item_text">Уверенное знание HTML5, CSS3;</p>
                  <p class="vacancy_main_item_text">Умение предлагать рациональные решения поставленных задач;</p>
                  <p class="vacancy_main_item_text">Стремление к профессиональному росту‚ обязательность‚ ответственность;</p>
                  <p class="vacancy_main_item_text">Умение разбираться в чужом коде;</p>
                  <p class="vacancy_main_item_text">Опыт работы с js-фреймворками (React, Backbone, AngularJS, Vue.js и др.).</p>
                </div>
              </div>

              <p class="vacancy_text">Рабочая неделя 5/2 c началом рабочего дня (10:00 - 18:00 Мск)</p>
              <p class="vacancy_text">Мы находимся в Новороссийске, можем организовать встречу в офисе.</p>

              <h3>Ключевые навыки</h3>

              <div class="vacancy_skills">
                <div class="vacancy_skills_item">
                  JavaScript
                </div>
                <div class="vacancy_skills_item">
                  Node.js
                </div>
                <div class="vacancy_skills_item">
                  HTML5
                </div>
                <div class="vacancy_skills_item">
                  Git
                </div>
                <div class="vacancy_skills_item">
                  CSS3
                </div>
                <div class="vacancy_skills_item">
                  MongoDB
                </div>
                <div class="vacancy_skills_item">
                  JSX
                </div>
              </div>
              <button class="btn btn_gradient">Откликнуться</button>

            </div>

            <div class="vacancy">
              <div class="vacancy_header pb_15">
                <img src={icon} alt="Вакансия в компанию Crypto Emergency"></img>
                <span class="vacancy_title">Frontent React developer</span>
                <span class="vacancy_active">активно</span>
              </div>
              <p class="vacancy_text secondary_text">Требуемый опыт работы: 1–3 года.</p>
              <p class="vacancy_text secondary_text pb_15">Полная занятость, полный день.</p>
              <p class="vacancy_text">Работа исключительно в офисе.</p>
              <p class="vacancy_text">В данный момент ведется разработка нескольких крупных проектов.</p>

              <div class="vacancy_main">
                <div class="vacancy_main_item">
                  <h3>Обязанности:</h3>
                  <p class="vacancy_main_item_text">Разработка UI;</p>
                  <p class="vacancy_main_item_text">Фронтенд разработка нового функционала;</p>
                  <p class="vacancy_main_item_text">Сопровождение имеющегося кода, его доработка и оптимизация;</p>
                  <p class="vacancy_main_item_text">Постоянное улучшение своих знаний в области веб-технологий;</p>
                  <p class="vacancy_main_item_text">Умение работать самостоятельно, стремление к саморазвитию, высокая обучаемость, внимательность.</p>
                </div>
                <div class="vacancy_main_item">
                  <h3>Требования:</h3>
                  <p class="vacancy_main_item_text">Отличное знание языка JavaScript;</p>
                  <p class="vacancy_main_item_text">Знание и умение работать с фреймворками Vue/React;</p>
                  <p class="vacancy_main_item_text">Навыки работы с GIT;</p>
                  <p class="vacancy_main_item_text">Уверенное знание HTML5, CSS3;</p>
                  <p class="vacancy_main_item_text">Умение предлагать рациональные решения поставленных задач;</p>
                  <p class="vacancy_main_item_text">Стремление к профессиональному росту‚ обязательность‚ ответственность;</p>
                  <p class="vacancy_main_item_text">Умение разбираться в чужом коде, работать в команде;</p>
                </div>
              </div>

              <p class="vacancy_text">Рабочая неделя 5/2 c началом рабочего дня (10:00 - 18:00 Мск)</p>
              <p class="vacancy_text">Мы находимся в Новороссийске, можем организовать встречу в офисе.</p>

              <h3>Ключевые навыки</h3>

              <div class="vacancy_skills">
                <div class="vacancy_skills_item">
                  JavaScript
                </div>
                <div class="vacancy_skills_item">
                  Node.js
                </div>
                <div class="vacancy_skills_item">
                  HTML5
                </div>
                <div class="vacancy_skills_item">
                  Git
                </div>
                <div class="vacancy_skills_item">
                  CSS3
                </div>
                <div class="vacancy_skills_item">
                  MongoDB
                </div>
                <div class="vacancy_skills_item">
                  JSX
                </div>
              </div>
              <button class="btn btn_gradient">Откликнуться</button>

            </div>

            <div class="vacancy">
              <div class="vacancy_header pb_15">
                <img src={icon} alt="Вакансия в компанию Crypto Emergency"></img>
                <span class="vacancy_title">Backend developer</span>
                <span class="vacancy_active">активно</span>
              </div>
              <p class="vacancy_text secondary_text">Требуемый опыт работы: 1–3 года.</p>
              <p class="vacancy_text secondary_text pb_15">Полная занятость, полный день.</p>
              <p class="vacancy_text">Работа исключительно в офисе.</p>
              <p class="vacancy_text">В данный момент ведется разработка нескольких крупных проектов.</p>

              <div class="vacancy_main">
                <div class="vacancy_main_item">
                  <h3>Обязанности:</h3>
                  <p class="vacancy_main_item_text">Разработка кода backend части web проекта;</p>
                  <p class="vacancy_main_item_text">Поддержка существующей кодовой базы;</p>
                  <p class="vacancy_main_item_text">Разрабатывать новые компоненты системы;</p>
                  <p class="vacancy_main_item_text">Участвовать в проработке архитектурных решений.</p>
                  <p class="vacancy_main_item_text">Умение работать самостоятельно, стремление к саморазвитию, высокая обучаемость, внимательность.</p>
                </div>
                <div class="vacancy_main_item">
                  <h3>Требования:</h3>
                  <p class="vacancy_main_item_text">Глубокие знания Javascript и Node.js;</p>
                  <p class="vacancy_main_item_text">Опыт работы с NodeJS в baсkend приложениях;</p>
                  <p class="vacancy_main_item_text">Опыт работы с MongoDB;</p>
                  <p class="vacancy_main_item_text">Опыт работы с Git;</p>
                  <p class="vacancy_main_item_text">Опыт использования Redis;</p>
                  <p class="vacancy_main_item_text">Понимание REST-архитектуры, опыт разработки серверной части REST(REST API);</p>
                  <p class="vacancy_main_item_text">Умение писать чистый, валидный код, работать в команде;</p>
                </div>
              </div>

              <p class="vacancy_text">Рабочая неделя 5/2 c началом рабочего дня (10:00 - 18:00 Мск)</p>
              <p class="vacancy_text">Мы находимся в Новороссийске, можем организовать встречу в офисе.</p>

              <h3>Ключевые навыки</h3>

              <div class="vacancy_skills">
                <div class="vacancy_skills_item">
                  JavaScript
                </div>
                <div class="vacancy_skills_item">
                  Node.js
                </div>
                <div class="vacancy_skills_item">
                  Git
                </div>
                <div class="vacancy_skills_item">
                  MongoDB
                </div>
                <div class="vacancy_skills_item">
                  REST
                </div>
              </div>
              <button class="btn btn_gradient">Откликнуться</button>

            </div>

            <div class="vacancy">
              <div class="vacancy_header pb_15">
                <img src={icon} alt="Вакансия в компанию Crypto Emergency"></img>
                <span class="vacancy_title">DevOps</span>
                <span class="vacancy_active">активно</span>
              </div>
              <p class="vacancy_text secondary_text">Требуемый опыт работы: 1–3 года.</p>
              <p class="vacancy_text secondary_text pb_15">Полная занятость, полный день.</p>
              <p class="vacancy_text">Работа исключительно в офисе.</p>
              <p class="vacancy_text">В данный момент ведется разработка нескольких крупных проектов.</p>

              <div class="vacancy_main">
                <div class="vacancy_main_item">
                  <h3>Обязанности:</h3>
                  <p class="vacancy_main_item_text">Обеспечение бесперебойного функционирования IT–инфраструктуры;</p>
                  <p class="vacancy_main_item_text">Устранение инцидентов и неисправностей в работе IT-инфраструктуры;</p>
                  <p class="vacancy_main_item_text">Поддерживать и развивать базовую инфраструктуру (мониторинг, логирование, etc);</p>
                  <p class="vacancy_main_item_text">Поддерживать и развивать инфраструктуру проектов (CDN, защита от DDoS, etc);</p>
                  <p class="vacancy_main_item_text">Администрирование удаленных серверов на Linux.</p>
                </div>
                <div class="vacancy_main_item">
                  <h3>Требования:</h3>
                  <p class="vacancy_main_item_text">Опыт работы с *nix системами, уверенное знание Linux;</p>
                  <p class="vacancy_main_item_text">Понимание механизма работы сетей (протоколы (в том числе видео), cdn, облака и т.д.);</p>
                  <p class="vacancy_main_item_text">Опыт работы с Nginx;</p>
                  <p class="vacancy_main_item_text">Опыт работы с Git;</p>
                  <p class="vacancy_main_item_text">Опыт работы с Docker Swarm;</p>
                  <p class="vacancy_main_item_text">Навыки программирования на скриптовых языках (bash/Python).</p>
                </div>
              </div>

              <p class="vacancy_text">Рабочая неделя 5/2 c началом рабочего дня (10:00 - 18:00 Мск)</p>
              <p class="vacancy_text">Мы находимся в Новороссийске, можем организовать встречу в офисе.</p>

              <h3>Ключевые навыки</h3>

              <div class="vacancy_skills">
                <div class="vacancy_skills_item">
                  CND
                </div>
                <div class="vacancy_skills_item">
                  DDoS
                </div>
                <div class="vacancy_skills_item">
                  Linux
                </div>
                <div class="vacancy_skills_item">
                  Nginx
                </div>
                <div class="vacancy_skills_item">
                  Docker Swarm
                </div>
                <div class="vacancy_skills_item">
                  Bash
                </div>
              </div>
              <button class="btn btn_gradient">Откликнуться</button>

            </div>

            <div class="vacancy">
              <div class="vacancy_header pb_15">
                <img src={icon} alt="Вакансия в компанию Crypto Emergency"></img>
                <span class="vacancy_title">React Native developer</span>
                <span class="vacancy_active">активно</span>
              </div>
              <p class="vacancy_text secondary_text">Требуемый опыт работы: 1–3 года.</p>
              <p class="vacancy_text secondary_text pb_15">Полная занятость, полный день.</p>
              <p class="vacancy_text">Работа исключительно в офисе.</p>
              <p class="vacancy_text">В данный момент ведется разработка нескольких крупных проектов.</p>

              <div class="vacancy_main">
                <div class="vacancy_main_item">
                  <h3>Обязанности:</h3>
                  <p class="vacancy_main_item_text">Разработка кросс платформенных приложений на React Native с нуля;</p>
                  <p class="vacancy_main_item_text">Поддержка и доработка существующий приложений;</p>
                  <p class="vacancy_main_item_text">Участие в оценке и планировании.</p>
                </div>
                <div class="vacancy_main_item">
                  <h3>Требования:</h3>
                  <p class="vacancy_main_item_text">Отличное знание React Native, его использование на коммерческих проектах;</p>
                  <p class="vacancy_main_item_text">Понимание концепции работы React Native и встраиваемых модулей;</p>
                  <p class="vacancy_main_item_text">Понимание концепции работы React Hooks;</p>
                  <p class="vacancy_main_item_text">Хорошие знания TypeScript;</p>
                  <p class="vacancy_main_item_text">Опыт работы Firebase;</p>
                  <p class="vacancy_main_item_text">Знание работы Xcode, Android Studio;</p>
                  <p class="vacancy_main_item_text">Наличие практического опыта работы с Google Play и App Store (включая подписи приложений, заливку и публикацию в сторы).</p>
                </div>
              </div>

              <p class="vacancy_text">Рабочая неделя 5/2 c началом рабочего дня (10:00 - 18:00 Мск)</p>
              <p class="vacancy_text">Мы находимся в Новороссийске, можем организовать встречу в офисе.</p>

              <h3>Ключевые навыки</h3>

              <div class="vacancy_skills">
                <div class="vacancy_skills_item">
                  React
                </div>
                <div class="vacancy_skills_item">
                  React Native
                </div>
                <div class="vacancy_skills_item">
                  TypeScript
                </div>
                <div class="vacancy_skills_item">
                  Firebase
                </div>
                <div class="vacancy_skills_item">
                  Xcode
                </div>
                <div class="vacancy_skills_item">
                  Android Studio
                </div>
                <div class="vacancy_skills_item">
                  Google Play
                </div>
                <div class="vacancy_skills_item">
                  App Store
                </div>
              </div>
              <button class="btn btn_gradient">Откликнуться</button>

            </div>

            <div class="vacancy">
              <div class="vacancy_header pb_15">
                <img src={icon} alt="Вакансия в компанию Crypto Emergency"></img>
                <span class="vacancy_title">Blockchain developer</span>
                <span class="vacancy_active">активно</span>
              </div>
              <p class="vacancy_text secondary_text">Требуемый опыт работы: 1–3 года.</p>
              <p class="vacancy_text secondary_text pb_15">Полная занятость, полный день.</p>
              <p class="vacancy_text">Работа исключительно в офисе.</p>
              <p class="vacancy_text">В данный момент ведется разработка нескольких крупных проектов.</p>

              <div class="vacancy_main">
                <div class="vacancy_main_item">
                  <h3>Обязанности:</h3>
                  <p class="vacancy_main_item_text">Участвовать в проектировании, разработке и внедрении блокчейн-проектов;</p>
                  <p class="vacancy_main_item_text">Разрабатывать, тестировать, анализировать смарт-контракты.</p>
                </div>
                <div class="vacancy_main_item">
                  <h3>Требования:</h3>
                  <p class="vacancy_main_item_text">Базовое понимание технологии blockchain;</p>
                  <p class="vacancy_main_item_text">Базовые знания blockchain-инфраструктуры (NFT-marketplace, DAO, DeFI, DEX, и пр);</p>
                  <p class="vacancy_main_item_text">Понимание Blockchain. Знание Solidity, hardhat, web3;</p>
                  <p class="vacancy_main_item_text">Умение читать и разрабатывать smart-контракты;</p>
                  <p class="vacancy_main_item_text">Опыт выпуска собственных токенов на Ethereum;</p>
                  <p class="vacancy_main_item_text">Будет плюсом опыт создания собственных монет;</p>
                  <p class="vacancy_main_item_text">Широкий технический кругозор (знание других языков программирования, инфраструктурных решений, бэкграунд в системном администрировании и DevOps);</p>
                  <p class="vacancy_main_item_text">Опыт разворачивания собственных нод и оракулов.</p>
                </div>
              </div>

              <p class="vacancy_text">Рабочая неделя 5/2 c началом рабочего дня (10:00 - 18:00 Мск)</p>
              <p class="vacancy_text">Мы находимся в Новороссийске, можем организовать встречу в офисе.</p>

              <h3>Ключевые навыки</h3>

              <div class="vacancy_skills">
                <div class="vacancy_skills_item">
                  Blockchain
                </div>
                <div class="vacancy_skills_item">
                  NFT
                </div>
                <div class="vacancy_skills_item">
                  DAO
                </div>
                <div class="vacancy_skills_item">
                  DeFi
                </div>
                <div class="vacancy_skills_item">
                  Xcode
                </div>
                <div class="vacancy_skills_item">
                  DEX
                </div>
                <div class="vacancy_skills_item">
                  Solidity
                </div>
                <div class="vacancy_skills_item">
                  Web3
                </div>
              </div>
              <button class="btn btn_gradient">Откликнуться</button>

            </div>

            <div class="vacancy">
              <div class="vacancy_header pb_15">
                <img src={icon} alt="Вакансия в компанию Crypto Emergency"></img>
                <span class="vacancy_title">SEO-специалист</span>
                <span class="vacancy_active">активно</span>
              </div>
              <p class="vacancy_text secondary_text">Требуемый опыт работы: 1–3 года.</p>
              <p class="vacancy_text secondary_text pb_15">Полная занятость, полный день.</p>
              <p class="vacancy_text">Работа исключительно в офисе.</p>
              <p class="vacancy_text">В данный момент ведется разработка нескольких крупных проектов.</p>

              <div class="vacancy_main">
                <div class="vacancy_main_item">
                  <h3>Обязанности:</h3>
                  <p class="vacancy_main_item_text">Работа с информационными статьями репутационного характера;</p>
                  <p class="vacancy_main_item_text">SEO-оптимизация сайтов;</p>
                  <p class="vacancy_main_item_text">Проработка поисковых подсказок;</p>
                  <p class="vacancy_main_item_text">Фиксация результатов поиска Яндекс и Google;</p>
                  <p class="vacancy_main_item_text">Анализ результатов поиска в системах Яндекс и Google по запросам;</p>
                  <p class="vacancy_main_item_text">Регулярный анализ динамики приоритетных запросов;</p>
                  <p class="vacancy_main_item_text">Подбор и анализ целевых запросов, составление семантического ядра;</p>
                  <p class="vacancy_main_item_text">Поиск новых способов продвижения сайта;</p>
                  <p class="vacancy_main_item_text">Создавать и публиковать уникальный и интересный контент в Instagram, Telegram, YouTube, ВКонтакте;</p>
                  <p class="vacancy_main_item_text">Оформление аккаунтов, ежедневный постинг, копирайтинг / рерайтинг. Посевы в пабликах;</p>
                  <p class="vacancy_main_item_text">Разработка и реализация стратегии SMM для привлечения аудитории, составление контент-плана.</p>
                </div>
                <div class="vacancy_main_item">
                  <h3>Требования:</h3>
                  <p class="vacancy_main_item_text">Хорошее знание принципов и факторов ранжирования в Яндекс и Google;</p>
                  <p class="vacancy_main_item_text">Умение работать с сервисами: ahrefs, topvisor, checktrust, Google Analytics, Яндекс Метрика и т. д.;</p>
                  <p class="vacancy_main_item_text">Умение работать в команде, работать с большими объемами информации, быстро принимать решения, воплощать их в жизнь и нести ответственность за результат;</p>
                  <p class="vacancy_main_item_text">Знаете что такое информационный стиль и пишите соответствующие тексты, без орфографических и пунктуационных ошибок;</p>
                  <p class="vacancy_main_item_text">Постоянно развиваетесь и готовы бесконечно совершенствовать аккаунты и контент.</p>
                </div>
              </div>

              <p class="vacancy_text">Рабочая неделя 5/2 c началом рабочего дня (10:00 - 18:00 Мск)</p>
              <p class="vacancy_text">Мы находимся в Новороссийске, можем организовать встречу в офисе.</p>

              <h3>Ключевые навыки</h3>

              <div class="vacancy_skills">
                <div class="vacancy_skills_item">
                  SEO
                </div>
                <div class="vacancy_skills_item">
                  Яндекс Метрика
                </div>
                <div class="vacancy_skills_item">
                  Google Analytics
                </div>
                <div class="vacancy_skills_item">
                  Checktrust
                </div>
                <div class="vacancy_skills_item">
                  Topvisor
                </div>
                <div class="vacancy_skills_item">
                  Ahrefs
                </div>
                <div class="vacancy_skills_item">
                  Instagram
                </div>
                <div class="vacancy_skills_item">
                  Telegram
                </div>
                <div class="vacancy_skills_item">
                  Youtube
                </div>
                <div class="vacancy_skills_item">
                  ВКонтакте
                </div>
                <div class="vacancy_skills_item">
                  Яндекс
                </div>
                <div class="vacancy_skills_item">
                  Google
                </div>
              </div>
              <button class="btn btn_gradient">Откликнуться</button>

            </div>

          </section>
          <h2 class="career_title">Ждём <span class="ttu">тебя</span> в нашей команде!</h2>
        </div>

      </div>
    </div>
  )
}