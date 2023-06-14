import { Cemjsx, CEM } from "cemjs-core"
import space from '@svg/space.svg'

const testAlert = function () {
    alert("CEMJS!!!")
}

export const display = function () {
    return (
        <div class="welcome">
            <header class="header">
                <div class="container">
                    <div class="header_inner">
                        <div class="header_logo">
                            <img class="header_logo-img" src={space}></img>
                        </div>
                        <nav>
                            <ul class="header_menu">
                                <li>Cem JS</li>
                                <li>Contacts</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div class="welcome-container">
                <h2 class="welcome-title" onclick={testAlert}>{CEM.Static.text}</h2>
                <img class="logoCem" src={space}
                    onclick={() => {
                        alert("Привет!")
                    }}></img>
            </div>


            <footer class="footer">
                <div class="container">
                    <div class="footer_inner">
                        <span>Powered by Crypto Emergency</span>
                        <span>©2023</span>
                    </div>
                </div>
            </footer>
        </div>
    )

}