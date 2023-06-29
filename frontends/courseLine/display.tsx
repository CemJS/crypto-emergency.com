import { Cemjsx } from "cemjs-all"

const courses = [
  {
    name: "btc",
    price: "7.85"
  },
  {
    name: "eth",
    price: "67"
  },
  {
    name: "bnb",
    price: "9.9"
  },
  {
    name: "cem",
    price: "2.2"
  },
];

export const display = function () {
  return (
    <div class="line line-wrap" style="padding-top: 100px">
      <div class="line__track">
        {
          courses && Object.keys(courses).length
            ?
            Object.keys(courses)
              .filter(
                (item) =>
                  typeof courses[item] == "object"
              )
              .map(function (key) {
                let course = courses[key];
                console.log('=8a7f75=', course)
                return (
                  <div class="line__item">
                    <div class="line__item_img">
                      <img src={`/assets/svg/coins/${course.name}2.svg`}></img>
                      {/* <img src={import(`@svg/coins/${course.name}2.svg`)} ></img> */}
                    </div>
                    <span class="line-text mr--10">{course.price + "/USDT"}</span>
                  </div>
                )
              })
            :
            null
        }
      </div>
      <div class="line__track">
        {
          courses && Object.keys(courses).length
            ?
            Object.keys(courses)
              .filter(
                (item) =>
                  typeof courses[item] == "object"
              )
              .map(function (key) {
                let course = courses[key];
                console.log('=8a7f75=', course)
                return (
                  <div class="line__item">
                    <div class="line-item_img">
                      <img src={`/assets/svg/coins/${course.name}2.svg`}></img>
                      {/* <img src={import(`@svg/coins/${course.name}2.svg`)} ></img> */}
                    </div>
                    <span class="line-text mr--10">{course.price + "/USDT"}</span>
                  </div>
                )
              })
            :
            null
        }
      </div>
      <div class="line__track">
        {
          courses && Object.keys(courses).length
            ?
            Object.keys(courses)
              .filter(
                (item) =>
                  typeof courses[item] == "object"
              )
              .map(function (key) {
                let course = courses[key];
                console.log('=8a7f75=', course)
                return (
                  <div class="line__item">
                    <div class="line-item_img">
                      <img src={`/assets/svg/coins/${course.name}2.svg`}></img>
                      {/* <img src={import(`@svg/coins/${course.name}2.svg`)} ></img> */}
                    </div>
                    <span class="line-text mr--10">{course.price + "/USDT"}</span>
                  </div>
                )
              })
            :
            null
        }
      </div>
    </div>
  )

}