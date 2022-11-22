import { BackgroundOptions, defaultBackgroundOptions } from './common'

export interface BackdropOptions {
    closeModal?: boolean,
    background?: string | BackgroundOptions | null
}

export const defaultBackdropOptions: BackdropOptions = {
    closeModal: true,
    background: defaultBackgroundOptions,
}

export const getBackdropOptions = (options: object | string): BackdropOptions => {
    let tempOptions = <any>{}
    let finalBackgroundOptions = <any>{}
    let finalOptions = <any>{}
    tempOptions = Object.assign({}, options)
    finalBackgroundOptions = Object.assign({}, defaultBackgroundOptions)
    finalOptions = Object.assign({}, defaultBackdropOptions)
    Object.keys(finalOptions).filter(item => {
        if (tempOptions[item] != undefined) {
            if (typeof (tempOptions[item]) == 'object') {
                Object.keys(finalBackgroundOptions).filter(i => {
                    if (tempOptions[item][i] != undefined) {
                        finalBackgroundOptions[i] = tempOptions[item][i]
                    }
                })
                finalOptions[item] = finalBackgroundOptions
            } else {
                finalOptions[item] = tempOptions[item]
            }
        }
    })

    if (options == undefined) {
        return defaultBackdropOptions
    }
    return finalOptions
}

export default getBackdropOptions