import { Cemjsx } from "cemjs-all"
import calendar from "@svg/events/calendar.png"
import map_point from "@svg/events/map_point.png"
import seach_magnifier from "@svg/events/seach_magnifier.svg"
import selector_arrow from "@svg/events/selector_arrow.svg"




export const display = function () {
  return (
    <div class="page events">
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

            <div>
              <button class="filter_date">
                <span>Дата</span>
                <img src={selector_arrow} alt="C"  />
              </button >
            </div>

            <div ref="country">    
              <button class="filter_country" /* country_filter */
              onclick={(e) => {
                this.Ref.countries_dropdown.classList.toggle("visible")
                this.Ref.event_list.classList.toggle("shadow")
                this.Ref.countrySelector_arrow.classList.toggle("rotate")
              }}
              >
                <span ref="choosen_country">Страна</span>
                <img src={selector_arrow} alt="C" ref="countrySelector_arrow"/>
              </button>
              <div class="countries_dropdown" ref="countries_dropdown"
              >
                <ul class="countries_dropdown_list" ref="countries_dropdown_list"
                onclick={(e) => {
                  this.Ref.choosen_country.innerText = e.target.innerText
                }}
                >
                  <li class="dropdown_list-item" data-value="rus">Россия</li>
                  <li class="dropdown_list-item" data-value="bel">Беларусь</li>
                  <li class="dropdown_list-item" data-value="bolg">Болгария</li>
                </ul>
              </div>
            </div>



            <div>
              <button class="filter_category"  /* category_filter */
              onclick={(e) => {
                this.Ref.category_dropdown.classList.toggle("visible")
                this.Ref.event_list.classList.toggle("shadow")
                this.Ref.categorySelector_arrow.classList.toggle("rotate")
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
                  <li class="dropdown_list-item" data-value="rus">IT</li>
                  <li class="dropdown_list-item" data-value="turk">Crypto</li>
                  <li class="dropdown_list-item" data-value="eng">что-то еще</li>
                </ul>
              </div>
            </div>

            

            <div>
              <button class="search"
              
              >
                <img src={seach_magnifier} alt="C" />
                <input type="search" name="input" value="Поиск" ref='search_field'
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
                <button>Купить билет</button>
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
                  Russia
                </div>
                <button>Купить билет</button>
                <span>12.12.2023</span>
              </div>
            </div>
             
          </div>
        </section>
      </div>
    </div>
  )
}