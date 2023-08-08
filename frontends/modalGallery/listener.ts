const listener = {
    "cross": [{
        "front": "ico",
        "fn": function ({ records }) {
            console.log('=627aeb=', records)
            this.Static.arr = records
            this.init()
        }
    },
        // {
        //     "front": "modalSelectCountry",
        //     "fn": function ({ name, code }) {
        //         let splitName = name.split(" (")

        //         this.Static.country.name = splitName[0]
        //         this.Static.country.orig = splitName[1].replace(/[{()}]/g, '')
        //         this.Static.country.code = code
        //         this.Static.country.value = name
        //         this.fn("checkForm")
        //         this.init()
        //     }
        // }
    ],
    "start": function (data, name) {
        // console.log('=e60c81=', data, name, this, this.Ref.tabs)
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