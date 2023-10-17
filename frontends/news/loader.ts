export const loader = function () {
    this.Static.records = []
    this.Static.record = null
    this.Static.catActive = 1
    this.Static.category = [
        {
            name: 'Все',
        },
        {
            name: 'NFT',
        },
        {
            name: 'Crypto universe',
        },
        {
            name: 'ICO',
        },
        {
            name: 'DeFi',
        },
        {
            name: 'Mining'
        },
        {
            name: 'Blockchain',
        },
        {
            name: 'Altcoins',
        },
        {
            name: 'Bitcoin',
        },
        {
            name: 'Ethereum',
        },
        {
            name: 'Finance',
        },
        {
            name: 'Regulation',
        },
        {
            name: 'Security',
        },
        {
            name: 'Analytics',
        },
        {
            name: 'Market',
        },
        {
            name: 'GameFi',
        },
        {
            name: 'Experts',
        },
        {
            name: 'Crypto Emergency',
        },
        {
            name: 'Other',
        },
    ]

    this.initAuto("catActive", (value: number) => {
        this.Static.records = []
        if (value == 0) {
            this.Events.news.change(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&lang=ru`, [
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
        } else {
            this.Events.news.change(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&lang=ru&cat=${this.Static.category[value].name}`, [
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

        }
        return true
    })

    if (this.Variable.DataUrl[1] == "show") {
        this.Events.show = this.event(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&id=${this.Variable.DataUrl[2]}`, [
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

    this.Events.news = this.event(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&lang=ru`, [
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
}