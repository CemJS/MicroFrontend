import { Cemjsx, CEM } from "cemjs-core"
import space from '@svg/space.svg'

export const display = function () {
    return (
        <div class="welcome">
            <div class="welcome-container">
                <h2 class="welcome-title">{CEM.Static.text}</h2>
                <img class="logoCem" src={space} onclick={() => {
                    alert('Привет!')
                }}></img>
            </div>
        </div>
    )

}