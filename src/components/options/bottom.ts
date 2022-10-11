export interface BottomOptions {
    background?: boolean,
    touch?: boolean | null,
    layout?: string,
}

export const defaultBottomOptions: BottomOptions = {
    background: true,
    touch: null,
    layout: 'center'
}

export const getBottomOptions = (options: object): BottomOptions => {
    let tempOptions = <any>{}
    let finalOptions = <any>{}
    tempOptions = Object.assign({}, options)
    finalOptions = Object.assign({}, defaultBottomOptions)
    Object.keys(finalOptions).filter(item => {
        if (tempOptions[item] != undefined) {
            finalOptions[item] = tempOptions[item]
        }
    })

    if (options == undefined) {
        return defaultBottomOptions
    }
    return finalOptions
}

export default getBottomOptions