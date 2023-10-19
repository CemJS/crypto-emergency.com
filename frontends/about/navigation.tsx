import { Cemjsx } from "cemjs-all"
import Main from "./display/Main"
import UserAgreement from "./display/UserAgreement"
import UserDataPolicy from "./display/UserDataPolicy"
import UserCookies from "./display/UserCookies"

export default function () {
  let param: string = this.Variable.DataUrl[1]
  switch (param) {
    case 'agreement':
      return <UserAgreement />
    case 'policy':
      return <UserDataPolicy />
    case 'cookies':
      return <UserCookies />
    default:
      return <Main />
  }
}

