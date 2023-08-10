const listener = {
    "cross": [{
        "front": "categoryLine",
        "fn": function ({ event, name }) {
            // console.log('=20160d=',event, name)
            this.fn("addEvent", { cat: name })
        }
    }],
    "start": function (data, name) {
        // console.log('=e60c81=', data, name, this, this.Ref.tabs)
    },
    "finish": function (data, name, t) {
        this.Static.tabWidth = this.Ref.tabsItem.offsetWidth;
        this.Ref.tabsSlider.style.width = `${this.Static.tabWidth}px`;
        this.Static.cardHeight = this.Ref.card.clientHeight;
        this.Static.cardWidth = this.Ref.card.clientWidth;
        console.log('=8d8c5e=', this.Static.cardWidth)
    }
}

export { listener }