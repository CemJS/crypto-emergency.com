const listener = {
    "cross": [{
        "front": "categoryLine",
        "fn": function ({ event, name }) {
            this.fn("addEvent", { cat: name })
        }
    }]
}

export { listener }