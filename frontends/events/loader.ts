export const loader = function () {

  this.fn("addEvent", {})

  this.Static.makeFilter = {
    cat: "",
    country: ""
  }
  this.Static.currentSlide = 0
  this.Static.maxSlidesPerShift = 4
    class myClass {
      arr: string[];
      field: string
      item: string
     
      constructor(recordsArray: string[]) {
        this.arr = recordsArray;
      }

      getUniqueArrayByField(field: string) { 
        const uniqueSet = new Set(); 
        if(this.arr){
        this.arr.forEach(item => {
          uniqueSet.add(item[field]);
        });
      }
        const uniqueArray =  Array.from(uniqueSet)

        if(field == 'country'){
          uniqueArray.unshift('Все страны')
        }else if(field == 'category'){
          uniqueArray.unshift('Все категории')
        }
        
        return uniqueArray
      }
    }
    this.Static.classObject = new myClass(this.Static.records)
    this.Static.uniqueCountries =  this.Static.classObject.getUniqueArrayByField('country')

    //   Переменные состояния выпадающих списков
    this.Static.catergorySelectorStatus = 'close'
    this.Static.countrySelectorStatus = 'close'

    // Переменные для поисков
    this.Static.searchCountries = this.Static.uniqueCountries
    this.Static.filtredRecords = this.Static.records
    
    // Слайдер onmouse
    this.Static.isDragging = false;
    this.Static.startX
    this.Static.startScrollLeft
    this.Static.x1 = null;
    this.Static.y1 = null;


}

