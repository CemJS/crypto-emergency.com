

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

