export interface BackgroundOptions {
    picUrl?: String | null
    color?: String | null
    picRepeat?: String | null
    picSize?: String | null
    picPosition?: String | null
}

export const defaultBackgroundOptions: BackgroundOptions = {
    picUrl: null,
    color: null,
    picRepeat: null,
    picSize: null,
    picPosition: null
}

export interface ButtonOptions {
    text: String
    size: String
    type: String
    disable: Boolean
    loading: Boolean
    icon: String | null
    hover?: HoverOptions | null
}

export interface HoverOptions {
    color?: String | null
    backgroundColor?: String | null
    boxShadow?: String | null
}

export const defaultHoverOptions: HoverOptions = {
    color: null,
    backgroundColor: null,
    boxShadow: null
}

export const defaultButtonOptions: ButtonOptions = {
    text: '确认',
    hover: null,
    size: 'middle',
    type: "default",
    disable: false,
    loading: false,
    icon: null
}