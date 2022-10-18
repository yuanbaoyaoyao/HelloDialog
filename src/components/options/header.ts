import { BackgroundOptions, ButtonOptions, HoverOptions } from './common'
export interface HeaderOptions {
    background: string | BackgroundOptions | null | null
    touch?: boolean
    enableFullScreen?: boolean
    titleLayout?: string
    enableMove?: boolean
    buttonHover?: {
        fullScreenButton: HoverOptions | null
        closeModalButton: HoverOptions | null
    } | null
}

export const defaultHeaderOptions: HeaderOptions = {
    background: null,
    touch: false,
    enableFullScreen: false,
    titleLayout: 'center',
    enableMove: false,
    buttonHover: null
}

export const getHeaderOptions = (options: object | string): HeaderOptions => {
    let tempOptions = <any>{}
    let finalOptions = <any>{}
    tempOptions = Object.assign({}, options)
    finalOptions = Object.assign({}, defaultHeaderOptions)
    Object.keys(finalOptions).filter(item => {
        if (tempOptions[item] != undefined) {
            finalOptions[item] = tempOptions[item]
        }
    })

    if (options == undefined) {
        return defaultHeaderOptions
    }
    return finalOptions
}

export default getHeaderOptions