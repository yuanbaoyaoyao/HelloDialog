export interface BorderOptions {
    enableStretch?: boolean,
    selectedBorders?: string | Array<string> | null
}

export const defaultBorderOptions: BorderOptions = {
    enableStretch: true,
    selectedBorders: null,
}

export const getBorderOptions = (options: object): BorderOptions => {
    let tempOptions = <any>{}
    let finalOptions = <any>{}
    tempOptions = Object.assign({}, options)
    finalOptions = Object.assign({}, defaultBorderOptions)
    Object.keys(finalOptions).filter(item => {
        if (tempOptions[item] != undefined) {
            finalOptions[item] = tempOptions[item]
        }
    })

    if (options == undefined) {
        return defaultBorderOptions
    }
    return finalOptions
}

export default getBorderOptions