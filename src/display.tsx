import { Cemjsx, CEM } from "cemjs-core"
import space from '@svg/space.svg'

const testAlert = function () {
    alert("CEMJS!!!")
}

export const display = function () {
    return (
        <div class="welcome">
            <div class="welcome-container">
                <h2 class="welcome-title" onclick={testAlert}>{CEM.Static.text}</h2>
                <img class="logoCem" src={space}
                    onclick={() => {
                        alert("Привет!")
                    }}></img>
            </div>
        </div>
    )

}