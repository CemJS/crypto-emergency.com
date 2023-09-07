const listener = {
    "start": function (data, name) {
       
    },
    "finish": function (data, name, t) {
        this.fn('getPaginationNumbers');
    },
    "keyupAny": function (e) {
        // console.log('=e4aacc=', "keyup")
    },
    "clickAny": function (e) {
        // if(this.Ref.country_search_field.value == '' && this.Ref.choosen_category == 'Категория'){
        //     this.Static.filtredRecords = this.Static.records
        //   }
          this.init()

        //COUNTRY
        if (!this.Ref.country_area.contains(e.target)  && this.Static.countrySelectorStatus == 'open' && this.Ref.category_area.contains(e.target) || this.Ref.date_area.contains(e.target)) {
            // клик вне страны, но внутри категории или даты закрывает выпадающий список страны,оставляет тень
            this.Static.countrySelectorStatus = 'close'
            this.Ref.countries_dropdown.classList.remove("visible")
            this.Ref.countrySelector_arrow.classList.remove("rotate")
        } else if (!this.Ref.country_area.contains(e.target) && !this.Ref.category_area.contains(e.target) && this.Static.countrySelectorStatus == 'open') {
            // клик вне страны, и категории и даты
            this.Static.countrySelectorStatus = 'close'
            this.Ref.countries_dropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.countrySelector_arrow.classList.remove("rotate")
        }
        // CATEGORY
        if (!this.Ref.category_area.contains(e.target)  && this.Static.categorySelectorStatus == 'open' && this.Ref.country_area.contains(e.target) || this.Ref.date_area.contains(e.target)) {
            // клик вне категори,но внутри стран или даты закрывает выпадающий список ,оставляет тень
            // console.log('=267306=', 'вне категории но внутри стран')
            this.Static.categorySelectorStatus = 'close'
            this.Ref.category_dropdown.classList.remove("visible")
            this.Ref.categorySelector_arrow.classList.remove("rotate")
        } else if (!this.Ref.category_area.contains(e.target) && this.Static.categorySelectorStatus == 'open') {
            // клик вне категории и стран и даты
            this.Static.categorySelectorStatus = 'close'
            this.Ref.category_dropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.categorySelector_arrow.classList.remove("rotate")
        }
        //DATE
        if (!this.Ref.date_area.contains(e.target) && this.Static.calendarDropdownStatus == 'open'  && this.Ref.country_area.contains(e.target) || this.Ref.category_area.contains(e.target)) {
            // клик вне ДАТЫ,но внутри стран или категории закрывает выпадающий список ,оставляет тень
            this.Static.calendarDropdownStatus = 'close'
            this.Ref.calendarDropdown.classList.remove("visible")
            this.Ref.calendarDropdown_arrow.classList.remove("rotate")
            this.Static.currentMonth = this.Static.date.getMonth()
            this.Static.liTag = ''
        } else if (!this.Ref.date_area.contains(e.target) && !this.Ref.calendarDropdown.contains(e.target) &&!this.Ref.days.contains(e.target) && !this.Ref.months_list_container.contains(e.target)  && this.Static.calendarDropdownStatus == 'open') {
            // клик вне категории и стран и даты и date dropdown
            console.log('=38e0b6=',"вне всего")
            this.Ref.months_list_container.classList.add('hidden')
            this.Static.calendarDropdownStatus = 'close'
            this.Ref.calendarDropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.calendarDropdown_arrow.classList.remove("rotate")
            this.Static.currentMonth = this.Static.date.getMonth()
            
        }
    },
    "keydownAny": function (e){
        if (e.key ==='Tab' || e.key === 'Escape'){
            // COUNTRY
            this.Static.countrySelectorStatus = 'close'
            this.Ref.countries_dropdown.classList.remove("visible")
            this.Ref.event_list.classList.remove("shadow")
            this.Ref.countrySelector_arrow.classList.remove("rotate")
            // CATEGORY
            this.Static.catergorySelectorStatus = 'close'
            this.Ref.category_dropdown.classList.remove("visible")
            this.Ref.categorySelector_arrow.classList.remove("rotate")
            
        } 
    },
}

export { listener }