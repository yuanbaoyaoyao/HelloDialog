export interface BackgroundOptions {
    picUrl?: string | null
    color?: string | null
    picRepeat?: string | null
    picSize?: string | null
    picPosition?: string | null
}

export const defaultBackgroundOptions: BackgroundOptions = {
    picUrl: null,
    color: null,
    picRepeat: null,
    picSize: null,
    picPosition: null
}

export interface ButtonOptions {
    text: string
    hover?: HoverOptions | null
}

export interface HoverOptions {
    color?: string | null
    backgroundColor?: string | null
    boxShadow?: string | null
}

export const defaultHoverOptions: HoverOptions = {
    color: null,
    backgroundColor: null,
    boxShadow: null
}

export const defaultButtonOptions: ButtonOptions = {
    text: '确认',
    hover: null
}