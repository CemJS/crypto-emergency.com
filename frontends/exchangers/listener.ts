const filterCoin = function ({ choosenCoin }) {
    this.Static.network = choosenCoin

    
}


export const cross = [
    { "front": "modalFilterExchange", fn: filterCoin },
]