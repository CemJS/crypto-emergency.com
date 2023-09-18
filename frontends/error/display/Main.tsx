import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        // <main class="error-page ">
        //     <div class="wrapper">
        //         <div class="error-page_main">
        //             <h2>Страница не найдена</h2>
        //             <h1>ERROR 404</h1>
        //             <p>Вернитесь на главную страницу</p>
        //         </div>
        //         <div class="error-page_home_button">
        //             <a href="">
        //                 <button class="home" type="button"
        //                 >
        //                     <span>На главную</span>
        //                 </button>
        //             </a>
        //         </div>
        //     </div>
        // </main>
        <div class="error_wrap">
            <p class="error_text">Страница не найдена</p>
            <h1 class="error_title">Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={this.Fn.link}
                class="btn btn_timing"
            >
                <span>На главную</span>
            </a>
        </div>
    )
}