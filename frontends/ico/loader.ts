export const loader = function () {


    this.Static.records = []
    this.Static.record = null
    this.Static.catActive = 0
 
    this.Static.categories = [
        {
            name: 'Все',
        },
        {
            name: 'ICO',
        },
        {
            name: 'IDO',
        },
        {
            name: 'IEO',
        },
        {
            name: 'IGO',
        },
        {
            name: 'IFO'
        }
    ]

    this.Static.makeFilter = {
        cat: "Все",
        active: "Active"
    }
    //status tabs
    this.Static.activeIndex = 0
    // this.Static.activeTab = 'Active';
    // this.Static.icoList = document.querySelector('ico_list');

    

    // this.initAuto("catActive", (value: number) => {
    //     console.log('=value=', value)
    //     console.log('=14d296=', "Кликаю")
    //     this.Static.records = []
    //     if (value == 0) {
            // this.Events.ico.change(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&lang=ru`, [
            //     {
            //         type: "add",
            //         fn: ({ data }) => {
            //             let record = JSON.parse(data)
            //             if (Object.keys(record).length) {
            //                 this.Static.records.push(record)
            //             }
            //             this.init()
            //         }
            //     }
            // ])
    //     } else {
    //         this.Events.ico.change(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&lang=ru&cat=${this.Static.categories[value].name}`, [
    //             {
    //                 type: "add",
    //                 fn: ({ data }) => {
    //                     let record = JSON.parse(data)
    //                     if (Object.keys(record).length) {
    //                         this.Static.records.push(record)
    //                     }
    //                     this.init()
    //                 }
    //             }
    //         ])

    //     }
    //     return true
    // })

    if (this.Variable.DataUrl[1] == "show") {
        this.Events.ico = this.event(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&id=${this.Variable.DataUrl[2]}`, [
            {
                type: "update",
                fn: ({ data }) => {
                    let record = JSON.parse(data)
                    if (Object.keys(record).length) {
                        this.Static.record = record
                    }
                    this.init()
                }
            }
        ])
    }

    this.Events.ico = this.event(`/api/events/Ico?uuid=${this.Variable.myInfo.uuid}&lang=ru`, [
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
    ])

    return



    

    // this.fn("addEvent", this.Static.makeFilter)


}