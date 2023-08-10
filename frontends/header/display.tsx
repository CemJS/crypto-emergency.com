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
							<img src="./assets/svg/header/logo.svg" alt="Логотип." />
						</a>
						<a class="header__menu_link"
							href="/contacts"
							onclick={(e) => {
								this.Fn.link(e)
							}}
						>Контакты</a>
						<a class="header__menu_link"
							href="/about"
							onclick={(e) => {
								let language = "en"
								if (this.Variable.lang._data.code == "en") {
									language = "ru"
								}
								localStorage.setItem('lang', language)
								this.Variable.lang = this.Variable.languages[language]
								this.Variable.lang._data = { code: language }

								this.Fn.link(e)
							}}
						>{this.Variable.lang.test}</a>
						<a class="header__menu_link"
							href="/news"
							onclick={this.Fn.link}
						>Новости</a>
					</nav>
					<div class="header__auth">
						<div class="header__language"
							onclick={() => {
								this.Fn.initOne({
									name: "mainLanguage", ifOpen: (front) => {
										setTimeout(() => {
											front.clearData()
										}, 500);
									}
								})
							}}
						>
							<span>Русский</span>
						</div>
						<button class="header__auth_log" type="button"
							onclick={() => {
								this.Fn.initOne({
									name: "modalAuthorization", ifOpen: (front) => {
										setTimeout(() => {
											front.clearData()
										}, 500);
									}
								})
							}}
						>Вход</button>
						<button class="header__auth_sign" type="button"
							onclick={() => {
								this.Fn.initOne({
									name: "modalRegistration", ifOpen: (front) => {
										setTimeout(() => {
											front.clearData()
										}, 500);
									}
								})
							}}
						>
							<span>Регистрация</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	)

}