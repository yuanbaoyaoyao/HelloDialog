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

export type HelloArgs = Partial<HelloOptions>[]

export const getOptions = (...args: Array<HelloArgs>): HelloOptions => {
    let options = <any>{}
    let temp: string = <string>args[0][0].content
    options.content = getContentOptions(temp)
    const helloOptions: HelloOptions = Object.assign({}, options)
    return helloOptions
}

export default getOptions