import { Cemjsx } from "cemjs-all"
// import About from "./pages/about"



export default function () {
  switch (this.Static.page) {
    case "about":
      // return <About />
      break;

    case "contacts":
      // return <Contacts />
      break;

    default:
      return <div></div>
      break;
  }
}

