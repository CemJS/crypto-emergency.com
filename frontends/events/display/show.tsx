import { Cemjsx } from "cemjs-all"
import calendar from "@svg/events/calendar.png"
import map_point from "@svg/events/map_point.png"
import seach_magnifier from "@svg/events/seach_magnifier.svg"
import selector_arrow from "@svg/events/selector_arrow.svg"
import test from "@images/events/test.jpg"
import test2 from "@images/events/test2.png"
import back from '@svg/icon/prev.svg'
import next from '@svg/icon/next.svg'
import nav_arrow from "@svg/events/show/nav_arrow.svg"

export default function () {
//   console.log('=showPage=',this.Static.record)
  
      return (
        <div class="event">
            <div class="wrapper">
                <div class='returnBtn'>
                    <img src={nav_arrow} alt="" />
                    <span>Назад</span>
                </div>
            <section class = 'section_about'>
                <div class ='picture_button'>
                    <div class = 'picture'>
                        <img src={test} alt="" />
                        <div class='location'>{this.Static.record.country}</div>
                        <div class='date'>{this.Services.functions.dateFormat(this.Static.record.date, 'eventddmm')}</div>
                    </div>
                    <button>Купить</button>
                </div>
                <div class = 'text_about'>
                    <div class='title'>{this.Static.record.title}</div>
                    <div class = 'description'>
                        <p>{this.Static.record.description}</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, tenetur dicta! Libero esse sint omnis, incidunt aliquid deserunt dolorum rerum.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga provident perferendis facilis eius. Nemo, ducimus.</p>
                    </div>
                </div>
            </section>
            <section class = 'section_gallery'>
                <h1>Галерея</h1>
                <div class = 'buttonsEvents'>
                <button ref='next' class ="nextBtnEvents"
                    onclick={() => {
                    let gap = 16
                    let slidesNum = this.Ref.gallery_container.children.length
                    let itemWidth = this.Ref.gallery_container_slide.offsetWidth + gap
                    let maxWidth =  slidesNum * itemWidth
                    if (this.Ref.gallery_container.scrollLeft < maxWidth) {
                        this.Ref.gallery_container.scrollLeft += itemWidth ;
                    } 
                    console.log('=slidesNum=',maxWidth)
                    console.log('=itemWidth=',itemWidth)
                    }}


                    
                >
                    <img src={next} alt="" />
                </button>
                <button ref='back' class ="prevBtnEvents"
                    onclick={() => {
                    let gap = 16
                    let itemWidth = this.Ref.gallery_container_slide.offsetWidth + gap
                    
                    if (this.Ref.gallery_container.scrollLeft > 0) {
                        this.Ref.gallery_container.scrollLeft -= itemWidth ;
                    } 
                    }}
                >
                    <img src={back} alt="" />
                </button>
                <div class='slider-hidden'>
                <div class='gallery-container' ref='gallery_container'
                
                    
                
                onmousedown={(e) => {
                    this.Static.isDragging = true;
                    this.Static.startX = e.pageX;
                    this.Static.startScrollLeft = this.Ref.gallery_container.scrollLeft
                  }}

                  onmousemove={(e) => {
                    if (!this.Static.isDragging) return;
                    // console.log('=ab8faf=',e.pageX - this.Static.startX)
                    e.preventDefault();
                    this.Ref.gallery_container.scrollLeft = this.Static.startScrollLeft - (e.pageX - this.Static.startX);
                    console.log('=scrollLeft=',this.Ref.gallery_container.scrollLeft)
                  }}

                  onmouseup={() => {
                    this.Static.isDragging = false;
                  }}

                //   ontouchstart={(e) => {
                //     console.log('=d004e1=', e)
                //     const firstTouch = e.touches[0];
                //     this.Static.x1 = firstTouch.clientX;
                //     this.Static.y1 = firstTouch.clientY;
                //   }}

                //   ontouchmove={(e) => {
                //     if (!this.Static.x1 || !this.Static.y1) return false;
                //     let x2 = e.touches[0].clientX;
                //     let y2 = e.touches[0].clientY;
                //     let xDiff = x2 - this.Static.x1;
                //     let yDiff = y2 - this.Static.y1;

                //     if (Math.abs(xDiff) > Math.abs(yDiff)) {
                //       if (xDiff > 0) {
                //         this.Ref.gallery_container.scrollLeft -= this.Ref.gallery_container_slide.offsetWidth + 15;
                //       }
                //       else {
                //         this.Ref.gallery_container.scrollLeft += this.Ref.gallery_container_slide.offsetWidth + 15;
                //       }
                //     }
                //     this.Static.x1 = null;
                //     this.Static.y1 = null;
                //   }}
                
                >
                    <div ref='gallery_container_slide'><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                </div>
                </div>
                </div>
            </section>
            </div>
        </div>
      )
}