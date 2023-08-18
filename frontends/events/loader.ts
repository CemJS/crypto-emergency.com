export const loader = function () {

    let eventSource = this.eventSource(`Events?uuid=${this.Variable.myInfo.uuid}`)

    eventSource.addEventListener('message', ({ data }) => {
        let records = JSON.parse(data)
        // console.log('=641d61=', records)
        this.Static.records = records
        this.init()
    });

    // Отбор уникальных значений по указаному полю в массиве  для фильтра 
    function getUniqueArray(arr, field) {
      const uniqueArray = new Set();
      arr.forEach(item => {
        uniqueArray.add(item[field]);
      });
      return Array.from(uniqueArray);
    }

    // function selectedFilters(){
    //   this.Static.selectedCountry = ""
    //   this.Static.selectedCategory = this.Ref.choosen_category.innerText

    //   this.Static.filtredArrayByCountryAndCategory = 'Это будет вызов функции-фильтра'
    // }


    // Отбор уникальных стран для фильтра 
    this.Static.uniqueCountriesArray = getUniqueArray(this.Static.records, 'country')
    console.log('=7d4f98=',this.Static.uniqueCountriesArray)
    // Отбор уникальных категорий для фильтра
    this.Static.uniqueCategoriesArray = getUniqueArray(this.Static.records, 'category')
    console.log('=7d4f98=',this.Static.uniqueCategoriesArray)



    //   Переменные состояния выпадающих списков
    this.Static.catergorySelectorStatus = 'close'
    this.Static.countrySelectorStatus = 'close'

    // выбранное значение страны
    this.Static.filtredRecords = this.Static.records
    
    

}

