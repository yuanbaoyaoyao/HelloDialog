export interface BackdropOptions {
    closeModal?: boolean,
    background?: boolean | null,
}

export const defaultBackdropOptions: BackdropOptions = {
    closeModal: true,
    background: null
}

export const getBackdropOptions = (options: object | string): BackdropOptions => {
    let tempOptions = <any>{}
    let finalOptions = <any>{}
    tempOptions = Object.assign({}, options)
    finalOptions = Object.assign({}, defaultBackdropOptions)
    Object.keys(finalOptions).filter(item => {
        if (tempOptions[item] != undefined) {
            finalOptions[item] = tempOptions[item]
        }
    })

    if (options == undefined) {
        return defaultBackdropOptions
    }
    return finalOptions
}

export default getBackdropOptions