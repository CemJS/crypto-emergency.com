const categoryLine = function ({ event, name }) {
  console.log('=20160d=', event, name)
  this.fn("addEvent", { cat: name })
}

export const cross = [{ "front": "categoryLine", fn: categoryLine }]

