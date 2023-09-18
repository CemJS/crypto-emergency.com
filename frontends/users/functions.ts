export const addEvent = function ({ nickname, basic, creator, expert }) {
  let url = `Users?uuid=${this.Variable.myInfo.uuid}`

  console.log('=05f362=', basic)

  if (nickname) {
    url += `&nickname=${nickname}`
  }

  if (basic) {
    url += `&basic=${basic}`
  }

  if (creator) {
    url += `&creator=${creator}`
  }

  if (expert) {
    url += `&expert=${expert}`
  }
  console.log('=2dd6b9=', url)

  let eventSource

  if (this._ListsEventSource.length) {
    eventSource = this.eventSourceChange(url)
  } else {
    eventSource = this.eventSource(url)
  }

  eventSource.addEventListener('add', ({ data }) => {
    if (!this.Static.records) {
      this.Static.records = []
    }
    let record = JSON.parse(data)
    this.Static.records.push(record)
    console.log('=a0c1c2=', this.Static.records)
    this.init()
  });

  return
}

export const resetFilter = function () {
  this.Static.lang = {
    value: "",
    name: "",
    code: "",
    orig: "",
  }

  this.Static.country = {
    value: "",
    name: "",
    code: "",
    orig: ""
  }
  this.Ref.basic.checked = false
  this.Ref.creator.checked = false
  this.Ref.expert.checked = false

  this.Static.makeFilter = {
    nickname: "",
    basic: false,
    creator: false,
    expert: false
  }

  this.init()
  return
}
