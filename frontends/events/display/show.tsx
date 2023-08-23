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
  console.log('=a93c3b=',this.Static.record)
  
      return (
        <div class="page event">
            <div class="wrapper">
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
                <div class='gallery-container'>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    <div><img src={test2} alt="" /></div>
                    <div><img src={test} alt="" /></div>
                    
          
                </div>
            </section>
            </div>
        </div>
      )
}