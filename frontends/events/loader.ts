export const loader = function () {

  this.fn("addEvent", {})

  //конструктор фильтров
  this.Static.makeFilter = {
    cat: "",
    country: ""
  }
 



    
      this.Static.uniqueCountries =  []
      this.Static.uniqueCategories = []
      this.Static.searchCountries = []
      this.Static.countRecords = 0 



    //   Переменные состояния выпадающих списков
    this.Static.categorySelectorStatus = 'close'
    this.Static.countrySelectorStatus = 'close'
    this.Static.calendarDropdownStatus = 'close'

    // Переменные для поисков
    // this.Static.filtredRecords = this.Static.records


    //СЛАЙДЕР 
    this.Static.currentSlide = 0
    this.Static.maxSlidesPerShift = 4
    // Слайдер onmouse
    this.Static.isDragging = false;
    this.Static.startX
    this.Static.startScrollLeft
    this.Static.x1 = null;
    this.Static.y1 = null;
    



    // КАЛЕНДАРЬ
    this.Static.date = new Date()
    this.Static.currentMonth = this.Static.date.getMonth()
    this.Static.currentYear = this.Static.date.getFullYear()
    this.Static.choosenDate = null

    this.Static.selectedDate = new Date() // сохраняет выбранную дату(.choosen).
                                          // Необходимо,так как при вызове функции calendarRender 
                                          // переменная с календарем перезаписывается

    this.Static.months = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    this.Static.arrDayOfMonth = []

    this.Static.arr35 = []
    for (let i = 1; i <= 35; i++) {
      this.Static.arr35.push(1)
      this.Static.arrDayOfMonth.push(1)
    }

  }


