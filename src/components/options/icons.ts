export type IconNameOptions = 'error' | 'info' | 'question' | 'success' | 'warning'

export interface IconOptions {
    iconName?: IconNameOptions | null
}

export const defaultIconOptions: IconOptions = {
    iconName: null,
}

export const getIconOptions = (options: object | string): IconOptions => {
    let tempOptions = <any>{}
    let finalOptions = <any>{}
    tempOptions = Object.assign({}, options)
    finalOptions = Object.assign({}, defaultIconOptions)
    Object.keys(finalOptions).filter(item => {
        if (tempOptions[item] != undefined) {
            finalOptions[item] = tempOptions[item]
        }
    })

    if (options == undefined) {
        return defaultIconOptions
    }
    return finalOptions
}

export default getIconOptions