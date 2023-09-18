import { Cemjsx } from "cemjs-all"
import UserAgreement from "./display/UserAgreement"
import UserCategory from "./display/UserCategory"
import UserCookies from "./display/UserCookies"
import UserDataPolicy from "./display/UserDataPolicy"
import UserPersonal from "./display/UserPersonal"
import Main from "./display/Main"


export default function () {
  let param = this.Variable.DataUrl[1] || ""
  switch (param) {
    case 'userAgreement':
      return <UserAgreement />
      break;
    case 'userCategory':
      return <UserCategory />
      break;
    case 'userCookies':
      return <UserCookies />
      break;
    case 'userDataPolicy':
      return <UserDataPolicy />
      break;
    case 'userPersonal':
      return <UserPersonal />
      break;
    default:
      return <Main />
  }
}