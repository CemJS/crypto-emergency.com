export { }




export const finish = function () {
    this.Static.tabWidth = this.Ref.tabsItem.offsetWidth;
        this.Ref.tabsSlider.style.width = `${this.Static.tabWidth}px`; 
        this.Ref.tabsSlider.style.left = `${this.Ref.tabsItem.offsetWidth * this.Static.activeIndex}px`;
        this.Static.cardHeight = this.Ref.card?.clientHeight;
        this.Static.cardWidth = this.Ref.card?.clientWidth;
    return
}