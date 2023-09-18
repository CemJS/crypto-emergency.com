import { Cemjsx } from "cemjs-all"
import Show from "./display/Show"
import Main from "./display/Main"

export default function () {

  let param = this.Variable.DataUrl[1] || ""
  if (this.Static.record) {
    param = "show"
  }

  switch (param) {
    case 'show':
      return <Show />
      break;
    default:
      return <Main />
  }
}

