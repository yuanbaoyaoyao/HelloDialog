import { getBackdropOptions, BackdropOptions, defaultBackdropOptions } from './backdrop'
import { getBorderOptions, BorderOptions, defaultBorderOptions } from './border'
import { getBottomOptions, BottomOptions, defaultBottomOptions } from './bottom'
import { getContentOptions, ContentOptions, defaultContentOptions } from './content'
import { getHeaderOptions, HeaderOptions, defaultHeaderOptions } from './header'
import { getModalOptions, ModalOptions, defaultModalOptions } from './modal'
import { getIconOptions } from './icons'
import { CommonAttributesOptions, defaultBackgroundOptions } from './common'

export interface HelloOptions extends CommonAttributesOptions {
    backdrop: BackdropOptions,
    border: BorderOptions,
    bottom: BottomOptions,
    content: ContentOptions,
    header: HeaderOptions,
    modal: ModalOptions,
}

export const defaultOptions: HelloOptions = {
    title: null,
    text: null,
    icon: null,
    button: null,
    image: null,
    enableMove: false,
    showCloseModalButton: false,
    enableFullScreen: false,
    background: defaultBackgroundOptions,
    timer: null,
    backdrop: defaultBackdropOptions,
    border: defaultBorderOptions,
    bottom: defaultBottomOptions,
    content: defaultContentOptions,
    header: defaultHeaderOptions,
    modal: defaultModalOptions,
}

export type HelloArgs = Partial<HelloOptions>

export const getOptions = (args: HelloArgs): HelloOptions => {
    let options = <any>{}
    options = Object.assign({}, args)
    options.content = getContentOptions(options.content)
    options.bottom = getBottomOptions(options.bottom)
    options.header = getHeaderOptions(options.header)
    options.modal = getModalOptions(options.modal)
    options.border = getBorderOptions(options.border)
    options.backdrop = getBackdropOptions(options.backdrop)
    options.icon = getIconOptions(options.icon)
    const helloOptions: HelloOptions = Object.assign({}, defaultOptions, options)
    console.log("helloOptions:", helloOptions)
    return helloOptions
}

export default getOptions