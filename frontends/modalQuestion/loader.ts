export const loader = function () {
    this.Static.body = document.querySelector('body');
    this.Static.isValid = false
    this.Static.lang = {
        code: "ru",
        eng_name: "Russian",
        orig_name: "Русский"
    }
    this.Static.langValue = `${this.Static.lang.eng_name} (${this.Static.lang.orig_name})`
    this.Static.data = {
        title: "",
        text: "",
        author: "63c7f6063be93e984c962b75"
    }
}