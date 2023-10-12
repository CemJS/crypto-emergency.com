import { Cemjsx } from "cemjs-all"
import Show from "./display/Show"
import Main from "./display/Main"

export default function () {
  let param = this.Variable.DataUrl[1] || ""
  switch (param) {
    case 'show':
      return <Show />
    default:
      return <Main />
  }
}

