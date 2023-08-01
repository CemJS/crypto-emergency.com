const listener = {
    "cross": [{
        "front": "categoryLine",
        "fn": function ({ event, name }) {
            // console.log('=20160d=',event, name)
            this.fn("addEvent", { cat: name })
        }
    }],
    "start": function (data, name) {
        console.log('=e60c81=', data, name, this, this.Ref.tabs)
    },
    "finish": function (data, name, t) {
        console.log('=e60c81=', data, name, t, this)
        console.log('=e60c81=', data, name, this, this.Ref.tabs)
        this.Static.tabWidth = this.Ref.tabsItem.offsetWidth;
        console.log('=a00968=', this.Static.tabWidth)
        // this.Ref.tabsSlider.style.width = this.Ref.tabsItem.offsetWidth;
    }
}

export { listener }