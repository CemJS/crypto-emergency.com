import done from "@images/personalWallet/done.svg"

const fn = {
  "setCurrentPage": function (pageNum) {
    this.Static.currentPage = pageNum;
    let prevRange = (pageNum - 1) * this.Static.paginationLimit;
    let currRange = pageNum * this.Static.paginationLimit;
    this.Static.limitArray = []
    if (this.Static.currentPage == this.Static.End) {
      this.Ref.first_two.classList.remove('hidden')
      this.Static.Begin += 2
      this.Static.End += 2
      // console.log('=63044a=', e.target.innerText && this.Static.currentPage>=5)
    }else if(this.Static.currentPage == this.Static.End-1 && this.Static.currentPage>=5){
      this.Static.Begin += 1
      this.Static.End += 1
    }else if(this.Static.currentPage == this.Static.Begin-1 && this.Static.currentPage>=5){
      console.log('=1aa04f=','тут')
    }
    console.log('=0805f7=',this.Static.currentPage)
    this.Static.data.forEach((item, index) => {
      if (index >= prevRange && index < currRange) {
        this.Static.limitArray.push(item)
      }
    
    });

  // console.log('=c43e24=',this.Static.limitArray)
  },
}

export { fn }


// this.fn('getPaginationNumbers');