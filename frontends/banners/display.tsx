import { Cemjsx } from "cemjs-all"



let isDragging = false;
let startX, startScrollLeft, timeoutId, slides;

// const forExport = function ({ speed, arrow, records }) {
// let slides = [...records];

// let sliderPerView = Math.round(Data.widthSliderCarousel / Data.widthSlide);
// records.slice(-sliderPerView).reverse().forEach(slide => {
//     slides.unshift(slide)
// })
// records.slice(0, sliderPerView).forEach(slide => {
//     slides.push(slide)
// })
export const display = function () {
  const dragStart = (e, carousel) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  }


  const dragging = (e, carousel) => {
    // console.log('=43807a=', carousel.scrollLeft)
    if (!isDragging) return;
    e.preventDefault();
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  }

  const dragStop = (e) => {
    isDragging = false;
  }

  const autoPLay = (speed, carousel, slide) => {
    // console.log('=8ffa15=', timeoutId)
    if (!timeoutId) {
      timeoutId = setInterval(() => {
        carousel.scrollLeft += slide.offsetWidth + 20;
      }, speed)
    }
  }

  const infinityScroll = (carousel, slide) => {
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");

      carousel.scrollLeft = carousel.offsetWidth + slide.offsetWidth;
      carousel.classList.remove("no-transition");
      // console.log('=Data.sliderCarousel.scrollLeft=', carousel.scrollLeft)
      this.init()
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add("no-transition");

      carousel.scrollLeft = carousel.offsetWidth + slide.offsetWidth;
      carousel.classList.remove("no-transition");
      // console.log('=Data.sliderCarousel.scrollLeft=', carousel.scrollLeft)
      this.init()
    }
  }

  if (this.Static?.records > 4) {
    slides = [...this.Static?.records];
    let sliderPerView = Math.round(this.Ref.sliderCarousel?.offsetWidth / this.Ref.slide?.offsetWidth);
    this.Static?.records.slice(-sliderPerView).reverse().forEach(slide => {
      slides.unshift(slide)
    })
    this.Static?.records.slice(0, sliderPerView).forEach(slide => {
      slides.push(slide)
    })
  } else {
    slides = this.Static?.records
  }

  return (
    <div class="slider">
      <div
        ref="sliderWrap"
        class="slider__wrap"
        onMouseLeave={() => {
          // console.log('=8ffa15=', timeoutId)
          autoPLay(2000, this.Ref.sliderCarousel, this.Ref.slide)
        }}
      >
        {/* <div
          class="slider__button slider__button_prev"
          role="button"
          aria-label="Previos slide"
          onclick={() => {
            console.log('=4f9506=',this.Ref?.slide?.offsetWidth)
            this.Ref.sliderCarousel += this.Ref.sliderCarousel.offsetWidth;
          }}

        >
          <img src={`/assets/svg/banners/arrow_right.svg`}></img>
        </div> */}
        <div
          onmousedown={(e) => {
            dragStart(e, this.Ref.sliderCarousel)
          }}
          onmousemove={(e: any) => {
            dragging(e, this.Ref.sliderCarousel)
          }}
          onmouseup={(e) => {
            dragStop(e)
          }}
          onscroll={() => {
            infinityScroll(this.Ref.sliderCarousel, this.Ref.slide)
          }}
          ref="sliderCarousel"

          class="slider__carousel"
          // Element={($el) =>{
          //     Data.sliderCarousel = $el;
          //     Data.widthSliderCarousel = $el.offsetWidth;
          // }}
          onkeydown={(e) => {
            if (e.code == 'ArrowLeft') {
              console.log('=45cf14=', "нажата 'левая стрелка'")
            } else if (e.code == 'ArrowRight') {
              console.log('=45cf14=', "нажата 'правая стрелка'")
            }
          }}
        >
          {
            slides?.map((item, index) => {
              return (
                <a
                  href={item.link}
                  target="_blank"
                >
                  <img
                    ref="slide"
                    class={["slider__slide", index === 0 ? "slider__slide_first" : null]}
                    src={`/assets/upload/worldPress/${item.name}`}
                    draggable="false"
                  // After={($el)=>{
                  //     Data.widthSlide = $el.offsetWidth;
                  // }}
                  >
                  </img>
                </a>

              )
            })
          }
        </div>
        {/* <div
          class="slider__button slider__button_next"
          role="button"
          aria-label="Next slide"
          onclick={() => {
            console.log('=4f9506=',this.Ref?.slide?.offsetWidth)
            this.Ref.sliderCarousel.scrollLeft += Number(-this.Ref?.slide?.offsetWidth);
          }}
        >
          <img src={`/assets/svg/banners/arrow_left.svg`}></img>
        </div> */}
      </div>
    </div>
  )

}