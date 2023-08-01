export const loader = function () {
    this.Static.pass = new Array(6).fill("")
    this.Static.time = 60
    this.fn("timer")
    this.initAuto("time")
}