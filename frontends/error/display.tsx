import { Cemjsx } from "cemjs-all"



export const display = function () {
    return (

      <main class="error-page ">
          <div class="wrapper">
            <div class="error-page_main">
              <h2>Страница не найдена</h2>
              <h1>ERROR 404</h1>
              <p>Вернитесь на главную страницу</p>
            </div>
            <div class="error-page_home_button">
              <a href="">
                <button class="home" type="button"
                  >
                  <span>На главную</span>
                </button>
              </a>
            </div>
          </div>
      </main>
    )
}