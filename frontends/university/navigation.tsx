import { Cemjsx } from "cemjs-all"
import Course from "./display/Course"
import Main from "./display/Main"
// import Show from "./display/Show"



export default function () {
  console.log('=8ccc9d=', this.Variable.DataUrl)

  if (this.Variable.DataUrl.length == 1) {
    return <Main />
  }

  switch (this.Variable.DataUrl[1]) {
    case "course":
      return <Course />
      break;

    // case "show":
    //   return <Show />
    //   break;

    default:
      return <div></div>
      break;
  }
}

