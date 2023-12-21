import { Cemjsx } from "cemjs-all"

interface Params {
    items: Array<Item>
    options: Options
}

interface Item {
    cover: string
    name: string
    desc: string
    link?: string
}

interface Options {
    mainClass: string
    name: string
}

class TitlePreview {
    element: HTMLElement;
    options: Options;

    constructor(element: HTMLElement, options: Options) {
        this.element = element;
        this.options = options;
    }

    buttonPress(type: string) {
        let count = this.element.childNodes.length
        if (count > 1) {
            if (type == "prev") {
                this.element.prepend(this.element.childNodes[count - 1])
            } else {
                this.element.appendChild(this.element.childNodes[0])
            }
        }
        return
    }
}


const init = function ($el: HTMLElement, options: Options) {
    const { name, mainClass } = options
    this.Static[name] = new TitlePreview($el, options)
    return
}

const display = function (params: Params) {
    const { items, options } = params
    const { name, mainClass } = options
    return (
        <div></div>
    )
}

export default display