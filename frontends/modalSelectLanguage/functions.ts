export const show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('activeModal');
        this.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

export const close = function () {
    this.Ref.modalWindow.classList.remove('activeModal');
    setTimeout(() => {
        this.clearData();
        this.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

export const changeInput = function (e, list) {
    let inputValue = e.target.value.toLowerCase();
    this.Static.listLanguage = list.filter((item) => item.orig_name.toLowerCase().includes(inputValue) == true)
    this.init()
    return
}