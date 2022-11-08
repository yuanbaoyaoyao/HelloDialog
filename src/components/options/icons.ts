export interface IconOptions {
    iconName?: string
    alwaysAnimated?: boolean
}

export const defaultIconOptions: IconOptions = {
    alwaysAnimated: false
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