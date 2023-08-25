

const fn = {

  "addEvent": function ({ cat, country }) {
    let url = `Events?uuid=${this.Variable.myInfo.uuid}`

    if (cat && country) {
      url += `&cat=${cat}`
      url += `&country=${country}`
    }

    if (cat) {
      url += `&cat=${cat}`
    }
    if (country) {
      url += `&country=${country}`
    }

    let eventSource

    if (this._ListsEventSource.length) {
      eventSource = this.eventSourceChange(url)
    } else {
      eventSource = this.eventSource(url)
    }


    eventSource.addEventListener('add', ({ data }) => {
      if (!this.Static.records) {
        this.Static.records = []
      }
      let record = JSON.parse(data)
      this.Static.records.push(record)
      this.Static.filtredRecords = this.Static.records
      this.Static.uniqueCountries = this.Static.classObject.getUniqueArrayByField('country')
      this.Static.uniqueCategories = this.Static.classObject.getUniqueArrayByField('category')
      this.Static.filtredRecords = this.Static.records
      this.init()
    });

    // eventSource.addEventListener('message', ({ data }) => {
    //   let records = JSON.parse(data)
    //   // console.log('=records=', records)
    //   this.Static.records = records
    //   this.Static.filtredRecords = this.Static.records
    //   this.Static.uniqueCountries = this.Static.classObject.getUniqueArrayByField('country')
    //   this.Static.uniqueCategories = this.Static.classObject.getUniqueArrayByField('category')
    //   this.Static.filtredRecords = this.Static.records
    //   this.init()
    // });
  },
  "calendarRender": function () {

    console.log('=currentMonth=', this.Static.currentMonth)
    // ПЕРВЫЙ ДЕНЬ НЕДЕЛИ  ТЕКУЩЕГО месяца
    let firstDayofMonth = new Date(this.Static.currentYear, this.Static.currentMonth, 1).getDay();
    //  ПОСЛЕДНИЙ ДЕНЬ ТЕКУЩЕГО месяца
    let lastDateofMonth = new Date(this.Static.currentYear, this.Static.currentMonth + 1, 0).getDate();
    // ПОСЛЕДНИЙ ДЕНЬ НЕДЕЛИ ТЕКУЩЕГО месяца
    let lastDayofMonth = new Date(this.Static.currentYear, this.Static.currentMonth, lastDateofMonth).getDay();
    //последний день предыдущего месяца
    let lastDateofLastMonth = new Date(this.Static.currentYear, this.Static.currentMonth, 0).getDate();
    console.log('=firstDayofMonth=', 'функция вызывается')
    // Строка для хранения элементов списка дней.
    // let liTag = "";

    //  дни ПРЕДЫДУЩЕГО месяца в текущем. 
    //  Число итераций = номер дня недели текущего месяца(firstDayofMonth), где 0 - воскресенье
    for (let i = firstDayofMonth - 1; i > 0; i--) {
      this.Static.liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Дни текущего месяца
    // Число итераций = количесвто дней в месяце(lastDateofMonth)
    for (let i = 1; i <= lastDateofMonth; i++) {
      // Определение, является ли текущий день сегодняшним,чтобы добавить ему класс today
      let isToday =
        i === this.Static.date.getDate() &&
          this.Static.currentMonth === new Date().getMonth() &&
          this.Static.currentYear === new Date().getFullYear()
          ? "today"
          : "";

      // Добавляем  элемент списка дней после проверки на 'isToday' 
      this.Static.liTag += `<li class="${isToday}">${i}</li>`;
    }

    // дни следующего месяца в текущем
    // число итераций = номеру дня недели последней недели месяца
    // for (let i = lastDayofMonth; i < 6; i++) {
    //   this.Static.liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`; //   Вторник = 2;  2 - 2 + 1 = 1; 3-2+1=2 b и тд, пока < 6 
    // }
    for (let i = lastDayofMonth + 1; i < 7; i++) {
      this.Static.liTag += `<li class="inactive">${i - lastDayofMonth}</li>`;
    }

    // Обновляем текст текущей даты
    this.Static.currentDate = `${this.Static.months[this.Static.currentMonth]} ${this.Static.currentYear}`;
    if (this.Static.currentMonth < 0 || this.Static.currentMonth > 11) {
      this.Static.date = new Date(this.Static.currentYear, this.Static.currentMonth);
      this.Static.currentMonth = this.Static.date.getMonth();
      this.Static.currentDate = `${this.Static.months[this.Static.currentMonth]} ${this.Static.currentYear}`;
      this.Static.currentYear = this.Static.date.getFullYear();
    } else {
      this.Static.date = new Date();
    }
    // return this.Static.liTag
  }
}

export { fn }