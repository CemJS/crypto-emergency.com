export const loader = function () {

    let eventSource = this.eventSource(`Events?uuid=${this.Variable.myInfo.uuid}`)

    eventSource.addEventListener('message', ({ data }) => {
        let records = JSON.parse(data)
        // console.log('=641d61=', records)
        this.Static.records = records
        // console.log('=typeof=', this.Static.records)
        this.init()
    });



    class myClass {
      arr: string[];
      field: string
      item: string
     
      constructor(recordsArray: string[]) {
        this.arr = recordsArray;
      }

      getUniqueArrayByField(field: string) { 
        const uniqueSet = new Set(); 
        
        this.arr.forEach(item => {
          uniqueSet.add(item[field]);
        });
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

    

    //   Переменные состояния выпадающих списков
    this.Static.catergorySelectorStatus = 'close'
    this.Static.countrySelectorStatus = 'close'

    // выбранное значение страны
    this.Static.filtredRecords = this.Static.records
    
    

}

