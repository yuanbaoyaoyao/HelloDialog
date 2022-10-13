export interface HeaderOptions {
    background?: boolean | null,
    touch?: boolean,
    enableFullScreen?: boolean,
    titleLayout?: string,
    enableMove?: boolean,
}

export const defaultHeaderOptions: HeaderOptions = {
    background: null,
    touch: false,
    enableFullScreen: false,
    titleLayout: 'center',
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