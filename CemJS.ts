
interface Static {
    [elemName: string]: any;
}

interface Node {
    tag: String,
    data: Static | null,
    children: undefined | any[]
}

interface Micro {
    name: String,
    loader: Function,
    display: Function,
    Static?: Static
}



const setDataElement = function (data, $el) {
    if (!data) {
        return
    }

    Object.entries(data).forEach(([name, value]) => {
        $el.setAttribute(name, value)
    })

    return
}


const createElement = function (node) {

    if (typeof node != "object") {
        return document.createTextNode(node)
    }

    let $el = document.createElement(node.tag)
    setDataElement(node.data, $el)

    if (typeof node.children == "object") {
        node.children
            .map(createElement)
            .forEach($el.appendChild.bind($el));
    } else {
        return document.createTextNode(node.tag)
    }

    return $el
}

const display = (node) => {
    const $app = document.getElementById("app")
    const newDom = createElement(node)
    console.log('=56714b=', newDom)
    $app.appendChild(newDom)
}

export const Cemjsx = (tag: String, data: any, ...children: any[]) => {
    return { tag, data, children }
}

export const load = async function (micro: Micro) {
    micro.Static = {}
    await micro.loader()
    const tmp = await micro.display()
    display(tmp)
}