import { Cemjsx } from "cemjs-all"
import About from "./display/About"
import UserAgreement from "./display/UserAgreement"
import UserDataPolicy from "./display/UserDataPolicy"
import UserCookies from "./display/UserCookies"
import Career from "./display/Career"
import Contacts from "./display/Contacts"

export default function () {
  let param: string = this.Variable.DataUrl[1]
  if (!param || param == "") {
    param = this.Variable.DataUrl[0]
  }
  switch (param) {
    case 'terms-of-service':
      return <UserAgreement />
    case 'data-policy':
      return <UserDataPolicy />
    case 'cookies-policy':
      return <UserCookies />
    case 'career':
      return <Career />
    case 'contacts':
      return <Contacts />
    case 'about':
      return <About />
    default:
      return <About />
  }
}

