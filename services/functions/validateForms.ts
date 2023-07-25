const validateForms = {
  nickname: {},
}

validateForms.nickname = async function (val) {
  let beginWithoutDigit = /^\D.*$/.test(val)
  let latinChars = /^[a-zA-Z0-9._]/.test(val)
  let withoutSpaces = /^\S*$/.test(val)
  let points = /^(?!.*\.\.)(?!\.)(?!.*\.$)/.test(val)
  let underscore = /^(?!.*\_\_)(?!\_)(?!.*\_$)/.test(val)
  let specialChars = /^(?!.*[!@#$%^&(),+=/\/\]\[{}?><":;!№*|])/.test(val)
  let dash = /^(?!.*\-\-)(?!\-)(?!.*\-$)/.test(val)

  if (!val) {
    return ["Введите никнейм", false]
  }

  if (val.length < 5 || val.length > 30) {
    return ["Длина никнейма от 5 до 30 символов", false]
  }

  if (!beginWithoutDigit) {
    return ["Никнейм не должен начинаться с цифры", false]
  }

  if (!latinChars) {
    return ["Никнейм может состоять только из латинских символов", false]
  }

  if (!withoutSpaces) {
    return ["В никнейме не должно быть пробелов", false]
  }

  if (!points) {
    return ["Никнейм не может начинаться или заканчиваться точкой, а также иметь 2 точки подряд", false]
  }

  if (!underscore) {
    return ["Никнейм не может начинаться или заканчиваться нижним подчеркиванием, а также иметь 2 нижних подчеркивания подряд", false]
  }

  if (!specialChars) {
    return ["Никнейм не может содержать специальные символы кроме «.»,«_»,«-»", false]
  }

  if (!dash) {
    return ["Никнейм не может начинаться или заканчиваться тире, а также иметь 2 тире подряд", false]
  }

  // let nickEvalible = await CEM.fn.socket.send({ method: "CheckName", params: { nickname: val } })
  // if (!nickEvalible || !nickEvalible?.evalible) {
  //     return [Variable.lang.error_div.nicknameErr11, false]
  // }

  return [null, true]
}

export { validateForms }