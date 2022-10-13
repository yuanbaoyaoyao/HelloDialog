import { backgroundOptions } from './common'

export interface ModalOptions {
    background?: string | backgroundOptions | null,
    position?: string,
    timer?: number | null,
    loading?: boolean,
    appendToBody?: boolean,
}

export const defaultModalOptions: ModalOptions = {
    background: null,
    position: 'center',
    timer: null,
    loading: false,
    appendToBody: false,
}

export const getModalOptions = (options: object): ModalOptions => {
    let tempOptions = <any>{}
    let finalOptions = <any>{}
    tempOptions = Object.assign({}, options)
    finalOptions = Object.assign({}, defaultModalOptions)
    Object.keys(finalOptions).filter(item => {
        if (tempOptions[item] != undefined) {
            finalOptions[item] = tempOptions[item]
        }
    })

    if (options == undefined) {
        return defaultModalOptions
    }
    return finalOptions
}

export default getModalOptions