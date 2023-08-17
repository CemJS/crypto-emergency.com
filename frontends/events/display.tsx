import { Cemjsx } from "cemjs-all"
import calendar from "@svg/events/calendar.png"
import map_point from "@svg/events/map_point.png"
import seach_magnifier from "@svg/events/seach_magnifier.svg"
import selector_arrow from "@svg/events/selector_arrow.svg"


let likeDBArray = [
  {
    tiltle: 'Some Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo?',
    country: 'Россия',
    date: '12.12.2023'

  },
  {
    tiltle: 'Some Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo?',
    country: 'Беларусь',
    date: '18.09.2023'

  },
]

export const display = function () {
  return (
    <div class="page events"
    >
      <div class="wrapper">
        <h1>Мероприятия</h1>
        <section class="banners_section">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <section class="events_section">
          <div class="events_section_filters">

            <div class="date_area">
              <button class="filter_date">
                <span>Дата</span>
                <img src={selector_arrow} alt="C"  />
              </button >
            </div>

            <div  class="country_area">    
              <button class="filter_country" ref="country_area"
              onclick={(e) => {
                if(this.Static.countrySelectorStatus == 'close'){
                  console.log('=1af3f3=','Кнопка страна открыть')
                  this.Static.countrySelectorStatus = 'open'
                  this.Ref.countries_dropdown.classList.add("visible")
                  this.Ref.event_list.classList.add("shadow")
                  this.Ref.countrySelector_arrow.classList.add("rotate")
                  this.Ref.magnifier.classList.add("visible")
                }else if(this.Static.countrySelectorStatus == 'open'){
                  console.log('=5c9ad6=','Кнопка страна закрыть')
                  this.Static.countrySelectorStatus = 'close'
                  this.Ref.countries_dropdown.classList.remove("visible")
                  this.Ref.event_list.classList.remove("shadow")
                  this.Ref.countrySelector_arrow.classList.remove("rotate")
                  this.Ref.magnifier.classList.remove("visible")
                }
              }}
              >
                <img src={seach_magnifier} alt="magnifier" ref='magnifier' class="filter_country_magnifier" />
                <input type="search" name="input" size='9' placeholder="Страна" ref='country_search_field'/>
                <img src={selector_arrow} alt="selector_arrow" ref="countrySelector_arrow"
                />
              </button>
              <div class="countries_dropdown" ref="countries_dropdown"
              >
                <ul class="countries_dropdown_list" ref="countries_dropdown_list"
                onclick={(e) => {
                  this.Ref.country_search_field.value = e.target.innerText
                }}
                >
                   {
                    likeDBArray.map((item, index) => {
                      return (
                        <li class="dropdown_list-item" ref='drop_item' data-value="rus">{item.country}</li>
                      )
                })
              }
                </ul>
              </div>
            </div>



            <div class="category_area" ref='div_area'>
              <button class="filter_category"  ref="category_area"
              onclick={(e) => {
                if(this.Static.catergorySelectorStatus == 'close'){
                  this.Static.catergorySelectorStatus = 'open'
                  this.Ref.category_dropdown.classList.add("visible")
                  this.Ref.event_list.classList.add("shadow")
                  this.Ref.categorySelector_arrow.classList.add("rotate")
                }else if(this.Static.catergorySelectorStatus == 'open' ){
                  this.Static.catergorySelectorStatus = 'close'
                  this.Ref.category_dropdown.classList.remove("visible")
                  this.Ref.event_list.classList.remove("shadow")
                  this.Ref.categorySelector_arrow.classList.remove("rotate")
                }
                
              }}
              >
                <span ref='choosen_category'>Категория</span>
                <img src={selector_arrow} alt="C" ref='categorySelector_arrow' />
              </button>
              <div class="category_dropdown" ref="category_dropdown">
                <ul class="category_dropdown_list" ref='category_dropdown_list'
                onclick={(e) => {
                  this.Ref.choosen_category.innerText = e.target.innerText
                }}
                >
                  <li class="dropdown_list-item" data-value="">IT</li>
                  <li class="dropdown_list-item" data-value="">Crypto</li>
                  <li class="dropdown_list-item" data-value="">что-то еще</li>
                </ul>
              </div>
            </div>



            <div class='search_area'>
              <button class="search"
              >
                <img src={seach_magnifier} alt="magnifier" />
                <input type="search" name="input" size='25' value="Поиск" ref='search_field'
                onfocus={() => {
                  if (this.Ref.search_field.value === 'Поиск') {
                    this.Ref.search_field.value = ''; 
                  }
                  }}
                onblur={() => {
                  if (this.Ref.search_field.value === '') {
                    this.Ref.search_field.value = 'Поиск'; 
                  }
                  }}
                />
              </button>
            </div>
          </div>

          <div class="events_section_list" ref="event_list">
            <div class="events_section_list_item">
              <div class="item_header">
                <div class="picture"><img src="" alt="img" /></div>
                <div class="content">
                  <h4>Some Title</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo?</p>
                </div>
              </div>
              <div class="item_footer">
                <div class="location">
                  <img src={map_point} alt="L" />
                  <span>Russia</span>
                </div>
                <button class='buy_btn'>Купить билет</button>
                <div class='date'>
                  <img src={calendar} alt="C" />
                  <span>12.12.2023</span>
                </div>
              </div>
            </div>
            <div class="events_section_list_item">
              <div class="item_header">
                <div class="picture"><img src="" alt="img" /></div>
                <div class="content">
                  <h4>Some Title</h4>
                  <p>ipsum dolor sit amet consectetur adipisicing elit. Molestiae, unde!adipisicing elit. Ullam, nemo?</p>
                </div>
              </div>
              <div class="item_footer">
                <div class="location">
                  <img src={map_point} alt="L" />
                  <span>Russia</span>
                </div>
                <button class='buy_btn'>Купить билет</button>
                <div class='date'>
                  <img src={calendar} alt="C" />
                  <span>12.09.2023</span>
                </div>
              </div>
            </div>
             
          </div>
        </section>
      </div>
    </div>
  )
}