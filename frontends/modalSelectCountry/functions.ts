export const show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add('activeModal');
    // this.Variable.$el.body.style.overflow = 'hidden';
  }, 100);
}

export const close = function () {
  this.Ref.modalWindowCountry.classList.remove('activeModal');
  setTimeout(() => {
    this.clearData();
    // this.Variable.$el.body.style.overflow = 'auto';
  }, 500)
}

export const changeInput = function (e, list) {
  let inputValue = e.target.value.toLowerCase();
  this.Static.listCountries = list.filter((item) => item.na.toLowerCase().includes(inputValue) == true)
  this.init()
  return
}