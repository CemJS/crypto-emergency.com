export const makeFilters = function (show = false) {
    let url = `/api/events/Exchangers?uuid=${this.Variable.myInfo.uuid}`
    if (show) {
        url += `&id=${this.Variable.DataUrl[2]}`
        return url
    }
    // url += `&lang=ru`
    // if (this.Static.makeFilter.cat != 0) {
    //     url += `&cat=${this.Static.categories[this.Static.makeFilter.cat].name}`
    // }
    // if (this.Static.makeFilter.active) {
    //     url += `&active=${this.Static.makeFilter.active}`
    // }

    if (this.Static.moreid) {


        // url += `&moreid=${this.Static.moreid}`
        url += `&offset=${this.Static.records.length}`
        console.log('=url request=',url)
        this.Static.moreid = null
    } else {
        this.Static.records = []
    }
    return url
}

export const addEvent = function () {
    let filters = this.fn("makeFilters")
    let exchangersListeners = [
        {
            type: "add",
            fn: ({ data }) => {
                let record = JSON.parse(data)
                if (Object.keys(record).length) {
                    this.Static.records.push(record)
                }
                this.init()
            }
        }
    ]
    if (!this.Events.exchangers) {
        this.Events.exchangers = this.event(filters, exchangersListeners)
    } else {
        this.Events.exchangers.change(filters, exchangersListeners)
    }

}

// export const pagBtn = function (direction, index) {
//     switch (direction) {
//         case 'prev':
//             if (this.Static.currentPage == 0) return;
//             this.Static.currentPage--;
//             this.Ref.numCarousel.scrollLeft -= this.Ref.numSlide.offsetWidth + 3;
//             break;
//         case 'next':
//             if (this.Static.currentPage == this.Static.points - 1) return;
//             this.Static.currentPage++;
//             this.Ref.numCarousel.scrollLeft += this.Ref.numSlide.offsetWidth + 3;
//             break;
//         case 'numeral':
//             this.Static.currentPage = index;
//             break;
//         case 'startPrev':
//             this.Static.currentPage = 0;
//             this.Ref.numCarousel.scrollLeft = 0;
//             break;
//         case 'endNext':
//             this.Static.currentPage = this.Static.points - 1;
//             this.Ref.numCarousel.scrollLeft = this.Ref.numCarousel.offsetWidth + this.Static.points * 10;
//             break;
//     }

//     this.Static.start = this.Static.currentPage * this.Static.items;
//     this.Static.end = this.Static.start + this.Static.items;
//     this.Static.paginated = this.Static.arr.slice(this.Static.start, this.Static.end);
//     this.init();
//     return
// }

// export const addEvent = function () {
    // let url = `/api/events/Exchangers?uuid=${this.Variable.myInfo.uuid}`
    // let eventSource

    // if (this.Ref.icoList) {
    //     this.Ref.icoList.classList.add('animated');
    //     setTimeout(() => {
    //         this.Ref.icoList.classList.remove('animated');
    //     }, 500)
    // }

    // if (this._ListsEventSource.length) {
    //     eventSource = this.eventSourceChange(url)
    // } else {
    //     eventSource = this.eventSource(url)
    // }

    // eventSource.addEventListener('add', ({ data }) => {
    //     if (!this.Static.records) {
    //         this.Static.records = []
    //     }
    //     let record = JSON.parse(data)
    //     this.Static.records.push(record)
    //     this.init()
    // });
    // return 
// }