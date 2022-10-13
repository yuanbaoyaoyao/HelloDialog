import { backgroundOptions } from './common'

export interface ContentOptions {
    text?: string | null,
    background?: string | backgroundOptions | null,
    touch?: boolean | null,
    layout?: string,
    type?: string,
    loading?: boolean,
}

export const defaultContentOptions: ContentOptions = {
    text: null,
    background: null,
    touch: null,
    layout: 'center',
    type: 'text',
    loading: false,
}

export const getContentOptions = (options: object | string): ContentOptions => {
    let tempOptions = <any>{}
    let finalOptions = <any>{}
    tempOptions = Object.assign({}, options)
    finalOptions = Object.assign({}, defaultContentOptions)
    Object.keys(finalOptions).filter(item => {
        if (tempOptions[item] != undefined) {
            finalOptions[item] = tempOptions[item]
        }
    })

    if (options == undefined) {
        return defaultContentOptions
    }
    return finalOptions
}

export default getContentOptions