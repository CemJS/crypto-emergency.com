
import { validEmail } from './validator'

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