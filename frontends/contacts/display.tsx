import { Cemjsx } from "cemjs-all"

export const display = function () {
  return (
    <div class="page page__container">
      <div class="contacts">
        <div class="contacts__container">
          <h2 class="contacts__title">Контакты</h2>
          <div class="contacts__wrapper">
            <div class="contacts__content">
              <div class="contacts__form">
                <div class="contacts__form_wrapper">
                  <h4>Связь с нами</h4>
                  <p>Напишите нам, а мы с вами свяжемся!</p>
                  <form>
                    <div>
                      <label>Имя</label>
                      <div class="contacts__form_name">
                        <input type="text" placeholder="Введите ваше имя" />
                      </div>
                    </div>
                    <div>
                      <label>E-mail</label>
                      <div class="contacts__form_email">
                        <input type="text" placeholder="Введите ваше E-mail" />
                      </div>
                    </div>
                    <div>
                      <label>Сообщение</label>
                      <textarea type="text" placeholder="Введите ваше сообщение" />
                    </div>
                    <button class="button button_inactive" type="button">Отправить</button>
                  </form>
                </div>
              </div>
              <div class="contacts__info">
                <span class="contacts__info_label">Филиал в России:</span>
                <span class="contacts__info_text">г. Новороссийск​, ул.Набережная им. Адмирала Серебрякова, 27а, ​4 этаж, офис 39</span>
                <span class="contacts__info_label">Адрес:</span>
                <span class="contacts__info_text">Business address: Didzioji Str. 14-1, Vilnius, the Republic of Lithuania</span>
                <span class="contacts__info_label">E-mail:</span>
                <a href="mailto:support@crypto-emergency.com">
                  <span class="contacts__info_text">
                    support@crypto-emergency.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="contacts__donats">
            <a href="https://www.donationalerts.com/r/crypto_emergency" target="_blank">
              <img src={`/assets/svg/contacts/donation.svg`} alt="" idth="37" height="43" />
              <span>Поддержать проект</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}