const listener = {
    "start": function (data, name) {
        // console.log('=e60c81=', data, name, this)
    },
    "finish": function (data, name, t) {
        // console.log('=e60c81=', data, name, t, this)
    },
    "keyupAny": function (e) {
        // console.log('=e4aacc=', "keyup")
    },
    "clickAny": function (e) {
        if(this.Ref.country_search_field.value == ''){
            this.Static.filtredRecords = this.Static.records
          }
          this.init()
        if (!this.Ref.country_area.contains(e.target) && this.Ref.category_area.contains(e.target) && this.Static.countrySelectorStatus == 'open') {
            // клик вне страны, но внутри категории закрывает выпадающий список страны,оставляет тень
            this.Static.countrySelectorStatus = 'close'
            this.Ref.countries_dropdown.classList.remove("visible")
            this.Ref.countrySelector_arrow.classList.remove("rotate")
            // this.Ref.magnifier.classList.remove("visible")
        } else if (!this.Ref.country_area.contains(e.target) && !this.Ref.category_area.contains(e.target) && this.Static.countrySelectorStatus == 'open') {
            // клик вне страны, и категории
            this.Static.countrySelectorStatus = 'close'
            this.Ref.countries_dropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.countrySelector_arrow.classList.remove("rotate")
            // this.Ref.magnifier.classList.remove("visible")
        }

        if (!this.Ref.category_area.contains(e.target) && this.Ref.country_area.contains(e.target) && this.Static.catergorySelectorStatus == 'open') {
            // клик вне категори,но внутри стран закрывает выпадающий список ,оставляет тень
            // console.log('=267306=', 'вне категории но внутри стран')
            this.Static.catergorySelectorStatus = 'close'
            this.Ref.category_dropdown.classList.remove("visible")
            this.Ref.categorySelector_arrow.classList.remove("rotate")
        } else if (!this.Ref.category_area.contains(e.target) && this.Static.catergorySelectorStatus == 'open') {
            // клик вне категории и стран 
            this.Static.catergorySelectorStatus = 'close'
            this.Ref.category_dropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.categorySelector_arrow.classList.remove("rotate")
        }
    },
    "keydownAny": function (e){
        if (e.key ==='Tab' || e.key === 'Escape'){
            // COUNTRY
            this.Static.countrySelectorStatus = 'close'
            this.Ref.countries_dropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.countrySelector_arrow.classList.remove("rotate")
            // this.Ref.magnifier.classList.remove("visible")
            // CATEGORY
            this.Static.catergorySelectorStatus = 'close'
            this.Ref.category_dropdown.classList.remove("visible")
            this.Ref.categorySelector_arrow.classList.remove("rotate")
            
        } 
    }

    
}

export { listener }