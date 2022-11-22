type ButtonSizeOptions = 'large' | 'medium' | 'small'
type ButtonTypeOptions = 'primary' | 'default' | 'success' | 'info' | 'warning' | 'danger' | 'text'
type ButtonShapeOptions = 'default' | 'plain' | 'round' | 'circle'

export interface ButtonOptions {
    text?: string
    size?: ButtonSizeOptions
    type?: ButtonTypeOptions
    shape?: ButtonShapeOptions
    disable?: Boolean
    loading?: Boolean
    icon?: string | null
}

export const defaultButtonOptions: ButtonOptions = {
    text: '确认',
    size: 'medium',
    type: "default",
    shape: "default",
    disable: false,
    loading: false,
    icon: null
}
export interface ImageOptions {
    picUrl?: string | null
    picHeight?: string | null
    picWidth?: string | null
}

export const defaultImageOptions: ImageOptions = {
    picUrl: null,
    picHeight: null,
    picWidth: null
}

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
export interface CommonAttributesOptions {
    title?: string | null
    text?: string | null
    icon?: string | null
    button?: string | Array<string> | boolean | ButtonOptions | null
    image?: string | ImageOptions | null
    enableMove?: boolean
    showCloseModalButton: boolean
    enableFullScreen?: boolean
    background?: BackgroundOptions
    timer?: number | null
}

//enableFullscreen==showFullScreenButton

//通用属性中触发的是各个对应部分中属性
//如何各个对应部分中属性再次定义了，则
//使用对应部分中的属性，同时console.warn("重复定义，将会时使用具体部分中的设定")

