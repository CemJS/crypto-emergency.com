
import { validEmail, validNickName, validMainLang, validCountry } from './validator'

interface Form {
    value: string,
    valid: boolean,
    error: boolean | string,
    placeholder: string,
    view: boolean,
    disable: boolean
}

export const formEmail = function (form: Form) {
    if (!form.value.length) {
        form.error = false
        form.valid = false
        return false
    }
    let check = validEmail(form.value)
    if (check) {
        form.error = false
        form.valid = true
        return true
    } else {
        form.error = "Неверный e-mail"
        form.valid = false
        return false
    }
}

export const formCode = function (form: Form) {
    if (typeof form.value != "number") {
        form.valid = false
        return false
    }

    if (form.value < 100000 || form.value > 999999) {
        form.valid = false
        return false
    }

    form.valid = true
    return true
}

export const formNickName = async function (form: Form) {

    if (!form.value.length || form.value.length < 5) {
        form.error = false
        form.valid = false
        return false
    }
    let check = validNickName(form.value)
    if (check) {
        form.error = false
        form.valid = true
        return true
    } else {
        form.error = "Логин недоступен"
        form.valid = false
        return false
    }
}

export const formMainLang = async function (form: Form) {
    let check = validMainLang(form.value)
    if (check) {
        form.error = false
        form.valid = true
        return true
    } else {
        form.error = "Выберите язык"
        form.valid = false
        return false
    }
}

export const formCountry = async function (form: Form) {
    let check = validCountry(form.value)
    if (check) {
        form.error = false
        form.valid = true
        return true
    } else {
        form.error = "Выберите страну"
        form.valid = false
        return false
    }
}