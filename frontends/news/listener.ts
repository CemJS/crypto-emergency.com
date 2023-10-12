const categoryLine = function ({ event, name }) {
  this.fn("addEvent", { cat: name })
}

export const cross = [{ "front": "categoryLine", fn: categoryLine }]

