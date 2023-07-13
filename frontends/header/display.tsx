import { Cemjsx } from "cemjs-all"
import logo from '@svg/logo.svg'

export const display = function () {
	return (
		<header class="header">
			<div class="header__container">
				<div class="header__inner">
					<nav class="header__menu">
						<a class="header__logo" href="/"
							onclick={this.Fn.link}
						>
							<img src={logo} alt="Логотип." />
						</a>
						<a class="header__menu_link"
							href="/contacts"
							onclick={this.Fn.link}
						>Контакты</a>
						<a class="header__menu_link"
							href="/about"
							onclick={this.Fn.link}
						>О нас</a>
						<a class="header__menu_link">Новости</a>
					</nav>
					<div class="header__auth">
						<div class="header__language"
							onclick={() => {
								this.Fn.initOne({
									name: "mainLanguage", ifOpen: (front) => {
										// console.log('=9e3bb6=', front)
										setTimeout(() => {
											front.clearData()
										}, 500);
									}
								})
							}}
						>
							<span>Русский</span>
						</div>
						<button class="header__auth_log" type="button">Вход</button>
						<button class="header__auth_sign" type="button">
							<span>Регистрация</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	)

}