import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div class="footer__container">
            <div class="footer__nav">
                <a class="footer__nav_icon footer__nav_logo" href="/"></a>
                <a class="footer__nav_icon footer__nav_lenta" href="/lenta-users"
                    onclick={this.Fn.link}
                ></a>
                <a class="footer__nav_icon footer__nav_users" href="/users"
                    onclick={this.Fn.link}
                ></a>
                <a class="footer__nav_icon footer__nav_posts" href="#"></a>
                <a class="footer__nav_icon footer__nav_questions" href="/questions"
                    onclick={this.Fn.link}
                ></a>
                <a class="footer__nav_icon footer__nav_news" href="/news"
                    onclick={this.Fn.link}
                ></a>
                <a class="footer__nav_icon footer__nav_burger"
                    onclick={() => {
                        this.Fn.initOne({
                            name: "mainSettings", ifOpen: (front) => {
                                front.$el.childNodes[1].classList.remove("main-menu_active")
                                setTimeout(() => {
                                    front.clearData()
                                }, 500);
                            }
                        })
                    }}
                ></a>
            </div>
        </div>
    )
}