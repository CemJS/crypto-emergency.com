

export const validEmail = function (email: string) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
}

export const validNickName = function (nickname: string) {

    if (nickname.length < 5 || nickname.length > 30) {
        return false
    }

    let beginWithoutDigit = /^\D.*$/.test(nickname)
    let latinChars = /^[a-zA-Z0-9._]/.test(nickname)
    let withoutSpaces = /^\S*$/.test(nickname)
    let points = /^(?!.*\.\.)(?!\.)(?!.*\.$)/.test(nickname)
    let underscore = /^(?!.*\_\_)(?!\_)(?!.*\_$)/.test(nickname)
    let specialChars = /^(?!.*[!@#$%^&(),+=/\/\]\[{}?><":;!№*|])/.test(nickname)
    let dash = /^(?!.*\-\-)(?!\-)(?!.*\-$)/.test(nickname)

    if (!beginWithoutDigit || !latinChars || !withoutSpaces || !points || !underscore || !specialChars || !dash) {
        return false
    }

    return true
}

export const validMainLang = function (lang: string) {
    if (lang) {
        return true
    }
    else {
        return false
    }
}

export const validCountry = function (country: string) {
    if (country) {
        return true
    }
    else {
        return false
    }
}

export const validPassword = function (password: string) {
    if (password.length < 8 || password.length > 15) {
        return false
    }

    let beginWithoutDigit = /^\D.*$/.test(password)
    let latinChars = /^[a-zA-Z0-9._]/.test(password)
    let specialChars = /^(?!.*[!@#$%^&(),+=/\/\]\[{}?><":;!№*|])/.test(password)


    if (!beginWithoutDigit || !latinChars || !specialChars) {
        return false
    }

    return true
}

