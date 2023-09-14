import { Cemjsx } from "cemjs-all"
import Course from "./display/Course"
import Main from "./display/Main"
import Show from "./display/Show"



export default function () {
  // console.log('=8ccc9d=', this.Variable.DataUrl)

  if (this.Variable.DataUrl[2]) {
    return <Show />
  }

  if (this.Variable.DataUrl[1] == "course") {
    return <Course />
  }

  if (this.Variable.DataUrl.length == 1) {
    return <Main />
  }

}

