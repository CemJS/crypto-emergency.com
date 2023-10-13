export const loader = function () {
    this.Static.arr = [
        {
            id: 1212321,
            name: "fedor",
            age: 23
        },
        {
            id: 12321,
            name: "misha",
            age: 23
        },
        {
            id: 122321,
            name: "artem",
            age: 23
        },
        {
            id: 12321,
            name: "evgenii",
            age: 23
        },
        {
            id: 912321,
            name: "oleg",
            age: 23
        },
    ]
    this.Static.records = []

    this.Events.users = this.event(`/api/events/Evg?uuid=${this.Variable.myInfo.uuid}&lang=ru`)

    this.Events.users.addEventListener('add', ({ data }) => {
        console.log('=09edf4=',data)
        let record = JSON.parse(data)
        if (Object.keys(record).length) {
            this.Static.records.push(record)
        }
        this.init()
    });


}