
const Cemjsx = (tag, data, children) => {
    console.log('=d014e9=', tag, data, children)
    return { tag, data, children }
}
const display = ({ tag, data, children }) => {
    const $app = document.getElementById("app")
    const $el = document.createElement(tag)
    const $children = document.createTextNode(children)
    $el.appendChild($children)
    $app.appendChild($el)
}

const test = () => {
    console.log("Привет!")
    display(
        <div class="test">Привет!</div>
    )

}

test()