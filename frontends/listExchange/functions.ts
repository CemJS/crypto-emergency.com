

const fn = {
    "addEvent": function ({ cat }) {
        let url = `Ico?uuid=${this.Variable.myInfo.uuid}`
        if (cat) {
            url += `&cat=${cat}`
        }
        let eventSource

        if (this.Ref.icoList) {
            this.Ref.icoList.classList.add('animated');
            setTimeout(() => {
                this.Ref.icoList.classList.remove('animated');
            }, 500)
        }

        if (this._ListsEventSource.length) {
            eventSource = this.eventSourceChange(url)
        } else {
            eventSource = this.eventSource(url)
        }
        eventSource.addEventListener('message', ({ data }) => {
            let records = JSON.parse(data)
            // console.log('=57054c=', records)
            this.Static.records = records
            this.init()
        });
    },
    "pagBtn": function (direction, index) {
        switch (direction) {
            case 'prev':
                if (this.Static.currentPage == 0) return;
                this.Static.currentPage--;
                this.Ref.numCarousel.scrollLeft -= this.Ref.numSlide.offsetWidth + 3;
                break;
            case 'next':
                if (this.Static.currentPage == this.Static.points - 1) return;
                this.Static.currentPage++;
                this.Ref.numCarousel.scrollLeft += this.Ref.numSlide.offsetWidth + 3;
                break;
            case 'numeral':
                this.Static.currentPage = index;
                break;
            case 'startPrev':
                this.Static.currentPage = 0;
                this.Ref.numCarousel.scrollLeft = 0;
                break;
            case 'endNext':
                this.Static.currentPage = this.Static.points - 1;
                this.Ref.numCarousel.scrollLeft = this.Ref.numCarousel.offsetWidth + this.Static.points * 10;
                break;
        }

        this.Static.start = this.Static.currentPage * this.Static.items;
        this.Static.end = this.Static.start + this.Static.items;
        this.Static.paginated = this.Static.arr.slice(this.Static.start, this.Static.end);
        this.init();
    }
}

export { fn }