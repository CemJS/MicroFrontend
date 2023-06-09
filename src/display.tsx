import { Cemjsx } from "../CemJS"
import space from '@svg/space.svg'

export const display = function () {
    return (
        <div class="welcome">
            <div class="welcome-container">
                <h2 class="welcome-title">{this.Static.text}</h2>
                <img class="logoCem" src={space}></img>
            </div>
        </div>
    )

}