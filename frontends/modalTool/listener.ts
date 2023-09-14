const listener = {

    "start": function (data, name) {
        // console.log('=e60c81=', data, name)
    },
    "finish": function (data, name, t) {
        setTimeout(() => {
            this.Ref.modalWindow.classList.add('activeModal');
            this.Static.body.classList.add('activeModal');
            this.Static.body.style.overflow = 'hidden';
        }, 100)
    }
}

export { listener }