import { Micro } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"
import { listener } from "./listener"

export const micro: Micro = {
    name: "events",
    loader,
    display,
    listener

}