const listener = {

    "start": function (data, name) {
        // console.log('=e60c81=', data, name, this, this.Ref.tabs)
    },
    "finish": function (data, name, t) {
        this.Static.modalWindow = this.Ref.modalWindow;
        setTimeout(() => {
            this.Ref.modalWindow.classList.add('activeModal');
        }, 200)
        // this.Ref.modalWindow.classList.add('activeModal');
        console.log('=ab7913=', this.Static.modalWindow)
    }
}

export { listener }