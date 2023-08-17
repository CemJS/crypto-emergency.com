const listener = {
    "start": function (data, name) {
        // console.log('=e60c81=', data, name, this)
    },
    "finish": function (data, name, t) {
        // console.log('=e60c81=', data, name, t, this)
    },
    "keydownAny": function (e) {
        console.log('=e4aacc=', "keydown")
    },
    "keyupAny": function (e) {
        console.log('=e4aacc=', "keyup")
    },
    "clickAny": function (e) {
        console.log('=cca0b8=', e.target)
        if (!this.Ref.country_area.contains(e.target) && this.Ref.category_area.contains(e.target) && this.Static.countrySelectorStatus == 'open') {
            // клик вне страны, но внутри категории
            this.Static.countrySelectorStatus = 'close'
            this.Ref.countries_dropdown.classList.remove("visible")
            this.Ref.countrySelector_arrow.classList.remove("rotate")
            this.Ref.magnifier.classList.remove("visible")
        } else if (!this.Ref.country_area.contains(e.target) && !this.Ref.category_area.contains(e.target) && this.Static.countrySelectorStatus == 'open') {
            // клик вне страны, и категории
            this.Static.countrySelectorStatus = 'close'
            this.Ref.countries_dropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.countrySelector_arrow.classList.remove("rotate")
            this.Ref.magnifier.classList.remove("visible")
        }
        // else if (e.key ==='Tab' || e.key === 'Escape'){
        //     this.Static.countrySelectorStatus = 'close'
        //     this.Ref.countries_dropdown.classList.remove("visible")
        //     this.Ref.event_list.classList.remove("shadow")
        //     this.Ref.countrySelector_arrow.classList.remove("rotate")
        //     this.Ref.magnifier.classList.remove("visible")
        // }



        if (!this.Ref.category_area.contains(e.target) && this.Ref.country_area.contains(e.target) && this.Static.catergorySelectorStatus == 'open') {
            // клик вне категори,но внутри стран
            console.log('=267306=', 'вне категории но внутри стран')
            this.Static.catergorySelectorStatus = 'close'
            this.Ref.category_dropdown.classList.remove("visible")
            this.Ref.categorySelector_arrow.classList.remove("rotate")
        } else if (!this.Ref.category_area.contains(e.target) && this.Static.catergorySelectorStatus == 'open') {
            // вне категории и стран
            this.Static.catergorySelectorStatus = 'close'
            this.Ref.category_dropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.categorySelector_arrow.classList.remove("rotate")
        }
    }
}

export { listener }