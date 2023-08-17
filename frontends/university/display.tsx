import { Cemjsx } from "cemjs-all"
import logo from '@svg/university/logo.svg'

export const display = function () {
  return (
    <div class="page">
      <div class="university">
        <div class="wrapper">
          <div class="university__container">
            <div class="university__header">
              <div class="university__header_title">
                <img src={logo} />
                <p>Крипто университет</p>
              </div>
              <button class="university__header_courses btn btn_gradient">
                <span>Все курсы</span>
              </button>
            </div>
            <div class="university__slogan">
              <h3>Откройте новые горизонты с Крипто университетом: образование, инновации, успех!</h3>
            </div>
            <div class="university__category university-category">
              {
                this.Static.records?.map((item) => {
                  return (
                    <a class="university-category__item">
                      <div class="university-category__item_title">
                        {item.name}
                        <p class="subtitle">{item.title}</p>
                      </div>
                      <img class="university-category__item_image" src={`/assets/upload/worldPress/${item.background}`} />
                      <p class="description">{item.description}</p>
                    </a>
                  )
                })
              }
            </div>
            <div class="university__test">
              <div class="university__test_container">
                <div class="university__test_title">
                Узнай, какая профессия наиболее подходит именно тебе, с помощью нашего теста на профориентацию
                </div>
                <img src="" />
                <div class="university__test_button">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}