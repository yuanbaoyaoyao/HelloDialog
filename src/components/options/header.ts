import { BackgroundOptions } from './common'

export interface HeaderOptions {
    background?: string | BackgroundOptions | null
    enableFullScreen?: boolean
    enableCloseModal?: boolean
    enableMove?: boolean
}

export const defaultHeaderOptions: HeaderOptions = {
    background: null,
    enableFullScreen: false,
    enableCloseModal: true,
    enableMove: false,
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