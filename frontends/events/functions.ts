// "calendarRender": function () {
//   console.log('=currentMonth=', this.Static.currentMonth)
//   // ПЕРВЫЙ ДЕНЬ НЕДЕЛИ  ТЕКУЩЕГО месяца
//   let firstDayofMonth = new Date(this.Static.currentYear, this.Static.currentMonth, 1).getDay();
//   //  ПОСЛЕДНИЙ ДЕНЬ ТЕКУЩЕГО месяца
//   let lastDateofMonth = new Date(this.Static.currentYear, this.Static.currentMonth + 1, 0).getDate();
//   // ПОСЛЕДНИЙ ДЕНЬ НЕДЕЛИ ТЕКУЩЕГО месяца
//   let lastDayofMonth = new Date(this.Static.currentYear, this.Static.currentMonth, lastDateofMonth).getDay();
//   //последний день предыдущего месяца
//   let lastDateofLastMonth = new Date(this.Static.currentYear, this.Static.currentMonth, 0).getDate();

//   // Дозаполнение пустых ячеек из предыдущего месяца
//   if (firstDayofMonth > 1) {
//     for (let i = firstDayofMonth - 1; i > 0; i--) {
//       this.Static.liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//     }
//   } else if (firstDayofMonth === 0) {
//     // Добавление 6 дополнительных ячеек, если первый день - воскресенье
//     for (let i = 1; i <= 6; i++) {
//       this.Static.liTag += `<li class="inactive">${lastDateofLastMonth - 6 + i}</li>`;
//     }
//   }
//   // Дни текущего месяца. Число итераций = количесвто дней в месяце(lastDateofMonth)
//   for (let i = 1; i <= lastDateofMonth; i++) {
//     let isToday = // Определение, является ли текущий день сегодняшним,чтобы добавить ему класс today
//       i === this.Static.date.getDate() &&
//         this.Static.currentMonth === new Date().getMonth() &&
//         this.Static.currentYear === new Date().getFullYear()
//         ? "today "
//         : "";
//     // Добавляем  элемент списка дней после проверки на 'isToday' 

//       // isToday += " choosen";

//       let isChoosen =
//         i === this.Static.selectedDate.getDate() &&
//         this.Static.currentMonth === this.Static.selectedDate.getMonth() &&
//         this.Static.currentYear === this.Static.selectedDate.getFullYear()
//         ? "choosen"
//         : "";
//     this.Static.liTag += `<li class="${isToday }${isChoosen}">${i}</li>`;
//   }
//     // дни следующего месяца в текущем
//     if (lastDayofMonth > 0) {
//       for (let i = 1; i <= 7 - lastDayofMonth; i++) {
//         this.Static.liTag += `<li class="inactive">${i}</li>`;
//       }
//   }
//   // Обновляем текст текущей даты при смене месяца и года 
//     this.Static.currentDate = `${this.Static.months[this.Static.currentMonth]} ${this.Static.currentYear}`;

//   if (this.Static.currentMonth < 0 || this.Static.currentMonth > 11) {
//     this.Static.date = new Date(this.Static.currentYear, this.Static.currentMonth);
//     this.Static.currentMonth = this.Static.date.getMonth();
//     this.Static.currentDate = `${this.Static.months[this.Static.currentMonth]} ${this.Static.currentYear}`;
//     this.Static.currentYear = this.Static.date.getFullYear();
//   } else {
//     this.Static.date = new Date();
//   }
//   this.Ref.days.innerHTML = this.Static.liTag 
// },


export const getUniqueArrayByField = function (Arr, field) {
  const uniqueSet = new Set();
  if (Arr) {
    Arr.forEach(item => {
      uniqueSet.add(item[field]);
    });
  }
  const uniqueArray = Array.from(uniqueSet)

  if (field == 'country') {
    uniqueArray.unshift('Все страны')
    this.Static.uniqueCountries = uniqueArray
  } else if (field == 'category') {
    uniqueArray.unshift('Все категории')
    this.Static.uniqueCategories = uniqueArray
  }
  return
}

export const dayOfMonth = function () {
  let arrDays = []
  let firstDayofMonth = new Date(this.Static.currentYear, this.Static.currentMonth, 1).getDay();
  let lastDateofMonth = new Date(this.Static.currentYear, this.Static.currentMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(this.Static.currentYear, this.Static.currentMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(this.Static.currentYear, this.Static.currentMonth, 0).getDate();

  if (firstDayofMonth > 1) {
    for (let i = firstDayofMonth - 1; i > 0; i--) {
      arrDays.push({ day: lastDateofLastMonth - i + 1, class: "inactive previous " })
    }
  } else if (firstDayofMonth === 0) {
    for (let i = 1; i <= 6; i++) {
      arrDays.push({ day: lastDateofLastMonth - 6 + i, class: "inactive previous" })
    }
  }

  for (let i = 1; i <= lastDateofMonth; i++) { //текущий месяц
    arrDays.push({ day: i, class: "current " })

    // isToday += " choosen";
    if (i === this.Static.selectedDate.getDate() && this.Static.currentMonth === this.Static.selectedDate.getMonth() && this.Static.currentYear === this.Static.selectedDate.getFullYear()) {
      arrDays[arrDays.length - 1].class += "choosen "
    }

    if (i === this.Static.date.getDate() && this.Static.currentMonth === new Date().getMonth() && this.Static.currentYear === new Date().getFullYear()) {
      arrDays[arrDays.length - 1].class += "today "
    }
  }
  // дни следующего месяца в текущем
  if (lastDayofMonth > 0) {
    for (let i = 1; i <= 7 - lastDayofMonth; i++) {
      arrDays.push({ day: i, class: "inactive nextmonth " })
    }
  }
  // Обновляем текст текущей даты при смене месяца и года 
  // this.Static.currentDate = `${this.Static.months[this.Static.currentMonth]} ${this.Static.currentYear}`;

  if (this.Static.currentMonth < 0 || this.Static.currentMonth > 11) {
    this.Static.date = new Date(this.Static.currentYear, this.Static.currentMonth);
    this.Static.currentMonth = this.Static.date.getMonth();
    this.Static.currentDate = `${this.Static.months[this.Static.currentMonth]} ${this.Static.currentYear}`;
    this.Static.currentNameMonth = this.Static.months[this.Static.currentMonth]
    this.Static.currentYear = this.Static.date.getFullYear();
  } else {
    this.Static.date = new Date();
  }

  this.Static.arrDayOfMonth = arrDays
  return
}

export const addEvent = function ({ cat, country }) {

  let url = `Events?uuid=${this.Variable.myInfo.uuid}`
  this.Static.records = []

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
  this.Static.countRecords++


  eventSource.addEventListener('add', ({ data }) => {
    if (!this.Static.records) {
      this.Static.records = []
    }
    let record = JSON.parse(data)
    this.Static.records.push(record)
    this.Static.filtredRecords = this.Static.records
    if (this.Static.countRecords == 0) {
      this.Static.allCountries = this.Static.records
    }
    this.init()
  });
  return
}