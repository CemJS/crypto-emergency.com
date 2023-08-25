

const fn = {
    "addEvent": function () {
        let url = `Exchanges?uuid=${this.Variable.myInfo.uuid}`
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
        
        eventSource.addEventListener('add', ({ data }) => {
            console.log('=13a2b9=',data)
            if (!this.Static.records) {
                this.Static.records = []
            }
            let record = JSON.parse(data)
            this.Static.records.push(record)
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