const categoryLine = function ({ event, name }) {
  this.Static.records = []
  this.Events.news.change(`/api/events/News?uuid=${this.Variable.myInfo.uuid}&lang=ru&cat=${name}`)
}

export const cross = [{ "front": "categoryLine", fn: categoryLine }]