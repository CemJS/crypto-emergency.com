import done from "@images/personalWallet/done.svg"

const fn = {
  "setCurrentPage": function (pageNum) {
    this.Static.currentPage = pageNum;
    let prevRange = (pageNum - 1) * this.Static.paginationLimit;
    let currRange = pageNum * this.Static.paginationLimit;
    this.Static.limitArray = []
    this.Static.data.forEach((item, index) => {
      if (index >= prevRange && index < currRange) {
        this.Static.limitArray.push(item)
      }
    
    });

  // console.log('=c43e24=',this.Static.limitArray)
  },
  "pagination": function (pageNum) {


    if (this.Static.currentPage == this.Static.End && this.Static.currentPage <= this.Static.lastPage-2) {  //Показывает блок с первыми 2 страницами при клике на последнюю страницу среза 
      this.Ref.first_two.classList.remove('hidden')
      this.Static.Begin += 2  //При клике на последний элемент среза происходит сдвиг пагинатора на 2
      this.Static.End += 2
      

    }else if(this.Static.currentPage == this.Static.End-1 && this.Static.currentPage>=5 && this.Static.currentPage <= this.Static.lastPage-2){
      this.Static.Begin += 1
      this.Static.End += 1
    }else if(this.Static.Begin == 2  && this.Static.currentPage<=4){
      this.Ref.first_two.classList.add('hidden')
      this.Static.Begin -= 2 
      this.Static.End -= 2
    }else if(this.Static.Begin == 3  && this.Static.currentPage<=5){
      this.Static.Begin -= 1  
      this.Static.End -= 1
    }else if(this.Static.Begin >= 4  && this.Static.currentPage == this.Static.Begin+2){
      this.Static.Begin -= 1 
      this.Static.End -= 1
    }else if(this.Static.Begin >= 4  && this.Static.currentPage == this.Static.Begin+1){
      this.Static.Begin -= 2 
      this.Static.End -= 2
    }

    if (this.Static.currentPage >= this.Static.lastPage -3) {
      this.Ref.two_last.classList.add('hidden')
    }else if(this.Static.currentPage <= this.Static.lastPage -2){
      this.Ref.two_last.classList.remove('hidden')
    }
    
  }
}

export { fn }
