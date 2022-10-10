export interface ContentOptions {
    text?: string | null,

}

export const defaultContentOptions: ContentOptions = {
    text: null
}

export const getContentOptions = (options: object | string): ContentOptions => {
    return {
        text: <string>options
    }
}

export default getContentOptions