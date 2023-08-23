import { Cemjsx } from "cemjs-all"
import Show from "./display/show"
import Events_list from "./display/events"




export default function () {
  console.log('=8ccc9d=', this.Variable.DataUrl)
  // return <Events_list />
  
  if (this.Variable.DataUrl[1] == "show" || this.Static.record) {
    return <Show />
  }

    return <Events_list />



}

