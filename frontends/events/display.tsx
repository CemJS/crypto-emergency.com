import { Cemjsx } from "cemjs-all"
import calendar from "@svg/events/calendar.png"
import map_point from "@svg/events/map_point.png"
import seach_magnifier from "@svg/events/seach_magnifier.svg"
import selector_arrow from "@svg/events/selector_arrow.svg"
import test from "@images/events/test.jpg"
import test2 from "@images/events/test2.png"
import back from '@svg/icon/prev.svg'
import next from '@svg/icon/next.svg'
export const display = function () {
  
  return (
    <div class="page events"
    >
      <div class="wrapper">
        <h1>Мероприятия</h1>
        {/* next */}
        <div class = 'buttonsEvents'>
          <button ref='next' class ="nextBtnEvents"
            onclick={() => {
              let gap;
              let slidesNum = this.Ref.slider_container.children.length 
              
              
              // console.log('=sliderWidth=',sliderWidth)
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
              if (this.Static.currentSlide < slidesNum - this.Static.maxSlidesPerShift) {
                this.Static.currentSlide++;
                this.Ref.slider_container.scrollLeft += this.Static.currentSlide * itemWidth;
                console.log(this.Ref.banners_section.offsetWidth)
                console.log('=itemWidth=',itemWidth)
                // console.log('=banners_section=',this.Ref.banners_section.offsetWidth)
                
            } 

            this.Ref.slider_container.style.transform = `translateX(-${this.Static.currentSlide * itemWidth}px)`;
            console.log('=Ref.slider_container.style.style=',this.Ref.slider_container.style.gap) 
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
              
              if (this.Static.currentSlide > 0) {
                this.Static.currentSlide--;
                console.log(this.Static.currentSlide)
            }
            let itemWidth = this.Ref.slide.offsetWidth + gap
            this.Ref.slider_container.style.transform = `translateX(-${this.Static.currentSlide * itemWidth}px)`;
            }}
            >
              <img src={back} alt="" />
          </button>
        
          <section class="banners_section" ref ='banners_section'>
            <div class = 'slider-container' ref='slider_container'>
              <div>
                <img src={test} alt=""/>
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
              <button class="filter_date">
                <span>Дата</span>
                <img src={selector_arrow} alt="C"  />
              </button >
            </div>
              
            <div  class="country_area">    
              <button class="filter_country" ref="country_area"
              onclick={(e) => {
                if(this.Static.countrySelectorStatus == 'close'){
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
                {/* <img src={seach_magnifier} alt="magnifier" ref='magnifier' class="filter_country_magnifier" /> */}
                <input type="search" name="input" placeholder="Страна" ref='country_search_field'
                oninput={(e) => {
                  this.Static.seachCountries = this.Static.uniqueCountries.filter((item) => {
                  if (item.toLowerCase().includes(e.target.value.toLowerCase())) {
                    this.Ref.countries_dropdown.classList.add("visible")
                    return true
                  }else{
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
                   this.Static.seachCountries.map((item, index) => {
                      return (
                        <li class="dropdown_list-item" ref='drop_item' data-value="rus">{item}</li>
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
                  if (e.target.innerText == "Все категории") {
                    this.Static.makeFilter.cat = ""
                    this.Ref.choosen_category.innerText = 'Категория'
                  } else {
                    this.Ref.choosen_category.innerText = e.target.innerText
                    this.Static.makeFilter.cat = e.target.innerText
                  }
                  
                  this.fn("addEvent", this.Static.makeFilter)

                  
                  this.init()
                  console.log('=75dbcb=',this.Static.filtredRecords)
                }}
                >
                 {
                    this.Static.classObject.getUniqueArrayByField('category').map((item, index) => {
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
          {
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
          }
            
          </div>
        </section>
      </div>
    </div>
  )
}