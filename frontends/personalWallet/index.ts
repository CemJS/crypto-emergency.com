import { Micro } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"
import { fn } from "./functions"
import { listener } from "./listener"

export const micro: Micro = {
    name: "personal",
    loader,
    display,
    fn,
    listener
}