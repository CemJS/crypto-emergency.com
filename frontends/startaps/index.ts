import { Micro } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"
import { listener } from "./listener"
import { fn } from "./functions"

export const micro: Micro = {
    name: "startaps",
    loader,
    display,
    listener,
    fn
}