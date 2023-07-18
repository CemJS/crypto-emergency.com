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
        // console.log('=e60c81=', data, name, this)
    }
}

export { listener }