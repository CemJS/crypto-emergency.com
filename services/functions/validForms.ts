import {
    validEmail,
    validNickName,
    validLang,
    validCountry,
    validPassword,
    validConfirmPassword
} from './validator'

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

export const formLang = async function (form: Form) {
    if (!form.value.length) {
        form.error = false
        form.valid = false
        return false
    }
    let check = validLang(form.value)
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
    if (!form.value.length) {
        form.error = false
        form.valid = false
        return false
    }
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

export const formPassword = async function (form: Form) {
    if (!form.value.length) {
        form.error = false
        form.valid = false
        return false
    }
    let check = validPassword(form.value)
    if (check) {
        form.error = false
        form.valid = true
        return true
    } else {
        form.error = "Слишком легкий пароль"
        form.valid = false
        return false
    }
}

export const formConfirmPassword = async function (formPass: Form, formConfirmPass: Form) {
    if (!formPass.value.length && !formConfirmPass.value.length) {
        formPass.error, formConfirmPass.error = false
        formPass.valid, formConfirmPass.valid = false
        return false
    }
    let check = validConfirmPassword(formPass.value, formConfirmPass.value)
    if (check) {
        formConfirmPass.error = false
        formConfirmPass.valid = true
        return true
    } else {
        formConfirmPass.error = "Пароли не совпадают"
        formConfirmPass.valid = false
        return false
    }
}