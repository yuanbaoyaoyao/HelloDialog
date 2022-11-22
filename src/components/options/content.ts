import { BackgroundOptions } from './common'

type contentType = 'text' | 'input' | 'select' | 'slider'

//content中内容以items的形式由上到下排列
//content 一个总的className
//  contentItem   一个通用className+提出可自定义className
//  contentItem
export interface ContentOptions {
    text?: string | null,
    background?: string | BackgroundOptions | null,
    touch?: boolean | null,
    layout?: string,
    type?: contentType,
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