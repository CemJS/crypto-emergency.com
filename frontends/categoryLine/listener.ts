
export const start = function () {
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
    if (window.location.pathname.includes("news")) {
        this.Static.records = [
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
    }
    return
}