import { Cemjsx } from "cemjs-all"
import logo from '@svg/logo.svg'

export const display = function () {
    return (
        <header class="header">
            <div class="header__container">
                <div class="header__inner">
                    <nav class="header__menu">
                        <a class="header__logo" href="">
                            <img src={logo} alt="Логотип." />
                        </a>
                        <a class="header__menu_link">Контакты</a>
                        <a class="header__menu_link">О нас</a>
                        <a class="header__menu_link">Новости</a>
                    </nav>
                    <div class="header__auth">
                        <div class="header__language">
                            <span>Русский</span>
                        </div>
                        <button type="button" class="header__auth_log">Вход</button>
                        <button type="button" class="header__auth_sign">
                            <span>Регистрация</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )

}