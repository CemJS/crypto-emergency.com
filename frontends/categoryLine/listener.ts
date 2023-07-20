const listener = {
    "start": function () {
        this.Static.records = []

        if (window.location.pathname.includes("list-startaps")) {
            this.Static.records = [
                {
                    name: "Все",
                },
                {
                    name: "DeFi",
                },
                {
                    name: "Web3",
                },
                {
                    name: "IT",
                },
                {
                    name: "Games",
                },
                {
                    name: "NFT",
                },
                {
                    name: "Blockchain",
                },
                {
                    name: "Bridge",
                },
                {
                    name: "Wallet",
                },
                {
                    name: "Cloud",
                },
                {
                    name: "Services",
                },
            ];
        }
        if (window.location.pathname.includes("list-ico")) {
            this.Static.records = [
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
        }
        // console.log('=e60c81=', data, name, this)
    }
}

export { listener }