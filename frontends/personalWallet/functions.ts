import done from "@images/personalWallet/done.svg"

const fn = {

  "appendPageNumber": function (index) {
    const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  this.Ref.paginationNumbers.appendChild(pageNumber)
  // this.init()
  },
  "getPaginationNumbers": function () {
    for (let i = 1; i <= this.Static.pageCount; i++) { //При вызове этой функции вызывается функция appendPageNumber, которая добавит число в пагинатор pageCount раз
      this.fn('appendPageNumber',i);
    }
  },
  "setCurrentPage": function (pageNum) {
    this.Static.currentPage = pageNum;
    
    let prevRange = (pageNum - 1) * this.Static.paginationLimit;
    let currRange = pageNum * this.Static.paginationLimit;
    // console.log('=69d159=',this.Static.data)
    this.Static.limitArray = []
    this.Static.data.forEach((item, index) => {
      if (index >= prevRange && index < currRange) {
        // console.log('=9c68e1=',item)
        this.Static.limitArray.push(item)
      }
    });

  console.log('=c43e24=',this.Static.limitArray)
  },
}

export { fn }


// this.fn('getPaginationNumbers');