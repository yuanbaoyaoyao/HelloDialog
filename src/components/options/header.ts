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
    return{
    }
}

export default getHeaderOptions