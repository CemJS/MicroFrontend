import { loader } from "./Loader"
import { display } from "./Display"

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