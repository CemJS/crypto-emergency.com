const listener = {
    "cross": [{
        "front": "categoryLine",
        "fn": function ({ event, name }) {
            console.log('=20160d=',event, name)
            this.fn("addEvent", { cat: name })
        }
    }]
}

export { listener }