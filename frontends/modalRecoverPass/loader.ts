export const loader = function () {
    this.Static.body = document.querySelector('body');
    this.Static.email = {
        value: "",
        valid: false
    }
}