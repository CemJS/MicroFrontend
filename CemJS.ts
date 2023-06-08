
interface Micro {
    name: String,
    loader: Function,
    display: Function
}


const display = ({ tag, data, children }) => {
    const $app = document.getElementById("app")
    const $el = document.createElement(tag)
    const $children = document.createTextNode(children)
    $el.appendChild($children)
    $app.appendChild($el)
}

export const Cemjsx = (tag, data, children) => {
    console.log('=d014e9=', tag, data, children)
    return { tag, data, children }
}

export const load = async function (micro: Micro) {
    await micro.loader()
    const tmp = await micro.display()
    display(tmp)
}