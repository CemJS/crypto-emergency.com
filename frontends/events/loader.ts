export const loader = function () {

  this.fn("addEvent", {})


  // this.Static.filtredRecords = this.Static.records
  this.Static.makeFilter = {
    cat: "",
    country: ""
  }
  this.Static.currentSlide = 0
  this.Static.maxSlidesPerShift = 4


    // this.Static.uniqueCountriesTest = []

    
    //   this.Static.classObject = new myClass(this.Static.records)
      this.Static.uniqueCountries =  []
      this.Static.uniqueCategories = []
      this.Static.searchCountries = []
      // this.init()



    //   Переменные состояния выпадающих списков
    this.Static.categorySelectorStatus = 'close'
    this.Static.countrySelectorStatus = 'close'
    this.Static.calendarDropdownStatus = 'close'

    // Переменные для поисков
    this.Static.filtredRecords = this.Static.records
    
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

    this.Static.months = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    this.Static.liTag = ""

  }


