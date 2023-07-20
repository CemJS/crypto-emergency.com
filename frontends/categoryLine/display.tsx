import { Cemjsx } from "cemjs-all"


export const display = function () {
  if (this.Static.records) {
    return (
      <div class="page page__container">
        <div class="category-wrap category-wrap_shadow-left category-wrap_shadow-right">
          <ul
            class="category-carousel"
            ref="categoryCarousel"
            onmousedown={(e) => {
              this.Static.isDrag = true;
              this.Ref.categoryCarousel.classList.add("dragging");
              this.Static.startX = e.pageX;
              this.Static.startScrollLeft = this.Ref.categoryCarousel.scrollLeft;
            }}
            onmousemove={(e) => {
              if (!this.Static.isDrag) return;
              e.preventDefault();
              this.Ref.categoryCarousel.scrollLeft = this.Static.startScrollLeft - (e.pageX - this.Static.startX);
            }}
            onmouseup={(e) => {
              this.Static.isDrag = false;
              this.Ref.categoryCarousel.classList.remove("dragging");
            }}
            onscroll={() => {
              if (this.Ref.categoryCarousel.scrollLeft === 0) {
                // this.Ref.categoryCarousel.classList.remove("category-wrap_shadow-left");
              } else if (this.Ref.categoryCarousel.scrollLeft === this.Ref.categoryCarousel.scrollWidth - this.Ref.categoryCarousel.offsetWidth) {
                this.Ref.categoryCarousel.classList.remove("category-wrap_shadow-right");
              }
              // this.init();
            }}
            onwheel={(e) => {
              if (e.deltaY < 0) {
                this.Ref.categoryCarousel.scrollLeft += this.Ref.categoryEl.offsetWidth + 15;
              } else if (e.deltaY > 0) {
                this.Ref.categoryCarousel.scrollLeft -= this.Ref.categoryEl.offsetWidth + 15;
              }
            }}
          >
            {this.Static.records.map((item) => {
              return (
                <li
                  ref="categoryEl"
                  class={"category-item"}
                  draggable="false"
                  onclick={() => {
                    this.cross({ event: "press", name: item.name })
                  }}>
                  <span>{item.name}</span>
                </li>
              )
            })
            }
            {/* <li class={"category-item"}>
              <span>Все</span>
            </li>
            <li class={"category-item"}>
              <span>Example1</span>
            </li>
            <li class={"category-item"}>
              <span>Example2</span>
            </li>
            <li class={"category-item"}>
              <span>Example4</span>
            </li>
            <li class={"category-item"}>
              <span>Example5</span>
            </li> */}
          </ul>
        </div>
      </div>

    )
  }

  return (
    <div class="category-wrap category-wrap_shadow-left category-wrap_shadow-right"></div>
  )

}