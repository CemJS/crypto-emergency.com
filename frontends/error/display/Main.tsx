import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div class="error_wrap">
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title">Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a class="btn btn_timing" href="/" onclick={this.Fn.link}>
                <span>На главную</span>
            </a>
        </div>
    )
}