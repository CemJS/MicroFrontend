import { loader } from "./loader"
import { display } from "./display"

interface Micro {
    name: String,
    loader: Function,
    display: Function
}

export const micro: Micro = {
    name: "MicroTest",
    loader,
    display
}