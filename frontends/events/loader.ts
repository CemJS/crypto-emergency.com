export const loader = function () {

    let eventSource = this.eventSource(`Events?uuid=${this.Variable.myInfo.uuid}`)

    eventSource.addEventListener('message', ({ data }) => {
        let records = JSON.parse(data)
        // console.log('=641d61=', records)
        this.Static.records = records
        this.init()
    });

    // Отбор уникальных стран для сортировки
    this.Static.uniqueCountries = new Set();
    this.Static.records.forEach((item) => {
        this.Static.uniqueCountries.add(item.country);
      });
    //   обратно в массив
      this.Static.uniqueCountriesArray = Array.from(this.Static.uniqueCountries);

    
    // function getUniqueArray(Array, field) {
    //   const uniqueArray = new Set();
    //   Array.forEach(item => {
    //     uniqueArray.add(item[field]);
    //   });
    
    //   return Array.from(uniqueArray);
    // }
    // this.Static.newArray = getUniqueArray(this.Static.records, 'country')
    // console.log('=7d4f98=',this.Static.newArray)




    //   Переменные состояния выпадающих списков
    this.Static.catergorySelectorStatus = 'close'
    this.Static.countrySelectorStatus = 'close'

    // выбранное значение страны
    this.Static.ChoosenCountry = ''
    this.Static.filtredRecords = this.Static.records
    
    

}

