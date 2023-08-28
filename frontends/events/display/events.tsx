import { Cemjsx } from "cemjs-all"
import calendar from "@svg/events/calendar.png"
import map_point from "@svg/events/map_point.png"
import seach_magnifier from "@svg/events/seach_magnifier.svg"
import selector_arrow from "@svg/events/selector_arrow.svg"
import test from "@images/events/test.jpg"
import test2 from "@images/events/test2.png"
import back from '@svg/icon/prev.svg'
import next from '@svg/icon/next.svg'
export default function () {
  // console.log('=records внутри html=',this.Static.records)


  return (
    <div class="events">
      <div class="wrapper">
        <h1>Мероприятия</h1>
        {/* next */}
        <div class = 'buttonsEvents'>
          <button ref='next' class ="nextBtnEvents"
            onclick={() => {
              let gap;
              let slidesNum = this.Ref.slider_container.children.length 
              
              
              if(this.Ref.banners_section.offsetWidth <= 545){
                this.Static.maxSlidesPerShift = 1;
                gap = 19

              }else if(this.Ref.banners_section.offsetWidth <= 800){
                this.Static.maxSlidesPerShift = 2;
                gap = 19
              }else if(this.Ref.banners_section.offsetWidth <= 960){
                this.Static.maxSlidesPerShift = 3;
                gap = 16
              }else{
                this.Static.maxSlidesPerShift = 4;
                gap = 16
              }
              let itemWidth = this.Ref.slide.offsetWidth + gap
              let maxWidth =  slidesNum * itemWidth
              if (this.Ref.slider_container.scrollLeft < maxWidth) {
                  this.Ref.slider_container.scrollLeft += itemWidth;
                 
              } 
            }}
            >
              <img src={next} alt="" />
          </button>
          <button ref='back' class ="prevBtnEvents"
            onclick={() => {
              let gap;
              
              if(this.Ref.banners_section.offsetWidth <= 545){
                gap = 19
              }else if(this.Ref.banners_section.offsetWidth <= 768){
                gap = 19
              }else if(this.Ref.banners_section.offsetWidth <= 933){
                this.Static.maxSlidesPerShift = 3;
                gap = 16
              }else{
                this.Static.maxSlidesPerShift = 4;
                gap = 16
              }


              let itemWidth = this.Ref.slide.offsetWidth + gap
              if (this.Ref.slider_container.scrollLeft > 0) {
                this.Ref.slider_container.scrollLeft -= itemWidth ;
            } 
            }}
            >
              <img src={back} alt="" />
          </button>
        
          <section class="banners_section" ref ='banners_section'>
            <div class = 'slider-container' ref='slider_container'
            onmousedown={(e) => {
              this.Static.isDragging = true;
              this.Static.startX = e.pageX;
              this.Static.startScrollLeft = this.Ref.slider_container.scrollLeft
            }}

            onmousemove={(e) => {
              if (!this.Static.isDragging) return;
              // console.log('=ab8faf=',e.pageX - this.Static.startX)
              e.preventDefault();
              this.Ref.slider_container.scrollLeft = this.Static.startScrollLeft - (e.pageX - this.Static.startX);
              // console.log('=scrollLeft=',this.Ref.slider_container.scrollLeft)
            }}

            onmouseup={() => {
              this.Static.isDragging = false;
            }}
            >
              <div>
                <img src={test} alt="" onclick={()=>{
                  this.Static.record = this.Static.filtredRecords[0]
                }}/>
              </div>
              <div ref = 'slide'><img src={test2} alt=""/></div>
              <div ref = 'slide'><img src={test} alt=""/></div>
              <div ref = 'slide'><img src={test2} alt=""/></div>
              <div ref = 'slide'><img src={test} alt=""/></div>
              <div ref = 'slide'><img src={test} alt=""/></div>
              <div ref = 'slide'><img src={test} alt=""/></div>
              <div ref = 'slide'><img src={test} alt=""/></div>
              <div ref = 'slide'><img src={test2} alt=""/></div>
              
            </div>
            
          </section>
        </div>
        <section class="events_section">
          <div class="events_section_filters">

            <div class="date_area">
              <button class="filter_date" ref = 'date_area'
                onclick={(e) => {
                  if(this.Static.calendarDropdownStatus == 'close'){

                    this.Static.calendarDropdownStatus = 'open'
                    this.Ref.calendarDropdown.classList.add("visible")
                    this.Ref.event_list.classList.add("shadow")
                    this.Ref.calendarDropdown_arrow.classList.add("rotate")

                    this.fn('calendarRender')
                    this.Ref.days.innerHTML = this.Static.liTag 
                    this.Static.liTag = ''
                    this.Ref.current_date.innerText = this.Static.currentDate
                  }else if(this.Static.calendarDropdownStatus == 'open' ){
                    this.Static.calendarDropdownStatus = 'close'

                    this.Ref.calendarDropdown.classList.remove("visible")
                    this.Ref.event_list.classList.remove("shadow")
                    this.Ref.calendarDropdown_arrow.classList.remove("rotate")
                  }
                }}
              >
                <span>Дата</span>
                <img src={selector_arrow} alt="C" ref = 'calendarDropdown_arrow' />
              </button >
            
            <div class="calendar" ref ='calendarDropdown'>
            <div class='cal_header' >
              <div class='icons'
              onclick={() => {
                
                
                this.Static.liTag = ''
                this.Static.currentMonth--
                this.fn('calendarRender')
                this.Ref.days.innerHTML = this.Static.liTag 
                this.Ref.current_date.innerText = this.Static.currentDate
                this.init()
              }}
              >
                <img src={back} alt="" id="prev" class="material-symbols-rounded" />
              </div>
              <p class="current-date" ref ='current_date'></p>
              <div class="icons"
              onclick={() => {
                this.Static.liTag = ''
                this.Static.currentMonth++
                this.fn('calendarRender')
                this.Ref.days.innerHTML = this.Static.liTag 
                this.Ref.current_date.innerText = this.Static.currentDate
                this.init()


              }}
              >
                <img src={next} alt="" id="next" class="material-symbols-rounded" />
              </div>
            </div>
              <ul class="weeks">
                <li>Пн</li>
                <li>Вт</li>
                <li>Ср</li>
                <li>Чт</li>
                <li>Пт</li>
                <li>Сб</li>
                <li>Вс</li>
              </ul>
              <ul class="days" ref='days'>
                
              </ul>
            </div>
            </div>
            <div  class="country_area">    
              <button class="filter_country" ref="country_area"
              onclick={(e) => {
                if(this.Static.countrySelectorStatus == 'close'){
                  this.fn("getUniqueArrayByField",this.Static.records, 'country' )
                  
                  this.Static.searchCountries = this.Static.uniqueCountries
                  this.Static.countrySelectorStatus = 'open'
                  this.Ref.country_search_field.focus();
                  this.Ref.countries_dropdown.classList.add("visible")
                  this.Ref.event_list.classList.add("shadow")
                  this.Ref.countrySelector_arrow.classList.add("rotate")
                }else if(this.Static.countrySelectorStatus == 'open' && !this.Ref.country_search_field.contains(e.target)){
                  this.Static.countrySelectorStatus = 'close'
                  this.Ref.countries_dropdown.classList.remove("visible")
                  this.Ref.event_list.classList.remove("shadow")
                  this.Ref.countrySelector_arrow.classList.remove("rotate")
                }
              }}
              >
                <input type="search" name="input" placeholder="Страна" ref='country_search_field'
                oninput={(e) => {
                  this.Static.searchCountries = this.Static.uniqueCountries.filter((item) => {
                    
                  if (item.toLowerCase().includes(e.target.value.toLowerCase())) {
                    // console.log('=item=',item)
                    this.Ref.countries_dropdown.classList.add("visible")
                    // console.log('=searchCountries=',this.Static.searchCountries, this.Static.uniqueCountries)
                    // this.init()
                    return true
                  }else{
                    // console.log('=723725=',"Переменная")
                    this.Ref.countries_dropdown.classList.remove("visible")
                  }

                })
                  this.init()
                }}
                />
                <img src={selector_arrow} alt="selector_arrow" ref="countrySelector_arrow"
                />
              </button>
              <div class="countries_dropdown" ref="countries_dropdown"
              >
                <ul class="countries_dropdown_list" ref="countries_dropdown_list"
                onclick={(e) => {
                  if (e.target.innerText == "Все страны") {
                    this.Static.makeFilter.country = ""
                    this.Ref.country_search_field.value = ""
                  } else {
                    this.Ref.country_search_field.value = e.target.innerText
                    this.Static.makeFilter.country = e.target.innerText
                  }
                  this.fn("addEvent", this.Static.makeFilter)
                  this.init()
                }}
                >
                  {
                   this.Static.searchCountries.map((item, index) => {
                    // console.log('=91d82b=', this.Static.searchCountries[index])
                      return (
                        <li class="dropdown_list-item" ref='drop_item' >{this.Static.searchCountries[index]}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div class="category_area" ref='div_area'>
              <button class="filter_category"  ref="category_area"
              onclick={(e) => {
                if(this.Static.categorySelectorStatus == 'close'){
                  this.fn("getUniqueArrayByField",this.Static.records, 'category' )
                  this.Static.categorySelectorStatus = 'open'
                  this.Ref.category_dropdown.classList.add("visible")
                  this.Ref.event_list.classList.add("shadow")
                  this.Ref.categorySelector_arrow.classList.add("rotate")
                }else if(this.Static.categorySelectorStatus == 'open' ){
                  this.Static.categorySelectorStatus = 'close'
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
                  if (e.target.innerText == "Все категории") {
                    this.Static.makeFilter.cat = ""
                    this.Ref.choosen_category.innerText = 'Категория'
                  } else {
                    this.Ref.choosen_category.innerText = e.target.innerText
                    // console.log('=3e0d37=',e.target.innerText)
                    this.Static.makeFilter.cat = e.target.innerText
                  }
                  
                  this.fn("addEvent", this.Static.makeFilter)

                  
                  this.init()
                }}
                >
                 {
                    this.Static.uniqueCategories.map((item, index) => {
                      return (
                        <li class="dropdown_list-item" data-value="">{item}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>



            <div class='search_area'>
              <button class="search"
              onclick={(e) => {
                this.Ref.search_field.focus()
              }}
              >
                <img src={seach_magnifier} alt="magnifier" />
                <input type="search" name="input" ref='search_field' placeholder="Поиск"
                 oninput={(e) => {
                  this.Static.filtredRecords = this.Static.records.filter((item) => {
                  if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return true
                  }})
                  this.init()
                }}
                />
              </button>
            </div>
          </div>
            
          <div class="events_section_list" ref="event_list">
                {/* {
                  this.Static.records
                  ?
                  this.Static.records.map((item, index)=>{
              
                    return(
                      <div class="events_section_list_item">
                        
                    <div class="item_header">
                      <div class="picture">
                        <div class='category-events'>
                          {item.category}
                        </div>
                        <img src={test} alt="img"/>
                        <div class="location">
                          <img src={map_point} alt="L" />
                          <span>{item.country}</span>
                        </div>
                        <div class='date'>
                          <img src={calendar} alt="C" />
                          <span>{this.Services.functions.dateFormat(item.date, 'event')}</span>
                        </div>
                      </div>
                      <div class="content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div class="item_footer">
                      <div class="location">
                        <img src={map_point} alt="L" />
                        <span>{item.country}</span>
                      </div>
                      <div class='date'>
                        <img src={calendar} alt="C" />
                        <span>{this.Services.functions.dateFormat(item.date, 'event')}</span>
                      </div>
                      <button class='buy_btn'>Купить билет</button>
                      
                    </div>
                  </div>
                  
                  )
                })
                  :
<div>На это место можно поставить лоадер пока не подтянулись данные</div>

                } */}


          {
            (this.Static.filtredRecords || []).map((item, index)=>{
              
              return(
                <div class="events_section_list_item">
                  
              <div class="item_header">
                <div class="picture">
                  <div class='category-events'>
                    {item.category}
                  </div>
                  <img src={test} alt="img"/>
                  <div class="location">
                    <img src={map_point} alt="L" />
                    <span>{item.country}</span>
                  </div>
                  <div class='date'>
                    <img src={calendar} alt="C" />
                    <span>{this.Services.functions.dateFormat(item.date, 'event')}</span>
                  </div>
                </div>
                <div class="content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
              <div class="item_footer">
                <div class="location">
                  <img src={map_point} alt="L" />
                  <span>{item.country}</span>
                </div>
                <div class='date'>
                  <img src={calendar} alt="C" />
                  <span>{this.Services.functions.dateFormat(item.date, 'event')}</span>
                </div>
                <button class='buy_btn' 
                onclick={()=>{
                  this.Static.record = this.Static.filtredRecords[index]
                }}
                >Купить билет</button>
                
              </div>
            </div>
            
            )
          })
          }
            
          </div>
        </section>
        <section class ='map_section'>
          <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A62ee2ecd2ced487e68361142a1a2f66ad2aacb959575639bbd688f5881477488&amp;width=100%25&amp;height=619&amp;lang=ru_RU&amp;scroll=true"></script>
        </section>
      </div>
    </div>
  )
}