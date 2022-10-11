import { getBackdropOptions, BackdropOptions, defaultBackdropOptions } from './backdrop'
import { getBorderOptions, BorderOptions, defaultBorderOptions } from './border'
import { getBottomOptions, BottomOptions, defaultBottomOptions } from './bottom'
import { getContentOptions, ContentOptions, defaultContentOptions } from './content'
import { getHeaderOptions, HeaderOptions, defaultHeaderOptions } from './header'
import { getModalOptions, ModalOptions, defaultModalOptions } from './modal'

export interface HelloOptions {
    backdrop: BackdropOptions,
    border: BorderOptions,
    bottom: BottomOptions,
    content: ContentOptions,
    header: HeaderOptions,
    modal: ModalOptions,
}

const defaultOptions: HelloOptions = {
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
    options.modal = getModalOptions(options.modal)
    options.border = getBorderOptions(options.border)
    options.backdrop = getBackdropOptions(options.backdrop)
    const helloOptions: HelloOptions = Object.assign({}, defaultOptions, options)
    return helloOptions
}

export default getOptions